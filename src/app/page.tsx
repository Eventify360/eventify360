export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">

        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          Eventify360
        </h1>

        <p className="text-pink-500 text-2xl md:text-3xl mb-8 max-w-3xl">
          Marketplace premium para eventos, fotógrafos,
          salones, DJs, decoración y experiencias inolvidables.
        </p>

        <div className="flex gap-4">

          <button className="bg-pink-500 hover:bg-pink-600 px-8 py-4 rounded-2xl text-lg font-semibold transition">
            Buscar proveedores
          </button>

          <button className="border border-pink-500 hover:bg-pink-500/10 px-8 py-4 rounded-2xl text-lg transition">
            Convertirme en proveedor
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section className="grid md:grid-cols-3 gap-8 px-8 pb-24">

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-pink-500">
            Encuentra proveedores
          </h2>

          <p className="text-zinc-300">
            Busca fotógrafos, DJs, salones,
            catering y más en un solo lugar.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-pink-500">
            Cotizaciones rápidas
          </h2>

          <p className="text-zinc-300">
            Solicita múltiples cotizaciones
            y compara opciones fácilmente.
          </p>
        </div>

        <div className="bg-zinc-900 p-8 rounded-3xl">
          <h2 className="text-2xl font-bold mb-4 text-pink-500">
            Plataforma escalable
          </h2>

          <p className="text-zinc-300">
            Arquitectura moderna con Next.js,
            Supabase y Vercel.
          </p>
        </div>

      </section>

    </main>
  )
}