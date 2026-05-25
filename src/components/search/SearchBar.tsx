export default function SearchBar() {
  return (
    <div className="mt-12 bg-zinc-900 border border-zinc-800 rounded-3xl p-4 shadow-2xl">

      <div className="grid md:grid-cols-4 gap-4">

        {/* Servicio */}
        <div className="bg-black rounded-2xl p-4 border border-zinc-800">
          <p className="text-zinc-500 text-sm mb-2">
            ¿Qué servicio buscas?
          </p>

          <input
            type="text"
            placeholder="Fotógrafo, DJ, salón..."
            className="bg-transparent outline-none w-full text-white"
          />
        </div>

        {/* Evento */}
        <div className="bg-black rounded-2xl p-4 border border-zinc-800">
          <p className="text-zinc-500 text-sm mb-2">
            Tipo de evento
          </p>

          <select className="bg-transparent outline-none w-full text-white">
            <option>Boda</option>
            <option>XV años</option>
            <option>Corporativo</option>
            <option>Cumpleaños</option>
          </select>
        </div>

        {/* Ubicación */}
        <div className="bg-black rounded-2xl p-4 border border-zinc-800">
          <p className="text-zinc-500 text-sm mb-2">
            Ubicación
          </p>

          <input
            type="text"
            placeholder="Ciudad"
            className="bg-transparent outline-none w-full text-white"
          />
        </div>

        {/* Botón */}
        <button className="bg-purple-600 hover:bg-purple-700 transition rounded-2xl font-semibold text-lg">
          Buscar
        </button>

      </div>

    </div>
  );
}