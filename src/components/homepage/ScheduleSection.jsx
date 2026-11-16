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
      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-stone-100 text-stone-500 border border-stone-200 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
        Fully booked
      </span>
    );
  }
  if (spots <= 3) {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        Only {spots} left
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-medium px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
      {spots} of {capacity} spots
    </span>
  );
}

export default function ScheduleSection() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/50 to-transparent" />
      <div className="absolute top-10 right-0 w-48 sm:w-80 h-48 sm:h-80 bg-emerald-100/30 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-10 left-0 w-48 sm:w-80 h-48 sm:h-80 bg-amber-100/30 rounded-full blur-3xl hidden sm:block" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 sm:mb-12 md:mb-16 gap-4 sm:gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-emerald-700 font-medium mb-3 sm:mb-4">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
              THIS WEEK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-3 sm:mb-4 text-stone-900 leading-tight">
              Weekly <span className="text-emerald-700">Classes</span>
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full" />
          </div>
          <div className="md:text-right">
            <p className="text-sm sm:text-base text-stone-600 max-w-md mb-3 sm:mb-4">
              Each class is designed to support different energies and
              intentions.
            </p>
            <a
              href="/schedule"
              className="group inline-flex items-center gap-2 text-xs sm:text-sm text-emerald-700 font-medium hover:text-emerald-800 transition-colors"
            >
              <span className="relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-emerald-300 after:transition-all after:duration-300 group-hover:after:bg-emerald-700">
                View full schedule
              </span>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform"
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
        <div className="space-y-3 sm:space-y-4">
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
                <div
                  className={`absolute inset-0 ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative p-4 sm:p-6 md:p-7">
                  {/* Accent bar sekarang horizontal di mobile, vertikal di desktop */}
                  <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                    <div
                      className={`shrink-0 mt-1 w-1 sm:w-1.5 h-12 md:h-20 rounded-full bg-gradient-to-b ${accent.bar} group-hover:${accent.barHover} transition-all duration-500 group-hover:w-1.5 md:group-hover:w-2`}
                    />

                    <div className="flex-1 min-w-0">
                      {/* Name + price (mobile: price di kanan atas) */}
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-serif text-lg sm:text-xl md:text-2xl text-stone-900 leading-snug pr-2">
                          {c.name}
                        </h3>
                        <div className="text-right shrink-0">
                          <div className="text-[10px] text-stone-400 leading-none mb-0.5 hidden sm:block">
                            per class
                          </div>
                          <div className="text-base sm:text-lg md:text-2xl font-serif text-emerald-700 whitespace-nowrap">
                            {formatPrice(c.price)}
                          </div>
                        </div>
                      </div>

                      {/* Meta row */}
                      <div className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 gap-y-1.5 text-xs sm:text-sm text-stone-500 mb-3">
                        <span className="inline-flex items-center gap-1">
                          <svg
                            className="w-3 h-3 sm:w-3.5 sm:h-3.5"
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
                        <span className="inline-flex items-center gap-1">
                          {c.duration} min
                        </span>
                        <span className="text-stone-300">·</span>
                        <span>{c.level}</span>
                      </div>

                      {/* Instructor + spots */}
                      <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-4 md:mb-0">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br ${c.color} flex items-center justify-center text-[10px] sm:text-[11px] font-semibold text-stone-800 ring-2 ring-white shadow-sm`}
                          >
                            {c.instructor.avatar}
                          </div>
                          <span className="text-[11px] sm:text-xs text-stone-600">
                            {c.instructor.name}
                          </span>
                        </div>
                        <SpotBadge spots={c.spots} capacity={c.capacity} />
                      </div>
                    </div>
                  </div>

                  {/* Button full-width di mobile, di kanan di desktop */}
                  <div className="md:hidden mt-1">
                    <button
                      disabled={isFull}
                      className={`w-full px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isFull
                          ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                          : "bg-emerald-700 text-white active:bg-emerald-800"
                      }`}
                    >
                      {isFull ? "Waitlist" : "Book now"}
                    </button>
                  </div>

                  {/* Desktop: price + button di kanan */}
                  <div className="hidden md:flex absolute right-7 top-1/2 -translate-y-1/2 flex-col items-end gap-2 pl-6 border-l border-stone-100">
                    <div className="text-right">
                      <div className="text-xs text-stone-400 mb-0.5">
                        per class
                      </div>
                      <div className="text-2xl font-serif text-emerald-700">
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
        <p className="text-center text-xs sm:text-sm text-stone-500 mt-8 sm:mt-10">
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
