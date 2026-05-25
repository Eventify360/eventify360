export default function Navbar() {
  return (
    <nav className="w-full border-b border-zinc-800 bg-black/80 backdrop-blur sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* LOGO */}
        <div className="flex items-center gap-2">

          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
            E
          </div>

          <h1 className="text-2xl font-bold text-white">
            Eventify<span className="text-purple-500">360</span>
          </h1>

        </div>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-zinc-300">

          <button className="hover:text-purple-400 transition">
            Inicio
          </button>

          <button className="hover:text-purple-400 transition">
            Explorar
          </button>

          <button className="hover:text-purple-400 transition">
            Categorías
          </button>

          <button className="hover:text-purple-400 transition">
            Cómo funciona
          </button>

          <button className="hover:text-purple-400 transition">
            Para proveedores
          </button>

        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">

          <button className="text-zinc-300 hover:text-white transition">
            Iniciar sesión
          </button>

          <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-xl font-medium hover:opacity-90 transition">
            Regístrate
          </button>

        </div>

      </div>

    </nav>
  )
}