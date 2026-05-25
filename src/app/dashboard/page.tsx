"use client";
import ProviderCard from "@/components/providers/ProviderCard";
import { providers } from "@/data/providers";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";

export default function DashboardPage() {

  const router = useRouter();

  async function handleLogout() {

    await supabase.auth.signOut();

    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-black text-white flex">

      {/* SIDEBAR */}

      <aside className="w-72 bg-zinc-950 border-r border-zinc-800 p-8">

        <h1 className="text-3xl font-bold mb-12">
          Eventify360
        </h1>

        <nav className="space-y-4">

          <button className="block text-left w-full bg-purple-600 px-4 py-3 rounded-xl">
            Dashboard
          </button>

          <button className="block text-left w-full hover:bg-zinc-900 px-4 py-3 rounded-xl transition">
            Proveedores
          </button>

          <button className="block text-left w-full hover:bg-zinc-900 px-4 py-3 rounded-xl transition">
            Cotizaciones
          </button>

          <button className="block text-left w-full hover:bg-zinc-900 px-4 py-3 rounded-xl transition">
            Favoritos
          </button>

        </nav>

        <button
          onClick={handleLogout}
          className="mt-12 w-full bg-red-600 hover:bg-red-700 transition p-4 rounded-xl font-semibold"
        >
          Cerrar sesión
        </button>

      </aside>

      {/* CONTENT */}

      <section className="flex-1 p-10">

        <h2 className="text-5xl font-bold mb-4">
          Bienvenido a Eventify360
        </h2>

        <p className="text-zinc-400 mb-10">
          Tu marketplace premium para eventos.
        </p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <p className="text-zinc-400 mb-2">
              Proveedores
            </p>

            <h3 className="text-4xl font-bold">
              0
            </h3>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <p className="text-zinc-400 mb-2">
              Cotizaciones
            </p>

            <h3 className="text-4xl font-bold">
              0
            </h3>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">

            <p className="text-zinc-400 mb-2">
              Favoritos
            </p>

            <h3 className="text-4xl font-bold">
              0
            </h3>

          </div>

        </div>
<div className="mt-14">

  <div className="flex items-center justify-between mb-8">

    <h2 className="text-3xl font-bold">
      Proveedores destacados
    </h2>

    <button className="bg-zinc-900 border border-zinc-800 px-5 py-3 rounded-xl hover:bg-zinc-800 transition">
      Ver todos
    </button>

  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    {providers.map((provider) => (

      <ProviderCard
        key={provider.id}
        name={provider.name}
        category={provider.category}
        location={provider.location}
        price={provider.price}
        image={provider.image}
      />

    ))}

  </div>

</div>
      </section>

    </main>
  );
}