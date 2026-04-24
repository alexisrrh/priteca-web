export function Contact() {
  return (
    <section id="contacto" className="bg-white px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.9fr_1.1fr]">
        
        {/* TEXTO */}
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Contacto
          </p>

          <h2 className="mb-7 text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
            Hablemos de tu próximo proyecto.
          </h2>

          <p className="mb-10 max-w-xl text-lg leading-8 text-neutral-600">
            Escríbenos o contáctanos directamente por WhatsApp. Te ayudamos a elegir
            los mejores acabados para tu proyecto.
          </p>

          {/* INFO REAL */}
          <div className="space-y-6 border-t border-neutral-200 pt-8 text-neutral-700">

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Teléfonos
              </p>
              <p className="mt-2 text-lg">943 612 868</p>
              <p className="text-lg">925 153 148</p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Correo
              </p>
              <p className="mt-2 text-lg">
                ventas@gruporva.com.pe
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-neutral-400">
                Ubicación
              </p>
              <p className="mt-2 text-lg">
                Av. Vía de Evitamiento Sur 240
              </p>
              <p className="text-lg">
                Av. Vía de Evitamiento Sur 326
              </p>
              <p className="text-neutral-500">Cajamarca, Perú</p>
            </div>

          </div>
        </div>

        {/* FORMULARIO */}
        <form className="space-y-5 bg-[#f7f4ef] p-6 md:p-10">
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

          <textarea
            rows="6"
            placeholder="Cuéntanos sobre tu proyecto"
            className="w-full resize-none border border-neutral-300 bg-white px-5 py-4 outline-none transition focus:border-neutral-950"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-neutral-950 px-8 py-4 text-xs uppercase tracking-[0.25em] text-white transition hover:bg-neutral-700"
          >
            Enviar mensaje
          </button>
        </form>

      </div>
    </section>
  );
}