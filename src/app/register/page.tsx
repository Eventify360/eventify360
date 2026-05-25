"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RegisterPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleRegister(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Cuenta creada correctamente");
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">

      <div className="w-full max-w-md bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

        <h1 className="text-4xl font-bold mb-2">
          Crear cuenta
        </h1>

        <p className="text-zinc-400 mb-8">
          Bienvenido a Eventify360
        </p>

        <form
          onSubmit={handleRegister}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="w-full p-4 rounded-xl bg-zinc-800 border border-zinc-700 outline-none"
          />

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
              ? "Creando cuenta..."
              : "Crear cuenta"}
          </button>

        </form>

      </div>

    </main>
  );
}