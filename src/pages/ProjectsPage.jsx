import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const projectCategories = [
  {
    title: "Melamina",
    href: "/proyectos/melamina",
    description:
      "Muebles, cocinas, closets y soluciones a medida para espacios modernos.",
    images: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Piedras",
    href: "/proyectos/piedras",
    description:
      "Superficies decorativas para cocinas, barras y muros.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  {
    title: "Diseño de interiores",
    href: "/proyectos/diseno-interiores",
    description:
      "Propuestas visuales para transformar ambientes modernos.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
    ],
  },
];

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 3000); // cambia cada 3 segundos

    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Link
      to={project.href}
      className="group block overflow-hidden bg-white"
    >
      <div className="h-[420px] overflow-hidden">
        <img
          src={project.images[index]}
          alt={project.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
          Categoría
        </p>

        <h2 className="text-2xl font-light text-neutral-950">
          {project.title}
        </h2>

        <p className="mt-3 text-neutral-600 text-sm">
          {project.description}
        </p>

        <p className="mt-6 text-xs uppercase tracking-[0.25em] text-neutral-500 transition group-hover:text-neutral-950">
          Ver proyectos →
        </p>
      </div>
    </Link>
  );
}

export function ProjectsPage() {
  return (
    <main className="bg-[#f7f4ef] pt-32">
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Proyectos
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Trabajos reales organizados por especialidad.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Explora nuestros proyectos con una experiencia visual moderna.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {projectCategories.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}