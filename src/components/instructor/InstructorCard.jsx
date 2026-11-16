// src/components/yoga/instructors/InstructorCard.jsx

export default function InstructorCard({ instructor, onClick }) {
  return (
    <button
      onClick={() => onClick(instructor)}
      className="group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-left w-full"
    >
      {/* Photo */}
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={instructor.photo}
          alt={instructor.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent" />

        {/* Experience badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-medium text-emerald-700">
          {instructor.experience}
        </div>

        {/* Name on photo */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-xs tracking-widest text-emerald-300 font-medium uppercase mb-1">
            {instructor.specialties.slice(0, 2).join(" · ")}
          </p>
          <h3 className="font-serif text-2xl text-white">{instructor.name}</h3>
          <p className="text-sm text-stone-300">{instructor.role}</p>
        </div>
      </div>

      {/* Hover hint */}
      <div className="p-4 flex items-center justify-between">
        <span className="text-xs text-stone-500">View profile</span>
        <span className="w-8 h-8 rounded-full bg-stone-100 group-hover:bg-emerald-100 flex items-center justify-center transition-colors duration-300">
          <svg
            className="w-4 h-4 text-stone-500 group-hover:text-emerald-700 transition-colors"
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
        </span>
      </div>
    </button>
  );
}
