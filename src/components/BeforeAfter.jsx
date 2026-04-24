import { FadeIn } from "./FadeIn";

const comparisons = [
  {
    title: "Reforma integral de piso",
    before:
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Renovación exterior",
    before:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
    after:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=80",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-neutral-500">
            Antes / Después
          </p>

          <h2 className="mb-14 max-w-4xl text-4xl font-light leading-tight text-neutral-950 md:text-6xl">
            Transformaciones que muestran el valor de una buena reforma.
          </h2>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2">
          {comparisons.map((item) => (
            <FadeIn key={item.title}>
              <article className="bg-[#f4f2ef] p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
                      Antes
                    </p>
                    <img
                      src={item.before}
                      alt={`${item.title} antes`}
                      className="h-[360px] w-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="mb-3 text-xs uppercase tracking-[0.25em] text-neutral-500">
                      Después
                    </p>
                    <img
                      src={item.after}
                      alt={`${item.title} después`}
                      className="h-[360px] w-full object-cover"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-2xl font-light text-neutral-950">
                  {item.title}
                </h3>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}