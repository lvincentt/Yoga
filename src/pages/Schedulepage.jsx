// src/pages/Schedule.jsx
import { useMemo, useState } from "react";
import { scheduleData, INSTRUCTORS } from "../components/schedule/scheduleData";
import FilterBar from "../components/schedule/FilterBar";
import WeekView from "../components/schedule/WeekView";
import ListView from "../components/schedule/ListView";
import ClassModal from "../components/schedule/ClassModal";

export default function Schedule() {
  const [activeType, setActiveType] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("week");
  const [selectedClass, setSelectedClass] = useState(null);

  const filteredIds = useMemo(() => {
    return scheduleData
      .filter((c) => activeType === "All" || c.type === activeType)
      .filter((c) => activeLevel === "All Levels" || c.level === activeLevel)
      .filter((c) => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        const instructor = INSTRUCTORS.find((i) => i.id === c.instructor);
        return (
          c.name.toLowerCase().includes(q) ||
          c.type.toLowerCase().includes(q) ||
          instructor?.name.toLowerCase().includes(q)
        );
      })
      .map((c) => c.id);
  }, [activeType, activeLevel, searchQuery]);

  const resetFilters = () => {
    setActiveType("All");
    setActiveLevel("All Levels");
    setSearchQuery("");
  };

  return (
    <div className="w-full bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans min-h-screen">
      {/* Header */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-stone-50/30 to-amber-50/20" />
        <div className="absolute top-1/3 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-200/20 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-0 -right-20 w-56 sm:w-80 h-56 sm:h-80 bg-amber-200/15 rounded-full blur-3xl hidden sm:block" />

        <div className="relative max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
            WEEKLY SCHEDULE
          </span>
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-stone-900">
            Find Your <span className="text-emerald-700">Practice</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Browse our weekly classes and find the practice that meets you where
            you are today — whether you seek energy, stillness, or restoration.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-16 sm:pb-24 md:pb-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6 md:space-y-8">
          <FilterBar
            activeType={activeType}
            setActiveType={setActiveType}
            activeLevel={activeLevel}
            setActiveLevel={setActiveLevel}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onReset={resetFilters}
            resultCount={filteredIds.length}
          />

          {/* Toolbar: result count + view toggle (desktop) */}
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs sm:text-sm text-stone-500">
              Showing{" "}
              <span className="font-medium text-stone-800">
                {filteredIds.length}
              </span>{" "}
              of {scheduleData.length} classes
            </p>

            <div className="hidden lg:inline-flex bg-white rounded-full p-1 border border-stone-200 shadow-sm">
              <button
                onClick={() => setView("week")}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 flex items-center gap-2 ${
                  view === "week"
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
                aria-pressed={view === "week"}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Week
              </button>
              <button
                onClick={() => setView("list")}
                className={`px-4 py-2 text-sm rounded-full transition-all duration-300 flex items-center gap-2 ${
                  view === "list"
                    ? "bg-emerald-700 text-white shadow-sm"
                    : "text-stone-600 hover:text-stone-900"
                }`}
                aria-pressed={view === "list"}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
                List
              </button>
            </div>
          </div>

          {/* === RENDER SEKALI SAJA === */}
          {/* Mobile: selalu ListView */}
          <div className="lg:hidden">
            <ListView
              filteredIds={filteredIds}
              onSelectClass={setSelectedClass}
            />
          </div>

          {/* Desktop: sesuai view */}
          <div className="hidden lg:block">
            {view === "week" ? (
              <WeekView
                filteredIds={filteredIds}
                onSelectClass={setSelectedClass}
              />
            ) : (
              <ListView
                filteredIds={filteredIds}
                onSelectClass={setSelectedClass}
              />
            )}
          </div>

          {/* Info banner */}
          <div className="mt-10 sm:mt-12 md:mt-16 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 bg-emerald-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-amber-600/10 rounded-full blur-3xl" />
            <div className="relative">
              <h3 className="font-serif text-2xl sm:text-3xl text-white mb-2 sm:mb-3">
                Not sure where to start?
              </h3>
              <p className="text-sm sm:text-base text-emerald-100/80 mb-5 sm:mb-6 max-w-lg mx-auto leading-relaxed">
                Try our Beginner-Friendly Hatha or Restorative classes — no
                experience needed, just an open mind.
              </p>
              <button className="px-5 sm:px-8 py-2.5 sm:py-3 bg-white text-emerald-900 rounded-full text-sm sm:text-base font-medium hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                View Beginner Classes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedClass && (
        <ClassModal
          cls={selectedClass}
          onClose={() => setSelectedClass(null)}
        />
      )}
    </div>
  );
}
