// src/components/yoga/schedule/ClassCard.jsx
import { INSTRUCTORS, formatPrice } from "./scheduleData";

export default function ClassCard({ cls, onClick }) {
  const instructor = INSTRUCTORS.find((i) => i.id === cls.instructor);
  const isFull = cls.spots === 0;
  const isAlmostFull = cls.spots > 0 && cls.spots <= 3;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative w-full text-left bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      {/* Accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b ${cls.color}`}
      />

      <div className="pl-4 sm:pl-6 pr-3.5 sm:pr-5 py-3.5 sm:py-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap mb-1">
              <span className="text-[10px] sm:text-[11px] tracking-widest text-emerald-700 font-medium uppercase">
                {cls.type}
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-[10px] sm:text-[11px] text-stone-500">
                {cls.level}
              </span>
            </div>
            <h3 className="font-serif text-[15px] sm:text-lg text-stone-900 leading-snug line-clamp-2">
              {cls.name}
            </h3>
          </div>

          {/* Instructor avatar */}
          <div className="flex flex-col items-center shrink-0 w-14 sm:w-[72px]">
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center text-emerald-700 text-xs sm:text-sm font-semibold">
              {instructor?.avatar}
            </div>
            <span className="text-[9px] sm:text-[10px] text-stone-500 mt-1 text-center leading-tight line-clamp-2">
              {instructor?.name}
            </span>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-sm text-stone-600 mb-2.5 sm:mb-4">
          <span className="inline-flex items-center gap-1 sm:gap-1.5">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0"
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
            {cls.time.split(" – ")[0]}
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-1.5">
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0"
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
            {cls.duration} min
          </span>
        </div>

        {/* Spots */}
        <div className="mb-3 sm:mb-4">
          {isFull ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-stone-100 text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
              Fully booked
            </span>
          ) : isAlmostFull ? (
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-amber-50 text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Only {cls.spots} spots left
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-50 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {cls.spots} spots available
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 pt-3 sm:pt-4 border-t border-stone-100">
          <span className="font-serif text-base sm:text-lg text-emerald-700 whitespace-nowrap">
            {formatPrice(cls.price)}
          </span>
          <span
            className={`text-xs sm:text-sm px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-medium transition-all duration-300 shrink-0 ${
              isFull
                ? "bg-stone-100 text-stone-400"
                : "bg-emerald-700 text-white group-hover:bg-emerald-800 group-hover:shadow-md group-hover:shadow-emerald-200"
            }`}
          >
            {isFull ? "Waitlist" : "Book"}
          </span>
        </div>
      </div>
    </button>
  );
}
