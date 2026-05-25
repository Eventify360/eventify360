export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Eventify<span className="text-purple-500">360</span>
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Marketplace premium para encontrar los mejores proveedores
              para eventos inolvidables.
            </p>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Empresa
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Sobre nosotros
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Cómo funciona
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Blog
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contacto
              </li>
            </ul>
          </div>

          {/* Categorías */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Categorías
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Fotografía
              </li>

              <li className="hover:text-white transition cursor-pointer">
                DJ & Música
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Salones
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Catering
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Legal
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Privacidad
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Términos
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Cookies
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Seguridad
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between">
          
          <p className="text-gray-500 text-sm">
            © 2026 Eventify360. Todos los derechos reservados.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">
            <span className="hover:text-white transition cursor-pointer">
              Instagram
            </span>

            <span className="hover:text-white transition cursor-pointer">
              Facebook
            </span>

            <span className="hover:text-white transition cursor-pointer">
              TikTok
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}