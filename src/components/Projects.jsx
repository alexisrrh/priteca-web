const projects = [
  {
    title: "Residencial",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154",
  },
  {
    title: "Comercial",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
  },
  {
    title: "Arquitectónico",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="bg-[#1f1f1f] px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-400">
              Proyectos
            </p>

            <h2 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
              Ambientes que inspiran decisiones.
            </h2>
          </div>

          <p className="max-w-md leading-8 text-neutral-300">
            Una galería visual para mostrar aplicaciones reales de productos en
            espacios residenciales, comerciales y arquitectónicos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className={index === 1 ? "md:mt-16" : ""}
            >
              <div className="h-[520px] overflow-hidden bg-neutral-800">
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-90 transition duration-700 hover:scale-105 hover:opacity-100"
                />
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                <h3 className="text-2xl font-light">{project.title}</h3>
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  Ver más
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}