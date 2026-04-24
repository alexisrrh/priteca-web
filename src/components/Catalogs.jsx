const catalogs = [
  "Porcelanatos",
  "Revestimientos",
  "Pisos",
  "Formatos especiales",
];

export function Catalogs() {
  return (
    <section id="catalogos" className="bg-[#f7f4ef] px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Catálogos
          </p>

          <h2 className="text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
            Información clara para elegir mejor.
          </h2>
        </div>

        <div>
          <p className="mb-10 max-w-2xl text-lg leading-8 text-neutral-600">
            Accede a nuestras líneas de productos, formatos, texturas y
            acabados para encontrar la opción ideal para cada proyecto.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {catalogs.map((item) => (
              <a
                key={item}
                href="#contacto"
                className="group flex items-center justify-between border border-neutral-300 bg-white px-6 py-6 transition hover:border-neutral-950"
              >
                <span className="text-lg font-light text-neutral-950">
                  {item}
                </span>

                <span className="text-sm text-neutral-400 transition group-hover:text-neutral-950">
                  →
                </span>
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="mt-10 inline-block bg-neutral-950 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700"
          >
            Solicitar catálogo
          </a>
        </div>
      </div>
    </section>
  );
}