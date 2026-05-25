import ProviderCard from "@/components/providers/ProviderCard";
import { providers } from "@/data/providers";

export default function ProvidersPage() {

  return (

    <main className="min-h-screen bg-black text-white p-10">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-10">

          <div>

            <h1 className="text-5xl font-bold mb-3">
              Proveedores
            </h1>

            <p className="text-zinc-400">
              Descubre los mejores proveedores para eventos.
            </p>

          </div>

          <button className="bg-purple-600 hover:bg-purple-700 transition px-6 py-4 rounded-2xl font-semibold">
            + Publicar servicio
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

    </main>
  );
}