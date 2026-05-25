import SearchBar from "@/components/search/SearchBar";
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">

      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-700/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-full text-sm text-zinc-300 mb-8">
          ✨ Tu evento, todo en un solo lugar
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">
              Organiza eventos 
              <span className="block text-purple-500">
                inolvidables
              </span>
            </h1>
<div className="mt-10">
  <SearchBar />
</div>
            <p className="text-zinc-400 text-xl mt-8 max-w-xl leading-relaxed">
              Encuentra proveedores premium para bodas,
              XV años, eventos corporativos y más.
              Cotiza, compara y reserva fácilmente.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-semibold shadow-lg shadow-purple-900/40">
                Explorar proveedores
              </button>

              <button className="border border-zinc-700 hover:border-purple-500 hover:bg-zinc-900 transition px-8 py-4 rounded-2xl">
                Cómo funciona
              </button>

            </div>

            {/* Stats */}
            <div className="flex gap-10 mt-14 flex-wrap">

              <div>
                <h3 className="text-3xl font-bold">
                  +2,500
                </h3>

                <p className="text-zinc-500 mt-1">
                  Proveedores
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  +15k
                </h3>

                <p className="text-zinc-500 mt-1">
                  Eventos realizados
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  4.9/5
                </h3>

                <p className="text-zinc-500 mt-1">
                  Calificación promedio
                </p>
              </div>

            </div>

          </div>

          {/* Right */}
          <div className="relative">

            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-pink-500 rounded-[40px] blur-3xl opacity-20"></div>

            <div className="relative bg-zinc-900 border border-zinc-800 rounded-[40px] overflow-hidden shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1400&auto=format&fit=crop"
                alt="Evento"
                className="w-full h-[600px] object-cover"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}