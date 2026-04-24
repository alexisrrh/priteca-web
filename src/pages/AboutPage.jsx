export function AboutPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Nosotros
            </p>

            <h1 className="mb-7 text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
              Acabados, diseño y soluciones para transformar espacios.
            </h1>

            <p className="mb-6 text-lg leading-8 text-neutral-600">
              Grupo RVA es una empresa ubicada en Cajamarca, Perú, enfocada en
              ofrecer soluciones para proyectos residenciales, comerciales y
              arquitectónicos.
            </p>

            <p className="text-lg leading-8 text-neutral-600">
              Trabajamos con productos para acabados, pisos, revestimientos y
              superficies, ayudando a nuestros clientes a elegir materiales que
              combinen diseño, resistencia y funcionalidad.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
            alt="Interior moderno con acabados"
            className="h-[560px] w-full object-cover"
          />
        </div>
      </section>
    </main>
  );
}