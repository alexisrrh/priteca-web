import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
              Nosotros
            </p>

            <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
              Una empresa enfocada en reformas, construcción y resultados bien ejecutados.
            </h1>

            <p className="mt-8 text-lg leading-8 text-neutral-600">
              PRITECA trabaja en proyectos de reforma y construcción con una
              visión clara: ofrecer soluciones profesionales, ordenadas y
              adaptadas a las necesidades de cada cliente.
            </p>

            <p className="mt-6 text-lg leading-8 text-neutral-600">
              Realizamos reformas de pisos, chalets, obras públicas, piscinas y
              trabajos de construcción, cuidando la planificación, los materiales
              y los acabados finales.
            </p>

            <Link
              to="/contacto"
              className="mt-10 inline-block bg-neutral-950 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700"
            >
              Solicitar presupuesto
            </Link>
          </div>

          <div className="h-[620px] overflow-hidden bg-neutral-200">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Equipo de construcción"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f4f2ef] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          <div className="bg-white p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              01
            </p>
            <h2 className="text-3xl font-light">Planificación</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Organizamos cada fase del proyecto para trabajar con claridad y
              reducir imprevistos.
            </p>
          </div>

          <div className="bg-white p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              02
            </p>
            <h2 className="text-3xl font-light">Ejecución</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Desarrollamos reformas y obras con atención al detalle y acabados
              profesionales.
            </p>
          </div>

          <div className="bg-white p-8">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-400">
              03
            </p>
            <h2 className="text-3xl font-light">Resultado</h2>
            <p className="mt-4 leading-7 text-neutral-600">
              Buscamos entregar espacios funcionales, duraderos y bien
              terminados.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}