import Image from "next/image";

type HeroProps = {
  highlights: string[];
};

export function Hero({ highlights }: HeroProps) {
  return (
    <section id="top" className="grid gap-14 pb-24 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pt-12">
      <div className="animate-rise" style={{ animationDelay: "120ms" }}>
        <p className="inline-flex rounded-full border border-sky-200/90 bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
          Faith-Driven Software Studio
        </p>

        <h1 className="text-balance mt-8 max-w-4xl [font-family:var(--font-sora)] text-5xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
          Digital products that strengthen families and serve the Church with clarity.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          AR Digital Labs, LLC designs and builds custom software, mobile apps,
          and modern web platforms for families, children, churches, and
          mission-minded founders. We blend clean UX, purposeful content, and
          emerging technology to create products that are meaningful now and
          scalable for what&apos;s next.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-900/10 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Build With Purpose
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 hover:border-sky-200 hover:text-slate-950"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-3">
          {[
            "Mobile apps",
            "SaaS platforms",
            "AI-assisted workflows",
          ].map((item, index) => (
            <div
              key={item}
              className="glass-panel animate-rise rounded-3xl px-5 py-5"
              style={{ animationDelay: `${200 + index * 80}ms` }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                Focus
              </p>
              <p className="mt-2 text-lg font-semibold text-slate-900">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="animate-rise relative"
        style={{ animationDelay: "240ms" }}
      >
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-[#3ea8ff]/20 blur-3xl sm:h-96 sm:w-96" />
        <div className="absolute bottom-10 left-8 h-32 w-32 rounded-full bg-[#15c7ff]/15 blur-3xl" />

        <div className="glass-panel grid-glow relative overflow-hidden rounded-[2rem] p-6 sm:p-8">
          <div className="absolute right-6 top-6 rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
            Strategy + Build
          </div>

          <div className="relative mt-8 flex items-center justify-center rounded-[1.75rem] border border-white/70 bg-[linear-gradient(180deg,rgba(246,250,255,0.95),rgba(229,238,248,0.8))] px-6 py-10">
            <div className="animate-float">
              <Image
                src="/brand/icon.png"
                alt="AR Digital Labs icon"
                width={420}
                height={420}
                className="animate-pulse-soft h-auto w-full max-w-[20rem]"
                priority
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="animate-rise rounded-[1.5rem] border border-slate-100 bg-white/80 px-5 py-4"
                style={{ animationDelay: `${320 + index * 100}ms` }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Why it matters
                </p>
                <p className="mt-2 text-base leading-7 text-slate-600">
                  {highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
