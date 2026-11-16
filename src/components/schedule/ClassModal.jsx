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
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl animate-scaleIn"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <svg
            className="w-4 h-4 text-stone-600"
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

        <div className="mb-6">
          <span className="text-xs tracking-widest text-emerald-700 font-medium uppercase">
            {cls.type} · {cls.level}
          </span>
          <h2 className="font-serif text-3xl text-stone-900 mt-2">
            {cls.name}
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-4 bg-stone-50 rounded-xl">
            <p className="text-xs text-stone-500 mb-1">Time</p>
            <p className="text-sm font-medium text-stone-900">{cls.time}</p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl">
            <p className="text-xs text-stone-500 mb-1">Duration</p>
            <p className="text-sm font-medium text-stone-900">
              {cls.duration} minutes
            </p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl">
            <p className="text-xs text-stone-500 mb-1">Instructor</p>
            <p className="text-sm font-medium text-stone-900">
              {instructor?.name}
            </p>
          </div>
          <div className="p-4 bg-stone-50 rounded-xl">
            <p className="text-xs text-stone-500 mb-1">Price</p>
            <p className="text-sm font-medium text-emerald-700">
              {formatPrice(cls.price)}
            </p>
          </div>
        </div>

        <div className="mb-6">
          {isFull ? (
            <p className="text-sm text-stone-500 text-center py-3 px-4 bg-stone-100 rounded-xl">
              This class is fully booked. Join the waitlist to be notified.
            </p>
          ) : (
            <p className="text-sm text-stone-600 text-center py-3 px-4 bg-emerald-50 rounded-xl">
              <span className="font-medium text-emerald-700">
                {cls.spots} spots
              </span>{" "}
              remaining — reserve yours now.
            </p>
          )}
        </div>

        <button
          disabled={isFull}
          className={`w-full py-4 rounded-full font-medium transition-all duration-300 ${
            isFull
              ? "bg-stone-100 text-stone-400 cursor-not-allowed"
              : "bg-gradient-to-r from-emerald-700 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-200 hover:-translate-y-0.5"
          }`}
        >
          {isFull ? "Join Waitlist" : "Book This Class"}
        </button>
      </div>
    </div>
  );
}
