import { SectionHeading } from "@/components/section-heading";

type Audience = {
  title: string;
  description: string;
  points: string[];
};

type Pillar = {
  title: string;
  description: string;
};

type AudienceSectionProps = {
  audiences: Audience[];
  pillars: Pillar[];
};

export function AudienceSection({
  audiences,
  pillars,
}: AudienceSectionProps) {
  return (
    <section id="audiences" className="py-24">
      <div className="grid gap-14 xl:grid-cols-[1.02fr_0.98fr]">
        <div>
          <SectionHeading
            eyebrow="Who We Serve"
            title="Built for people shaping homes, ministries, and mission-led organizations."
            description="Not every digital product needs more complexity. Many need a clearer message, a calmer interface, and a partner who understands both the human side of the experience and the systems behind it."
          />

          <div className="mt-12 grid gap-5">
            {audiences.map((audience, index) => (
              <article
                key={audience.title}
                className="glass-panel animate-rise rounded-[1.75rem] p-7"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="[font-family:var(--font-sora)] text-2xl font-semibold tracking-tight text-slate-950">
                  {audience.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  {audience.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {audience.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-800"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 lg:p-10">
          <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3ea8ff]/20 blur-3xl" />

          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
            Why AR Digital Labs
          </p>
          <h3 className="mt-5 text-balance [font-family:var(--font-sora)] text-3xl font-semibold tracking-tight text-slate-950">
            A product partner for teams that care about both excellence and impact.
          </h3>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            We bring together product strategy, UX direction, software execution,
            and thoughtful content so your digital presence does more than look
            modern. It helps people trust the experience, understand the value,
            and take the next step.
          </p>

          <div className="mt-10 grid gap-4">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="animate-rise rounded-[1.5rem] border border-white/80 bg-white/80 p-6"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1 h-11 w-11 shrink-0 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 p-[1px]">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white text-sm font-bold text-sky-700">
                      0{index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-950">
                      {pillar.title}
                    </h4>
                    <p className="mt-2 text-base leading-7 text-slate-600">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
