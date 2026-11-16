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
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 border border-stone-100 shadow-sm">
      {/* Search */}
      <div className="relative mb-4 sm:mb-6">
        <svg
          className="absolute left-3.5 sm:left-4 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-stone-400 pointer-events-none"
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
          type="search"
          placeholder="Search classes or instructors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2.5 sm:py-3 bg-stone-50 border border-stone-200 rounded-full text-sm sm:text-base text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-stone-200 hover:bg-stone-300 flex items-center justify-center text-stone-600"
            aria-label="Clear search"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>

      {/* Type filter */}
      <div className="mb-4 sm:mb-5">
        <p className="text-[10px] sm:text-xs tracking-widest text-stone-500 font-medium mb-2 sm:mb-3">
          CLASS TYPE
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {CLASS_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                activeType === type
                  ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                  : "bg-stone-100 text-stone-600 hover:bg-stone-200 active:bg-stone-300"
              }`}
              aria-pressed={activeType === type}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Level filter */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div>
          <p className="text-[10px] sm:text-xs tracking-widest text-stone-500 font-medium mb-2 sm:mb-3">
            LEVEL
          </p>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {LEVELS.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm transition-all duration-300 whitespace-nowrap ${
                  activeLevel === level
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200 active:bg-stone-300"
                }`}
                aria-pressed={activeLevel === level}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 pt-3 sm:pt-0 border-t sm:border-t-0 border-stone-100">
          <span className="text-xs sm:text-sm text-stone-500">
            {resultCount} class{resultCount !== 1 ? "es" : ""}
          </span>
          {hasFilter && (
            <button
              onClick={onReset}
              className="text-xs sm:text-sm text-emerald-700 hover:text-emerald-800 underline underline-offset-4 transition-colors whitespace-nowrap"
            >
              Reset filters
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
