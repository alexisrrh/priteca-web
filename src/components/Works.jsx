import { useRef } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "./FadeIn";

const works = [
  {
    title: "Reforma de piso",
    img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Chalet moderno",
    img: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Piscina exterior",
    img: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Reforma integral",
    img: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80",
  },
];

export function Works() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -400 : 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#f4f2ef] px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <div className="mb-10 flex items-center justify-between gap-6">
            <h2 className="text-4xl font-light">Obras realizadas</h2>

            <div className="flex gap-2">
              <button
                onClick={() => scroll("left")}
                className="border border-neutral-300 px-4 py-2 transition hover:bg-black hover:text-white"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="border border-neutral-300 px-4 py-2 transition hover:bg-black hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-4"
        >
          {works.map((work) => (
            <FadeIn key={work.title}>
              <article className="group min-w-[300px] cursor-pointer bg-white">
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-lg">{work.title}</h3>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        <Link
          to="/obras"
          className="mt-10 inline-block text-xs uppercase tracking-widest text-neutral-500 hover:text-neutral-950"
        >
          Ver todas las obras →
        </Link>
      </div>
    </section>
  );
}