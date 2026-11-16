// src/components/yoga/instructors/InstructorModal.jsx
import { useEffect } from "react";

export default function InstructorModal({ instructor, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!instructor) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-4 py-8 animate-fadeIn"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-stone-100 flex items-center justify-center transition-colors shadow-sm"
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

        <div className="grid md:grid-cols-5">
          {/* Photo */}
          <div className="md:col-span-2 relative">
            <div className="aspect-[4/5] md:aspect-auto md:h-full">
              <img
                src={instructor.photo}
                alt={instructor.name}
                className="w-full h-full object-cover md:rounded-l-3xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent md:rounded-l-3xl" />
          </div>

          {/* Content */}
          <div className="md:col-span-3 p-8 md:p-10 space-y-6">
            <div>
              <p className="text-xs tracking-widest text-emerald-700 font-medium uppercase mb-2">
                {instructor.specialties.join(" · ")}
              </p>
              <h2 className="font-serif text-3xl text-stone-900">
                {instructor.name}
              </h2>
              <p className="text-sm text-stone-500 mt-1">{instructor.role}</p>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium">
                {instructor.experience} experience
              </span>
            </div>

            <p className="text-stone-600 leading-relaxed">{instructor.bio}</p>

            <div className="relative pl-6 py-1">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-amber-400 rounded-full" />
              <p className="font-serif italic text-stone-700 text-lg">
                “{instructor.quote}”
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-stone-500 font-medium mb-3">
                CERTIFICATIONS
              </p>
              <div className="flex flex-wrap gap-2">
                {instructor.certifications.map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-stone-50 border border-stone-100 rounded-full text-xs text-stone-600"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button className="w-full py-3.5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-full font-medium shadow-md hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5 transition-all duration-300">
                View {instructor.name}'s Classes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
