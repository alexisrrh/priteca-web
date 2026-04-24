import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";

const services = [
  {
    title: "Reformas de pisos",
    text: "Renovación integral de viviendas, acabados, distribución y mejoras funcionales.",
  },
  {
    title: "Reformas de chalets",
    text: "Intervenciones completas en viviendas unifamiliares, exteriores e interiores.",
  },
  {
    title: "Obras públicas",
    text: "Ejecución de trabajos para espacios urbanos, instalaciones y proyectos técnicos.",
  },
  {
    title: "Piscinas",
    text: "Construcción, reforma y mejora de piscinas con acabados duraderos.",
  },
];

export function Services() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
                Servicios
              </p>

              <h2 className="max-w-3xl text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
                Soluciones para reformas, construcción y obra.
              </h2>
            </div>

            <Link
              to="/servicios"
              className="text-xs uppercase tracking-[0.25em] text-neutral-500 transition hover:text-neutral-950"
            >
              Ver todos →
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service, index) => (
            <FadeIn key={service.title}>
              <article className="h-full border border-neutral-200 bg-[#f4f2ef] p-7 transition hover:border-neutral-950">
                <p className="mb-10 text-sm text-neutral-400">
                  0{index + 1}
                </p>

                <h3 className="text-2xl font-light text-neutral-950">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {service.text}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}