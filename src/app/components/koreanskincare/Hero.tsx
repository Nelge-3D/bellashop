import Image from "next/image";

const AsianBeautyBanner = () => {
  const brands = [
    "Beauty of Joseon", "COSRX", "Laneige", "Isntree", "Missha",
    "Kojie San", "Anua", "Axis-Y", "Torriden", "Round Lab"
  ];

  return (
    <section className="bg-black text-gray-100 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Texte */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            <span className="border-b-2 border-red-500 pb-1">
              Cosmétiques asiatiques raffinés
            </span>
          </h2>
          <p className="text-sm md:text-base text-gray-400 mb-6 leading-relaxed">
            Découvrez notre sélection minimaliste de soins asiatiques issus des marques les plus reconnues : <strong className="text-red-500">COSRX</strong>, <strong className="text-red-500">Beauty of Joseon</strong>, <strong className="text-red-500">Laneige</strong>, <strong className="text-red-500">Kojie San</strong>... Chez Fabella, la beauté s’inspire de la pureté et de l’innovation coréenne et japonaise.
          </p>

          {/* Tags marques */}
          <div className="flex flex-wrap gap-2">
            {brands.map((brand) => (
              <span
                key={brand}
                className="border border-gray-600 text-xs text-gray-300 px-3 py-1 rounded-full hover:bg-red-500 hover:text-white transition duration-200"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/asian-beauty-banner.png"
            alt="Femme cosmétique asiatique"
            width={320}
            height={320}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AsianBeautyBanner;
