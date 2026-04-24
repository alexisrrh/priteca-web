const products = [
  {
    title: "Porcelanatos",
    description: "Superficies modernas para interiores y exteriores.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
  },
  {
    title: "Revestimientos",
    description: "Texturas y acabados para muros con personalidad.",
    img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
  },
  {
    title: "Pisos",
    description: "Diseños resistentes, elegantes y funcionales.",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea",
  },
  {
    title: "Baños",
    description: "Soluciones para ambientes modernos y limpios.",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
];

export function Products() {
  return (
    <section id="productos" className="bg-[#f7f4ef] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Colecciones
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
              Materiales seleccionados para proyectos exigentes.
            </h2>
          </div>

          <p className="max-w-md leading-8 text-neutral-600">
            Una propuesta visual más clara para organizar los productos por
            categorías y facilitar la elección del cliente.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {products.map((item) => (
            <article key={item.title} className="group">
              <div className="mb-5 h-[420px] overflow-hidden bg-neutral-300">
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="border-t border-neutral-300 pt-5">
                <h3 className="text-2xl font-light text-neutral-950">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}