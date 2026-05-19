import { SectionHeading } from "@/components/section-heading";

type EventDate = { label: string; labelEs: string };
type Speaker = {
  name: string;
  credentials: string;
  bio: string;
  leadership: string[];
};

type Event = {
  id: string;
  title: string;
  titleEs: string;
  tagline: string;
  taglineEs: string;
  quote?: string;
  dates: EventDate[];
  dateNote?: string;
  dateNoteEs?: string;
  time: string;
  address: string;
  registerNote: string;
  registerNoteEs: string;
  phone: string;
  cost?: string;
  costNote?: string;
  costNoteEs?: string;
  badge?: string;
  badgeEs?: string;
  cta?: string;
  ctaEs?: string;
  speaker?: Speaker;
  accent: string;
};

type EventsSectionProps = {
  items: Event[];
};

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
        <div className="mt-0.5 text-sm font-semibold text-slate-800">{value}</div>
      </div>
    </div>
  );
}

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="1" y="3" width="14" height="12" rx="2" />
    <path d="M5 1v4M11 1v4M1 7h14" />
  </svg>
);

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8" cy="8" r="7" />
    <path d="M8 4.5V8l2.5 2.5" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <path d="M8 1a5 5 0 0 1 5 5c0 4-5 9-5 9S3 10 3 6a5 5 0 0 1 5-5z" />
    <circle cx="8" cy="6" r="1.5" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="4" y="1" width="8" height="14" rx="2" />
    <path d="M7 12h2" />
  </svg>
);

const DollarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
    <circle cx="8" cy="8" r="7" />
    <path d="M8 4v8M6 6.5h3a1.5 1.5 0 0 1 0 3H7a1.5 1.5 0 0 0 0 3h3" />
  </svg>
);

export function EventsSection({ items }: EventsSectionProps) {
  return (
    <section id="events" className="py-24">
      <SectionHeading
        eyebrow="Upcoming Events"
        title="Join us. Learn, grow, and connect."
        description="WEWRF hosts hands-on workshops and personal development events designed to empower women and families in our community."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {items.map((event, index) => (
          <article
            key={event.id}
            className="glass-panel animate-rise overflow-hidden rounded-[1.75rem]"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {/* Gradient header bar */}
            <div className={`h-2 w-full bg-gradient-to-r ${event.accent}`} />

            <div className="p-7">
              {/* Titles */}
              <div className="mb-5">
                <h3 className="[font-family:var(--font-sora)] text-xl font-semibold tracking-tight text-slate-950">
                  {event.title}
                </h3>
                <p className="text-base font-medium text-slate-500">{event.titleEs}</p>
              </div>

              {/* Tagline / quote */}
              {event.quote ? (
                <blockquote className="mb-5 rounded-xl border border-violet-100 bg-violet-50/60 px-5 py-4 text-sm leading-6 text-slate-700 italic">
                  &ldquo;{event.quote}&rdquo;
                  <p className="mt-1 not-italic font-semibold text-slate-800">
                    — {event.taglineEs}
                  </p>
                </blockquote>
              ) : (
                <p className="mb-5 text-sm leading-6 text-slate-600">
                  {event.tagline}
                  <span className="ml-1 text-slate-400">/ {event.taglineEs}</span>
                </p>
              )}

              {/* Info rows */}
              <div className="space-y-3">
                <InfoRow
                  icon={<CalendarIcon />}
                  label={event.dateNote ? `${event.dateNote} / ${event.dateNoteEs}` : "Date"}
                  value={
                    event.dates.length > 1 ? (
                      <div className="flex flex-wrap gap-x-4 gap-y-1">
                        {event.dates.map((d) => (
                          <span key={d.label}>
                            {d.label}
                            <span className="ml-1 text-slate-400 font-normal">/ {d.labelEs}</span>
                          </span>
                        ))}
                      </div>
                    ) : (
                      <span>
                        {event.dates[0].label}
                        <span className="ml-1 text-slate-400 font-normal">/ {event.dates[0].labelEs}</span>
                      </span>
                    )
                  }
                />

                <InfoRow
                  icon={<ClockIcon />}
                  label="Time / Hora"
                  value={event.time}
                />

                <InfoRow
                  icon={<PinIcon />}
                  label="Address / Dirección"
                  value={event.address}
                />

                <InfoRow
                  icon={<PhoneIcon />}
                  label={`${event.registerNote} / ${event.registerNoteEs}`}
                  value={
                    <a
                      href={`sms:${event.phone.replace(/\D/g, "")}`}
                      className="text-sky-700 underline-offset-2 hover:underline"
                    >
                      {event.phone}
                    </a>
                  }
                />

                {event.cost && (
                  <InfoRow
                    icon={<DollarIcon />}
                    label={`Cost / Costo`}
                    value={
                      <>
                        {event.cost}{" "}
                        <span className="text-slate-400 font-normal">
                          ({event.costNote} / {event.costNoteEs})
                        </span>
                      </>
                    }
                  />
                )}
              </div>

              {/* Speaker card */}
              {event.speaker && (
                <div className="mt-6 rounded-xl border border-purple-100 bg-purple-50/50 px-5 py-4">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-500 mb-2">
                    Invitada / Guest Speaker
                  </p>
                  <p className="font-semibold text-slate-900">{event.speaker.name}</p>
                  <p className="text-sm text-slate-500">{event.speaker.credentials} &middot; {event.speaker.bio}</p>
                  <ul className="mt-3 space-y-1">
                    {event.speaker.leadership.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-600">
                        <span className="mt-0.5 text-purple-400">&#9670;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Badge / CTA */}
              {event.badge && (
                <div className="mt-6 flex flex-col gap-3">
                  <div className={`inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r ${event.accent} px-4 py-2 text-xs font-bold text-white shadow`}>
                    <span>&#9733;</span>
                    {event.badge} / {event.badgeEs}
                  </div>
                  {event.cta && (
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em]">
                      {event.cta} / {event.ctaEs}
                    </p>
                  )}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
