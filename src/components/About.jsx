import { Link } from "react-router-dom";

export function About() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-[0.9fr_1.1fr]">

        {/* TEXTO */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Nosotros
          </p>

          <h2 className="text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
            Experiencia en reformas y construcción de calidad.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-neutral-600">
            En PRITECA trabajamos con un enfoque profesional en cada proyecto,
            ofreciendo soluciones en reformas, construcción y ejecución de obras
            con acabados duraderos y atención al detalle.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <p className="text-3xl font-light">+10</p>
              <p className="text-sm text-neutral-500">Años de experiencia</p>
            </div>

            <div>
              <p className="text-3xl font-light">+200</p>
              <p className="text-sm text-neutral-500">Proyectos realizados</p>
            </div>
          </div>

          <Link
            to="/nosotros"
            className="mt-10 inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 transition hover:text-neutral-950"
          >
            Conocer más →
          </Link>
        </div>

        {/* IMAGEN */}
        <div className="relative">
          <div className="h-[520px] overflow-hidden bg-neutral-300">
          <img
src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  alt="Equipo de construcción"
  className="h-full w-full object-cover"
/>
          </div>

          <div className="absolute -bottom-8 right-0 bg-[#f4f2ef] p-6 shadow-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              PRITECA
            </p>
            <p className="mt-2 text-sm text-neutral-600">
              Compromiso, calidad y ejecución profesional.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}