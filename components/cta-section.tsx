export function CtaSection() {
  return (
    <section id="contact" className="py-24">
      <div className="glass-panel relative overflow-hidden rounded-[2.25rem] px-8 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
        <div className="absolute left-0 top-0 h-64 w-64 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1f7cff]/18 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-[#16c7ff]/18 blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Start the Conversation
            </p>
            <h2 className="text-balance mt-5 [font-family:var(--font-sora)] text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              If the mission matters, the product experience should too.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Whether you&apos;re shaping a new mobile app, rethinking a church
              platform, or exploring how AI can support your organization, AR
              Digital Labs can help you move forward with clarity.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-white/80 bg-white/85 p-7 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
              Best fit projects
            </p>
            <div className="mt-5 grid gap-3 text-base leading-7 text-slate-600">
              <p>New product concepts that need strategy, UX, and development.</p>
              <p>Existing platforms that need a cleaner, more modern experience.</p>
              <p>Mission-driven teams looking to modernize operations with purpose.</p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:sales@ardigitallabs.com?subject=Project%20Inquiry"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:-translate-y-0.5 hover:bg-slate-800"
              >
                sales@ardigitallabs.com
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50"
              >
                Review Services
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-1 pt-8 text-sm text-slate-500">
        AR Digital Labs, LLC builds thoughtful software for families, churches,
        and mission-driven teams.
      </footer>
    </section>
  );
}
