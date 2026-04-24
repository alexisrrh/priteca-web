export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#f7f4ef] px-6 pt-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[1fr_0.9fr]">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Revestimientos · Porcelanatos · Acabados
          </p>

          <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-neutral-950 md:text-7xl">
            Superficies que transforman espacios.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-neutral-600">
            Soluciones en pisos, revestimientos y acabados para proyectos
            residenciales, comerciales y arquitectónicos.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="bg-neutral-950 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700"
            >
              Ver colecciones
            </a>

            <a
              href="#catalogos"
              className="border border-neutral-950 px-8 py-4 text-xs uppercase tracking-[0.25em] text-neutral-950 transition hover:bg-neutral-950 hover:text-white"
            >
              Catálogos
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="h-[620px] overflow-hidden rounded-t-full bg-neutral-300">
            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154"
              alt="Interior minimalista con acabados modernos"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-0 max-w-xs bg-white p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.28em] text-neutral-500">
              Grupo RVA
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-600">
              Diseño, asesoría y acabados para elevar cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}