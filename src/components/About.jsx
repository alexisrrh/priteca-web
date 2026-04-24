export function About() {
  return (
    <section id="nosotros" className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600566752355-35792bedcfea"
            alt="Espacio interior con acabados modernos"
            className="h-[560px] w-full object-cover"
          />
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Nosotros
          </p>

          <h2 className="mb-7 text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
            Diseño y acabados pensados para cada espacio.
          </h2>

          <p className="mb-6 text-lg leading-8 text-neutral-600">
            En Grupo RVA ayudamos a transformar proyectos residenciales,
            comerciales y arquitectónicos con soluciones en revestimientos,
            porcelanatos, pisos y acabados.
          </p>

          <p className="mb-10 leading-8 text-neutral-600">
            Nuestro enfoque combina variedad de productos, asesoría y una
            presentación visual clara para que cada cliente pueda elegir con
            confianza.
          </p>

          <div className="grid grid-cols-3 gap-6 border-t border-neutral-200 pt-8">
            <div>
              <p className="text-3xl font-light">01</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
                Calidad
              </p>
            </div>

            <div>
              <p className="text-3xl font-light">02</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
                Asesoría
              </p>
            </div>

            <div>
              <p className="text-3xl font-light">03</p>
              <p className="mt-2 text-sm uppercase tracking-widest text-neutral-500">
                Diseño
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}