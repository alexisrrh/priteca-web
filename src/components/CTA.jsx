import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-light md:text-5xl">
          ¿Tienes un proyecto en mente?
        </h2>

        <p className="mt-6 text-lg text-neutral-300">
          Reformas, construcción y obras con resultados profesionales.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            to="/contacto"
            className="bg-white px-8 py-4 text-xs uppercase tracking-widest text-black transition hover:bg-neutral-300"
          >
            Solicitar presupuesto
          </Link>

          <a
            href="https://wa.me/+34643012645"
            target="_blank"
            className="border border-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}