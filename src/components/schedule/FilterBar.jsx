// src/components/yoga/schedule/FilterBar.jsx
// Props dan import tidak berubah dari versi lama.
import { useId } from "react";
import { CLASS_TYPES, LEVELS } from "./scheduleData";

function SearchIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-4.35-4.35M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
      />
    </svg>
  );
}

function CloseIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
}

/** Satu grup chip (type / level). Dibuat sekali supaya dua grup konsisten. */
function ChipGroup({ label, options, active, onChange }) {
  const labelId = useId();
  return (
    <div role="group" aria-labelledby={labelId}>
      <p
        id={labelId}
        className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-stone-500"
      >
        {label}
      </p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isActive = active === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={isActive}
              className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${
                isActive
                  ? "border-emerald-800 bg-emerald-800 text-white shadow-md shadow-emerald-900/15"
                  : "border-stone-900/10 bg-white text-stone-600 hover:border-emerald-800/30 hover:bg-emerald-50 hover:text-emerald-900"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

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
  const searchId = useId();
  const hasFilter =
    activeType !== "All" || activeLevel !== "All Levels" || searchQuery !== "";

  return (
    <div
      role="search"
      aria-label="Filter classes"
      className="rounded-[1.75rem] border border-stone-900/[0.07] bg-white p-5 shadow-sm shadow-stone-900/[0.03] sm:p-7 md:p-8"
    >
      {/* Search */}
      <div className="relative">
        <label htmlFor={searchId} className="sr-only">
          Search classes or instructors
        </label>
        <SearchIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-stone-400" />
        <input
          id={searchId}
          type="search"
          placeholder="Search classes or instructors..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Escape" && searchQuery) setSearchQuery("");
          }}
          autoComplete="off"
          // [&::-webkit-search-cancel-button]:hidden: sembunyikan tombol X bawaan browser agar tidak dobel
          className="w-full rounded-full border border-stone-900/10 bg-[#f6f2ea]/60 py-3 pl-12 pr-12 text-base text-stone-800 placeholder-stone-400 outline-none transition duration-300 focus:border-emerald-800/50 focus:bg-white focus:ring-4 focus:ring-emerald-800/10 [&::-webkit-search-cancel-button]:hidden"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery("")}
            aria-label="Clear search"
            // Area sentuh 32px, ikon tetap kecil
            className="absolute right-2.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-stone-500 transition-colors hover:bg-stone-900/5 hover:text-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-800"
          >
            <CloseIcon className="h-3.5 w-3.5" />
          </button>
        )}
      </div>

      <div className="mt-7 space-y-6">
        <ChipGroup
          label="Class type"
          options={CLASS_TYPES}
          active={activeType}
          onChange={setActiveType}
        />

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <ChipGroup
            label="Level"
            options={LEVELS}
            active={activeLevel}
            onChange={setActiveLevel}
          />

          <div className="flex items-center justify-between gap-4 border-t border-stone-900/[0.07] pt-4 sm:justify-end sm:border-t-0 sm:pt-0">
            <span className="text-sm text-stone-500">
              {resultCount} class{resultCount !== 1 ? "es" : ""}
            </span>
            {hasFilter && (
              <button
                type="button"
                onClick={onReset}
                className="whitespace-nowrap border-b border-emerald-800/30 pb-0.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 transition-colors hover:border-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
