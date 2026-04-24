import { Link } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Servicios", href: "/servicios" },
    { name: "Obras", href: "/obras" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[#f4f2ef]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link to="/" className="flex flex-col leading-none">
          <span className="text-lg font-semibold tracking-[0.28em] text-neutral-900">
            PRITECA
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-[0.35em] text-neutral-500">
            Reformas & construcción
          </span>
        </Link>

        {/* DESKTOP */}
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

        {/* BOTÓN DESKTOP */}
        <Link
          to="/contacto"
          className="hidden border border-neutral-900 px-5 py-3 text-xs uppercase tracking-[0.22em] text-neutral-900 transition hover:bg-neutral-900 hover:text-white md:inline-block"
        >
          Presupuesto
        </Link>

        {/* BOTÓN MÓVIL */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col px-6 py-6 gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em]"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contacto"
              onClick={() => setOpen(false)}
              className="mt-4 border px-4 py-3 text-center text-xs uppercase tracking-widest"
            >
              Presupuesto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}