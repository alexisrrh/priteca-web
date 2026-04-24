import { Link } from "react-router-dom";

const services = [
  {
    title: "Reformas de pisos",
    text: "Renovación integral de viviendas: distribución, acabados, baños, cocinas, pintura y mejoras funcionales.",
  },
  {
    title: "Reformas de chalets",
    text: "Reformas completas en viviendas unifamiliares, interiores, exteriores, terrazas y zonas comunes.",
  },
  {
    title: "Obras públicas",
    text: "Ejecución de trabajos para espacios urbanos, mantenimiento, adecuación y proyectos técnicos.",
  },
  {
    title: "Piscinas",
    text: "Construcción, reforma y mejora de piscinas con acabados resistentes y diseño funcional.",
  },
];

export function ServicesPage() {
  return (
    <main className="bg-white pt-32">
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Servicios
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Reformas y construcción para proyectos de principio a fin.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            En PRITECA trabajamos en reformas, construcción y ejecución de obras
            con un enfoque profesional, organizado y orientado al resultado.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border border-neutral-200 bg-[#f4f2ef] p-8 transition hover:border-neutral-950"
            >
              <p className="mb-10 text-sm text-neutral-400">0{index + 1}</p>

              <h2 className="text-3xl font-light text-neutral-950">
                {service.title}
              </h2>

              <p className="mt-5 leading-8 text-neutral-600">
                {service.text}
              </p>

              <Link
                to="/contacto"
                className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-neutral-500 transition hover:text-neutral-950"
              >
                Solicitar presupuesto →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}