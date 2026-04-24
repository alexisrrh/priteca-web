import { Contact } from "../components/Contact";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function ContactPage() {
  return (
    <main className="bg-white pt-20">
      <section className="bg-[#f4f2ef] px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Contacto
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Cuéntanos qué necesitas reformar o construir.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Solicita información o presupuesto para reformas de pisos, chalets,
            obras públicas, piscinas y proyectos de construcción.
          </p>
        </div>
      </section>

      <Contact />
      <WhatsAppButton />
    </main>
  );
}