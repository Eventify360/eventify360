"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function LoginPage() {

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Bienvenido a Eventify360");

    router.push("/dashboard");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          Iniciar sesión
        </h1>

        <p className="text-zinc-400 mb-8">
          Accede a tu cuenta
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-4"
        >

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 outline-none"
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-600 hover:bg-purple-700 transition-all p-4 rounded-xl font-semibold"
          >
            {loading
              ? "Entrando..."
              : "Iniciar sesión"}
          </button>

        </form>

      </div>

    </main>
  );
}