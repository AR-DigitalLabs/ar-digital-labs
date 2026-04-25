import { SectionHeading } from "@/components/section-heading";

type ServiceCard = {
  title: string;
  description: string;
  accent: string;
};

type ServicesGridProps = {
  cards: ServiceCard[];
};

export function ServicesGrid({ cards }: ServicesGridProps) {
  return (
    <section id="services" className="py-24">
      <SectionHeading
        eyebrow="What We Build"
        title="Technology that feels premium, useful, and aligned with your mission."
        description="We help organizations move from idea to execution with software that is easier to use, easier to trust, and easier to scale. Every engagement is grounded in strategy, clean UX, and practical delivery."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {cards.map((card, index) => (
          <article
            key={card.title}
            className="glass-panel grid-glow animate-rise rounded-[1.75rem] p-7"
            style={{ animationDelay: `${index * 90}ms` }}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Service
                </p>
                <h3 className="mt-4 [font-family:var(--font-sora)] text-2xl font-semibold tracking-tight text-slate-950">
                  {card.title}
                </h3>
              </div>
              <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-br from-sky-400 to-blue-600 shadow-[0_0_20px_rgba(31,124,255,0.45)]" />
            </div>

            <p className="mt-5 text-base leading-7 text-slate-600">
              {card.description}
            </p>

            <p className="mt-6 text-sm font-semibold text-slate-900">
              {card.accent}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
