export function Contact() {
  return (
    <section id="contacto" className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Contacto
          </p>

          <h2 className="mb-7 text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
            Solicita presupuesto para tu próxima obra.
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-600">
            Cuéntanos qué necesitas reformar o construir y te ayudamos a valorar
            la mejor solución para tu proyecto.
          </p>

          <div className="space-y-5 border-t border-neutral-200 pt-8 text-neutral-700">
            <p>
              <span className="text-neutral-400">Teléfono:</span>{" "}
              +34643012645
            </p>

            <p>
              <span className="text-neutral-400">Correo:</span>{" "}
              contacto@priteca.es
            </p>

            <p>
              <span className="text-neutral-400">Zona:</span> España
            </p>
          </div>
        </div>

        <form className="space-y-5 bg-[#f4f2ef] p-6 md:p-10">
          <input
            type="text"
            placeholder="Nombre"
            className="w-full border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-neutral-950"
          />

          <input
            type="email"
            placeholder="Correo"
            className="w-full border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-neutral-950"
          />

          <input
            type="text"
            placeholder="Teléfono / WhatsApp"
            className="w-full border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-neutral-950"
          />

          <select className="w-full border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-neutral-950">
            <option>Tipo de proyecto</option>
            <option>Reforma de piso</option>
            <option>Reforma de chalet</option>
            <option>Obra pública</option>
            <option>Piscina</option>
            <option>Otro</option>
          </select>

          <textarea
            rows="6"
            placeholder="Cuéntanos sobre tu proyecto"
            className="w-full resize-none border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-neutral-950"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-neutral-950 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700"
          >
            Enviar solicitud
          </button>
        </form>
      </div>
    </section>
  );
}