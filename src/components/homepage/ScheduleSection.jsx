// src/components/yoga/ScheduleSection.jsx
// Compatible with legacy data:
// { id, name, price, time, duration, level, instructor: { name, avatar }, spots, capacity, accent, color }
// New optional field: href (booking link). Optional prop: onBook(classItem).
import { classes, formatPrice } from "./yogaData";

// Classes are made static so Tailwind doesn't purge them at build time
// (the old version used dynamic `group-hover:${...}`, which never got generated).
const ACCENTS = {
  amber: {
    dot: "bg-amber-400",
    bar: "bg-amber-400/70 group-hover:bg-amber-500",
    tint: "from-amber-50/80",
  },
  emerald: {
    dot: "bg-emerald-500",
    bar: "bg-emerald-500/70 group-hover:bg-emerald-600",
    tint: "from-emerald-50/80",
  },
  violet: {
    dot: "bg-violet-400",
    bar: "bg-violet-400/70 group-hover:bg-violet-500",
    tint: "from-violet-50/70",
  },
};

function ArrowIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14m0 0-5-5m5 5-5 5"
      />
    </svg>
  );
}

function SpotBadge({ spots, capacity }) {
  const base =
    "inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-1 text-[11px] font-medium";

  if (spots === 0) {
    return (
      <span className={`${base} border-stone-200 bg-stone-100 text-stone-600`}>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-stone-400"
        />
        Fully booked
      </span>
    );
  }
  if (spots <= 3) {
    return (
      <span className={`${base} border-amber-200 bg-amber-50 text-amber-800`}>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-amber-500 motion-safe:animate-pulse"
        />
        Only {spots} left
      </span>
    );
  }
  return (
    <span
      className={`${base} border-emerald-200 bg-emerald-50 text-emerald-800`}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-emerald-500"
      />
      {spots} of {capacity} spots
    </span>
  );
}

function BookButton({ item, onBook, className = "" }) {
  const isFull = item.spots === 0;
  const label = isFull ? "Join waitlist" : "Book now";
  const styles = isFull
    ? "border border-stone-900/15 bg-transparent text-stone-700 hover:bg-white"
    : "bg-emerald-800 text-white shadow-md shadow-emerald-900/15 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-lg";

  const common = `relative z-10 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${styles} ${className}`;

  if (onBook) {
    return (
      <button
        type="button"
        onClick={() => onBook(item)}
        className={common}
        aria-label={`${label}: ${item.name}`}
      >
        {label}
      </button>
    );
  }
  return (
    <a
      href={item.href ?? (isFull ? "#waitlist" : "#book")}
      className={common}
      aria-label={`${label}: ${item.name}`}
    >
      {label}
    </a>
  );
}

export default function ScheduleSection({
  eyebrow = "This week",
  title = "Weekly",
  titleAccent = "classes.",
  description = "Each class is designed for a different energy and intention. Choose the one that best suits your day.",
  items = classes,
  onBook,
}) {
  return (
    <section
      id="schedule"
      aria-labelledby="schedule-heading"
      className="relative isolate overflow-hidden bg-[#f6f2ea] px-5 py-20 sm:px-8 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-900/10 to-transparent" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(214,181,140,0.25),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
              {eyebrow}
            </p>
            <h2
              id="schedule-heading"
              className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-stone-900 sm:text-5xl"
            >
              {title}{" "}
              <span className="italic text-emerald-800">{titleAccent}</span>
            </h2>
          </div>

          <div className="max-w-md md:text-right">
            <p className="text-base leading-relaxed text-stone-600">
              {description}
            </p>
            <a
              href="/schedule"
              className="group mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
            >
              <span className="border-b border-emerald-800/30 pb-0.5 transition-colors group-hover:border-emerald-800">
                View full schedule
              </span>
              <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* List */}
        <ul className="space-y-3 md:space-y-4">
          {items.map((c) => {
            const isFull = c.spots === 0;
            const accent = ACCENTS[c.accent] ?? ACCENTS.emerald;

            return (
              <li key={c.id}>
                <article
                  className={`group relative overflow-hidden rounded-[1.5rem] border border-stone-900/[0.07] shadow-sm shadow-stone-900/[0.03] transition duration-500 hover:-translate-y-1 hover:border-emerald-800/20 hover:shadow-2xl hover:shadow-emerald-900/10 ${
                    isFull ? "bg-white/60" : "bg-white"
                  }`}
                >
                  {/* Hover tint */}
                  <div
                    aria-hidden="true"
                    className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent.tint} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  />
                  {/* Left accent bar */}
                  <div
                    aria-hidden="true"
                    className={`absolute inset-y-5 left-0 w-1 rounded-r-full transition-all duration-500 group-hover:w-1.5 ${accent.bar}`}
                  />

                  <div className="relative grid gap-5 p-5 pl-6 sm:p-6 sm:pl-8 md:grid-cols-[8.5rem_1fr_auto] md:items-center md:gap-8 md:p-7 md:pl-9">
                    {/* Time */}
                    <div className="flex items-baseline gap-3 md:block">
                      <p className="font-serif text-2xl leading-none text-stone-900 md:text-3xl">
                        {c.time}
                      </p>
                      <p className="text-xs text-stone-500 md:mt-2">
                        {c.duration} min
                      </p>
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <h3
                        className={`font-serif text-xl leading-snug sm:text-2xl ${
                          isFull ? "text-stone-600" : "text-stone-900"
                        }`}
                      >
                        {c.name}
                      </h3>

                      <p className="mt-1.5 flex items-center gap-2 text-sm text-stone-500">
                        <span
                          aria-hidden="true"
                          className={`h-1.5 w-1.5 rounded-full ${accent.dot}`}
                        />
                        {c.level}
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-3">
                        <div className="flex items-center gap-2.5">
                          <span
                            aria-hidden="true"
                            className={`flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br text-[11px] font-semibold text-stone-800 shadow-sm ring-2 ring-white ${
                              c.color ?? "from-emerald-100 to-amber-100"
                            }`}
                          >
                            {c.instructor.avatar}
                          </span>
                          <span className="text-sm text-stone-600">
                            {c.instructor.name}
                          </span>
                        </div>
                        <SpotBadge spots={c.spots} capacity={c.capacity} />
                      </div>
                    </div>

                    {/* Price + CTA (single block, no longer duplicated mobile/desktop) */}
                    <div className="flex items-center justify-between gap-4 border-t border-stone-900/[0.07] pt-4 md:flex-col md:items-end md:justify-center md:gap-3 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                      <div className="md:text-right">
                        <p className="text-[11px] uppercase tracking-widest text-stone-400">
                          per class
                        </p>
                        <p className="font-serif text-2xl leading-tight text-emerald-800">
                          {formatPrice(c.price)}
                        </p>
                      </div>
                      <BookButton item={c} onBook={onBook} />
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <p className="mt-10 text-center text-sm text-stone-500">
          No time that works for you?{" "}
          <a
            href="/contact"
            className="font-medium text-emerald-800 underline underline-offset-4 hover:text-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
          >
            Ask about a private session
          </a>
        </p>
      </div>
    </section>
  );
}
