type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-sky-700">
        {eyebrow}
      </p>
      <h2 className="text-balance [font-family:var(--font-sora)] text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
