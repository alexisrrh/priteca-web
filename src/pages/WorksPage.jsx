import { useState } from "react";

const works = [
  {
    title: "Reformas de pisos",
    category: "Vivienda",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reformas de chalets",
    category: "Residencial",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Piscinas",
    category: "Exterior",
    img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Obras públicas",
    category: "Construcción",
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Reforma integral",
    category: "Interior",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Acabados y exteriores",
    category: "Detalle",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  },
];

export function WorksPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="bg-[#f4f2ef] pt-32">
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Obras
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Obras realizadas y proyectos de reforma.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Una selección visual de trabajos relacionados con reformas de pisos,
            chalets, obras públicas y piscinas.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {works.map((work) => (
            <button
              key={work.title}
              onClick={() => setSelectedImage(work.img)}
              className="group bg-white text-left"
            >
              <div className="h-[380px] overflow-hidden">
                <img
                  src={work.img}
                  alt={work.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-400">
                  {work.category}
                </p>
                <h2 className="text-2xl font-light text-neutral-950">
                  {work.title}
                </h2>
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-6"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-3xl text-white"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Obra ampliada"
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </main>
  );
}