type ProviderCardProps = {
  name: string;
  category: string;
  location: string;
  price: string;
  image: string;
};

export default function ProviderCard({
  name,
  category,
  location,
  price,
  image,
}: ProviderCardProps) {

  return (

    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:scale-[1.02] transition-all">

      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <p className="text-purple-400 mb-2">
          {category}
        </p>

        <h3 className="text-2xl font-bold mb-2">
          {name}
        </h3>

        <p className="text-zinc-400 mb-4">
          {location}
        </p>

        <div className="flex items-center justify-between">

          <p className="font-semibold">
            {price}
          </p>

          <button className="bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded-xl">
            Ver perfil
          </button>

        </div>

      </div>

    </div>
  );
}