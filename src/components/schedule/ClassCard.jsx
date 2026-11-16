// src/components/schedule/ClassCard.jsx
import { INSTRUCTORS, formatPrice } from "./scheduleData";

export default function ClassCard({ cls }) {
  const instructor = INSTRUCTORS.find((i) => i.id === cls.instructor);
  const isFull = cls.spots === 0;
  const isAlmostFull = cls.spots > 0 && cls.spots <= 3;

  return (
    <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Accent bar */}
      <div
        className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${cls.color}`}
      ></div>

      <div className="pl-6 pr-5 py-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[11px] tracking-widest text-emerald-700 font-medium uppercase">
                {cls.type}
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-[11px] text-stone-500">{cls.level}</span>
            </div>
            <h3 className="font-serif text-lg text-stone-900 truncate">
              {cls.name}
            </h3>
          </div>

          {/* Instructor avatar */}
          <div className="flex flex-col items-center shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center text-emerald-700 text-sm font-semibold">
              {instructor?.avatar}
            </div>
            <span className="text-[10px] text-stone-500 mt-1">
              {instructor?.name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-stone-600 mb-4">
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
            {cls.time}
          </span>
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
            {cls.duration} min
          </span>
        </div>

        {/* Spots indicator */}
        <div className="mb-4">
          {isFull ? (
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-500">
              <span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
              Fully booked
            </span>
          ) : isAlmostFull ? (
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-amber-50 text-amber-700">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
              Only {cls.spots} spots left
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {cls.spots} spots available
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-stone-100">
          <span className="font-serif text-lg text-emerald-700">
            {formatPrice(cls.price)}
          </span>
          <button
            disabled={isFull}
            className={`text-sm px-5 py-2 rounded-full font-medium transition-all duration-300 ${
              isFull
                ? "bg-stone-100 text-stone-400 cursor-not-allowed"
                : "bg-emerald-700 text-white hover:bg-emerald-800 hover:shadow-md hover:shadow-emerald-200"
            }`}
          >
            {isFull ? "Waitlist" : "Book"}
          </button>
        </div>
      </div>
    </div>
  );
}
