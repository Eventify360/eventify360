export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <h1 className="text-2xl font-bold text-pink-500">
          Eventify360
        </h1>

        <div className="flex gap-6">
          <a href="#">Inicio</a>
          <a href="#">Proveedores</a>
          <a href="#">Eventos</a>
          <a href="#">Contacto</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-6">

        <h2 className="text-6xl font-extrabold max-w-4xl leading-tight">
          Encuentra los mejores
          <span className="text-pink-500">
            {" "}proveedores para eventos
          </span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl">
          DJs, fotógrafos, catering, salones,
          maquillaje, decoración y mucho más.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-pink-500 hover:bg-pink-600 px-6 py-3 rounded-xl font-semibold">
            Buscar proveedores
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-xl font-semibold hover:border-pink-500">
            Ser proveedor
          </button>
        </div>

      </section>

      {/* CATEGORÍAS */}
      <section className="px-8 pb-24">

        <h3 className="text-3xl font-bold text-center mb-10">
          Categorías populares
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {[
            "Fotografía",
            "DJ & Música",
            "Salones",
            "Decoración",
            "Catering",
            "Maquillaje"
          ].map((item) => (

            <div
              key={item}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-pink-500 transition"
            >
              <h4 className="text-xl font-semibold">
                {item}
              </h4>

              <p className="text-gray-400 mt-3">
                Encuentra los mejores servicios de {item.toLowerCase()}.
              </p>
            </div>

          ))}

        </div>

      </section>

    </main>
  );
}