// src/components/yoga/schedule/ClassModal.jsx
import { useEffect } from "react";
import { INSTRUCTORS, formatPrice } from "./scheduleData";

export default function ClassModal({ cls, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!cls) return null;
  const instructor = INSTRUCTORS.find((i) => i.id === cls.instructor);
  const isFull = cls.spots === 0;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end sm:items-center justify-center px-0 sm:px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-lg max-h-[90vh] overflow-y-auto p-5 sm:p-8 shadow-2xl animate-scaleIn"
      >
        {/* Close button — sticky biar selalu kelihatan saat scroll */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-5 right-3 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-stone-100 hover:bg-stone-200 active:bg-stone-300 flex items-center justify-center transition-colors z-10"
          aria-label="Close"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Drag handle — visual cue di mobile */}
        <div className="sm:hidden w-10 h-1 bg-stone-200 rounded-full mx-auto mb-4" />

        {/* Header */}
        <div className="mb-4 sm:mb-6 pr-8">
          <span className="text-[10px] sm:text-xs tracking-widest text-emerald-700 font-medium uppercase">
            {cls.type} · {cls.level}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-stone-900 mt-1.5 sm:mt-2 leading-tight">
            {cls.name}
          </h2>
        </div>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
            <p className="text-[10px] sm:text-xs text-stone-500 mb-0.5 sm:mb-1">
              Time
            </p>
            <p className="text-xs sm:text-sm font-medium text-stone-900">
              {cls.time}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
            <p className="text-[10px] sm:text-xs text-stone-500 mb-0.5 sm:mb-1">
              Duration
            </p>
            <p className="text-xs sm:text-sm font-medium text-stone-900">
              {cls.duration} minutes
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
            <p className="text-[10px] sm:text-xs text-stone-500 mb-0.5 sm:mb-1">
              Instructor
            </p>
            <p className="text-xs sm:text-sm font-medium text-stone-900 truncate">
              {instructor?.name}
            </p>
          </div>
          <div className="p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl">
            <p className="text-[10px] sm:text-xs text-stone-500 mb-0.5 sm:mb-1">
              Price
            </p>
            <p className="text-xs sm:text-sm font-medium text-emerald-700">
              {formatPrice(cls.price)}
            </p>
          </div>
        </div>

        {/* Status */}
        <div className="mb-4 sm:mb-6">
          {isFull ? (
            <p className="text-xs sm:text-sm text-stone-500 text-center py-2.5 sm:py-3 px-3 sm:px-4 bg-stone-100 rounded-lg sm:rounded-xl leading-relaxed">
              This class is fully booked. Join the waitlist to be notified.
            </p>
          ) : (
            <p className="text-xs sm:text-sm text-stone-600 text-center py-2.5 sm:py-3 px-3 sm:px-4 bg-emerald-50 rounded-lg sm:rounded-xl leading-relaxed">
              <span className="font-medium text-emerald-700">
                {cls.spots} spots
              </span>{" "}
              remaining — reserve yours now.
            </p>
          )}
        </div>

        {/* CTA */}
        <button
          disabled={isFull}
          className={`w-full py-3 sm:py-4 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
            isFull
              ? "bg-stone-100 text-stone-400 cursor-not-allowed"
              : "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5 active:translate-y-0"
          }`}
        >
          {isFull ? "Join Waitlist" : "Book This Class"}
        </button>
      </div>
    </div>
  );
}
