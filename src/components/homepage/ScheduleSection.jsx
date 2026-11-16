// src/components/yoga/ScheduleSection.jsx
import { classes, formatPrice } from "./yogaData";

const ACCENT_STYLES = {
  amber: {
    bar: "from-amber-300 to-orange-300",
    barHover: "from-amber-400 to-orange-400",
    glow: "bg-amber-100/60",
    tag: "bg-amber-50 text-amber-700 border-amber-200",
  },
  emerald: {
    bar: "from-emerald-300 to-teal-300",
    barHover: "from-emerald-400 to-teal-400",
    glow: "bg-emerald-100/60",
    tag: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  violet: {
    bar: "from-violet-300 to-indigo-300",
    barHover: "from-violet-400 to-indigo-400",
    glow: "bg-violet-100/60",
    tag: "bg-violet-50 text-violet-700 border-violet-200",
  },
};

function SpotBadge({ spots, capacity }) {
  if (spots === 0) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200">
        <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
        Fully booked
      </span>
    );
  }
  if (spots <= 3) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        Only {spots} left
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      {spots} of {capacity} spots
    </span>
  );
}

export default function ScheduleSection() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/50 to-transparent" />
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-emerald-700 font-medium mb-4">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              THIS WEEK
            </span>
            <h2 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900 leading-tight">
              Weekly <span className="text-emerald-700">Classes</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
          </div>
          <div className="md:text-right">
            <p className="text-stone-600 max-w-md mb-4">
              Each class is designed to support different energies and
              intentions.
            </p>
            <a
              href="/schedule"
              className="group inline-flex items-center gap-2 text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-emerald-300 after:transition-all after:duration-300 group-hover:after:bg-emerald-700">
                View full schedule
              </span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Class list */}
        <div className="space-y-4">
          {classes.map((c) => {
            const isFull = c.spots === 0;
            const accent = ACCENT_STYLES[c.accent];

            return (
              <div
                key={c.id}
                className={`group relative bg-white/90 backdrop-blur-sm rounded-2xl border border-stone-100 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                  isFull ? "opacity-75" : ""
                }`}
              >
                {/* Hover glow */}
                <div
                  className={`absolute inset-0 ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-6 md:p-7">
                  {/* Left: accent bar + content */}
                  <div className="flex items-center gap-5 flex-1 min-w-0">
                    {/* Accent bar — tumbuh saat hover */}
                    <div
                      className={`shrink-0 w-1.5 h-16 md:h-20 rounded-full bg-gradient-to-b ${accent.bar} group-hover:${accent.barHover} transition-all duration-500 group-hover:w-2`}
                    />

                    <div className="flex-1 min-w-0">
                      {/* Class name */}
                      <h3 className="font-serif text-xl md:text-2xl text-stone-900 mb-2 truncate">
                        {c.name}
                      </h3>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-stone-500">
                        <span className="inline-flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {c.time}
                        </span>
                        <span className="text-stone-300">·</span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg
                            className="w-3.5 h-3.5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          {c.duration} min
                        </span>
                        <span className="text-stone-300">·</span>
                        <span className="text-stone-500">{c.level}</span>
                      </div>

                      {/* Instructor + spots row */}
                      <div className="flex items-center gap-3 mt-3 flex-wrap">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-7 h-7 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-[11px] font-semibold text-stone-800 ring-2 ring-white shadow-sm`}
                          >
                            {c.instructor.avatar}
                          </div>
                          <span className="text-xs text-stone-600">
                            {c.instructor.name}
                          </span>
                        </div>
                        <SpotBadge spots={c.spots} capacity={c.capacity} />
                      </div>
                    </div>
                  </div>

                  {/* Right: price + button */}
                  <div className="flex md:flex-col md:items-end justify-between md:justify-center items-center gap-4 md:gap-2 shrink-0 pl-5 md:pl-0 md:border-l md:border-stone-100 ">
                    <div className="text-left md:text-right">
                      <div className="text-xs text-stone-400 mb-0.5">
                        per class
                      </div>
                      <div className="text-xl md:text-2xl font-serif text-emerald-700">
                        {formatPrice(c.price)}
                      </div>
                    </div>
                    <button
                      disabled={isFull}
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                        isFull
                          ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                          : "bg-emerald-700 text-white hover:bg-emerald-800 hover:shadow-md hover:shadow-emerald-200 hover:-translate-y-0.5"
                      }`}
                    >
                      {isFull ? "Waitlist" : "Book now"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-stone-500 mt-10">
          Can't find a time that works?{" "}
          <a
            href="/contact"
            className="text-emerald-700 hover:text-emerald-800 underline underline-offset-4 font-medium"
          >
            Ask about private sessions
          </a>
        </p>
      </div>
    </section>
  );
}
