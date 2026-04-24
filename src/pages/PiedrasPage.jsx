import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
];

export function PiedrasPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main className="bg-white pt-32">
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Proyectos / Piedras
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Superficies en piedra para espacios sofisticados.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Aplicaciones decorativas para cocinas, barras, muros y ambientes
            con acabados elegantes y resistentes.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:grid-cols-3">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => setSelectedImage(img)}
              className="group h-[400px] overflow-hidden bg-neutral-200"
            >
              <img
                src={img}
                alt="Proyecto en piedra"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
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
            alt="Proyecto ampliado"
            className="max-h-[90vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </main>
  );
}