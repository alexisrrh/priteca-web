const catalogs = ["Porcelanatos", "Revestimientos", "Pisos", "Baños"];

export function CatalogsPage() {
  return (
    <main className="bg-[#f7f4ef] pt-32">
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Catálogos
          </p>

          <h1 className="mb-12 max-w-4xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Información clara para elegir mejores acabados.
          </h1>

          <div className="grid gap-5 md:grid-cols-2">
            {catalogs.map((item) => (
              <a
                key={item}
                href="/contacto"
                className="flex items-center justify-between border border-neutral-300 bg-white px-7 py-7 transition hover:border-neutral-950"
              >
                <span className="text-2xl font-light">{item}</span>
                <span>Solicitar →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}