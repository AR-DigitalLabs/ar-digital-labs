import { SectionHeading } from "@/components/section-heading";

type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="py-24">
      <SectionHeading
        eyebrow="How We Work"
        title="A calm, strategic process from first conversation to launch."
        description="We keep the workflow collaborative and focused so your team can make strong decisions without getting buried in complexity. The result is a product that feels intentional from the inside out."
      />

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {steps.map((step, index) => (
          <article
            key={step.step}
            className="glass-panel animate-rise rounded-[1.75rem] p-7"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold tracking-[0.2em] text-white">
                {step.step}
              </div>
              <h3 className="[font-family:var(--font-sora)] text-2xl font-semibold tracking-tight text-slate-950">
                {step.title}
              </h3>
            </div>

            <p className="mt-6 text-base leading-7 text-slate-600">
              {step.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
