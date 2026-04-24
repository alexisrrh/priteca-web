export function Footer() {
  return (
    <footer className="bg-[#1f1f1f] px-6 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">
        <div>
          <h2 className="text-lg font-semibold tracking-[0.28em]">
            GRUPO RVA
          </h2>

          <p className="mt-3 text-sm uppercase tracking-[0.25em] text-neutral-500">
            Acabados & diseño
          </p>
        </div>

        <p className="max-w-md text-sm leading-6 text-neutral-400">
          Soluciones en porcelanatos, revestimientos, pisos y acabados para
          espacios residenciales, comerciales y arquitectónicos.
        </p>
      </div>
    </footer>
  );
}