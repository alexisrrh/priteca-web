import { useRef } from "react";

const collections = [
  {
    name: "Carving Collection",
    products: ["12006", "12007", "12066", "12070", "12071", "12090", "12129", "12137", "CRACK AZUL", "LAPIZ GREY", "MAPLE WOOD", "MEK BEIGE"],
  },
  {
    name: "Statuario Collection",
    products: ["1510", "1765", "CAPRIA WHITE", "STATUARIO GOLD"],
  },
  {
    name: "Onyx Collection",
    products: ["CARTER ONYX AQUA", "FLIGMA ONYX BLACK", "SNOW ONYX GREY", "SPIDER ONYX GREY"],
  },
  {
    name: "Wood Strip Collection",
    products: ["BALSA WOOD CREMA", "BARRIQUE BRONZE", "JACK", "KYLIS GRISS", "REBECCA WOOD", "REDOX WENGE"],
  },
  {
    name: "Glossy / High Gloss",
    products: ["ACRO BLUE", "AMICA BROWN", "BLACK CRYSTAL", "QUARTZ CRYSTAL", "TERACOTTA BLUE"],
  },
  {
    name: "Gleam Craft",
    products: ["ALBA BROWN", "HOUSTON MOON", "NAVALA SILVER", "PARATY BEIGE", "PARATY GREY", "PAULA BEIGE", "PAULA GREY", "RACHEL BLUE"],
  },
];

function ProductRow({ collection }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -500 : 500,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-16">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-neutral-400">
            Colección
          </p>
          <h2 className="text-3xl font-light text-neutral-950">
            {collection.name}
          </h2>
        </div>

        <div className="hidden gap-2 md:flex">
          <button
            onClick={() => scroll("left")}
            className="border border-neutral-300 px-4 py-3 text-xl transition hover:border-neutral-950"
          >
            ←
          </button>
          <button
            onClick={() => scroll("right")}
            className="border border-neutral-300 px-4 py-3 text-xl transition hover:border-neutral-950"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {collection.products.map((product) => (
          <article
            key={product}
            className="min-w-[240px] border border-neutral-200 bg-[#f7f4ef] p-6 transition hover:border-neutral-950 md:min-w-[280px]"
          >
            <div className="mb-10 h-40 bg-neutral-200"></div>

            <p className="mb-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
              Producto
            </p>

            <h3 className="text-2xl font-light text-neutral-950">
              {product}
            </h3>

            <a
              href="/contacto"
              className="mt-6 inline-block text-xs uppercase tracking-[0.22em] text-neutral-500 transition hover:text-neutral-950"
            >
              Consultar →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export function ProductsPage() {
  return (
    <main className="bg-white pt-32">
      <section className="mb-20 px-6">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Productos
          </p>

          <h1 className="max-w-5xl text-5xl font-light leading-tight text-neutral-950 md:text-7xl">
            Colecciones organizadas para explorar con claridad.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
            Navega por las principales colecciones de Grupo RVA de forma limpia,
            visual y ordenada.
          </p>
        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">
          {collections.map((collection) => (
            <ProductRow key={collection.name} collection={collection} />
          ))}
        </div>
      </section>
    </main>
  );
}