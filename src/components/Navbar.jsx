import { Link } from "react-router-dom";

export function Navbar() {
  const links = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Productos", href: "/productos" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Catálogos", href: "/catalogos" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#f7f4ef]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-[0.28em] text-neutral-900">
            GRUPO RVA
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
            Acabados & diseño
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-xs uppercase tracking-[0.22em] text-neutral-600 transition hover:text-neutral-950"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <Link
          to="/contacto"
          className="hidden border border-neutral-900 px-5 py-3 text-xs uppercase tracking-[0.22em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white md:inline-block"
        >
          Contactar
        </Link>
      </div>
    </header>
  );
}