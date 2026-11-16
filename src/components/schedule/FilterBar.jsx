// src/components/yoga/schedule/FilterBar.jsx
import { CLASS_TYPES, LEVELS } from "./scheduleData";

export default function FilterBar({
  activeType,
  setActiveType,
  activeLevel,
  setActiveLevel,
  searchQuery,
  setSearchQuery,
  onReset,
  resultCount,
}) {
  const hasFilter =
    activeType !== "All" || activeLevel !== "All Levels" || searchQuery !== "";

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-stone-100 shadow-sm">
      {/* Search */}
      <div className="relative mb-6">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search classes or instructors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-stone-50 border border-stone-200 rounded-full text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
        />
      </div>

      {/* Type filter */}
      <div className="mb-5">
        <p className="text-xs tracking-widest text-stone-500 font-medium mb-3">
          CLASS TYPE
        </p>
        <div className="flex flex-wrap gap-2">
          {CLASS_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                activeType === type
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Level filter */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-xs tracking-widest text-stone-500 font-medium mb-3">
            LEVEL
          </p>
          <div className="flex flex-wrap gap-2">
            {LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeLevel === level
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-stone-500">
            {resultCount} class{resultCount !== 1 ? "es" : ""}
          </span>
          {hasFilter && (
            <button
              onClick={onReset}
              className="text-sm text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
