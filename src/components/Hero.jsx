import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
        alt="Obra de construcción"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex min-h-screen items-center px-6 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl text-white"
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-neutral-300 md:text-xs">
            PRITECA · Reformas y construcción
          </p>

          <h1 className="max-w-4xl text-4xl font-light leading-tight md:text-7xl">
            Reformamos y construimos espacios de calidad.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
            Especialistas en reformas de pisos, chalets, obras públicas y
            piscinas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/servicios"
              className="bg-white px-8 py-4 text-center text-xs uppercase tracking-widest text-black transition hover:bg-neutral-300"
            >
              Ver servicios
            </Link>

            <Link
              to="/contacto"
              className="border border-white px-8 py-4 text-center text-xs uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
            >
              Presupuesto
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}