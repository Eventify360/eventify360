const categories = [
  {
    title: "Fotografía",
    description: "Fotógrafos y video profesional",
    icon: "📸",
  },
  {
    title: "DJ & Música",
    description: "Música en vivo y DJs",
    icon: "🎧",
  },
  {
    title: "Salones",
    description: "Espacios para eventos",
    icon: "🏛️",
  },
  {
    title: "Decoración",
    description: "Diseño y ambientación",
    icon: "✨",
  },
  {
    title: "Catering",
    description: "Banquetes y alimentos",
    icon: "🍽️",
  },
  {
    title: "Maquillaje",
    description: "Beauty artists premium",
    icon: "💄",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#050816] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-14">
          <p className="text-purple-400 font-semibold mb-3">
            Categorías
          </p>

          <h2 className="text-5xl font-bold text-white">
            Explora proveedores
          </h2>

          <p className="text-gray-400 mt-4 text-lg max-w-2xl">
            Encuentra los mejores servicios para bodas,
            XV años, eventos corporativos y experiencias premium.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.title}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="text-5xl mb-6">
                {category.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {category.title}
              </h3>

              <p className="text-gray-400">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}