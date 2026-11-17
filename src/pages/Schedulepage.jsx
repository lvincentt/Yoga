// src/pages/Schedule.jsx
// Interface ke FilterBar, WeekView, ListView, dan ClassModal tidak berubah.
// Catatan: butuh React 18+ (useSyncExternalStore).
import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import { scheduleData, INSTRUCTORS } from "../components/schedule/scheduleData";
import FilterBar from "../components/schedule/FilterBar";
import WeekView from "../components/schedule/WeekView";
import ListView from "../components/schedule/ListView";
import ClassModal from "../components/schedule/ClassModal";

/** Subscribe ke media query. Dipakai supaya hanya SATU view yang dirender (bukan disembunyikan lewat CSS). */
function useMediaQuery(query) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

function CalendarIcon({ className = "" }) {
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
        d="M8 3v3m8-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
      />
    </svg>
  );
}

function ListIcon({ className = "" }) {
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
        d="M4 7h16M4 12h16M4 17h16"
      />
    </svg>
  );
}

function ArrowIcon({ className = "" }) {
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
        d="M5 12h14m0 0-5-5m5 5-5 5"
      />
    </svg>
  );
}

export default function Schedule() {
  const [activeType, setActiveType] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");
  const [searchQuery, setSearchQuery] = useState("");
  const [view, setView] = useState("week");
  const [selectedClass, setSelectedClass] = useState(null);

  const resultsRef = useRef(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  // Mobile selalu list; desktop mengikuti pilihan user
  const currentView = isDesktop ? view : "list";

  const instructorsById = useMemo(
    () => new Map(INSTRUCTORS.map((i) => [i.id, i])),
    [],
  );

  const filteredIds = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return scheduleData
      .filter((c) => {
        if (activeType !== "All" && c.type !== activeType) return false;
        if (activeLevel !== "All Levels" && c.level !== activeLevel)
          return false;
        if (!q) return true;
        return (
          c.name.toLowerCase().includes(q) ||
          c.type.toLowerCase().includes(q) ||
          instructorsById.get(c.instructor)?.name.toLowerCase().includes(q)
        );
      })
      .map((c) => c.id);
  }, [activeType, activeLevel, searchQuery, instructorsById]);

  // Level "beginner" diambil dari data, bukan di-hardcode. Kalau tidak ada, tombol banner disembunyikan.
  const beginnerLevel = useMemo(
    () => scheduleData.map((c) => c.level).find((l) => /beginner/i.test(l)),
    [],
  );

  const resetFilters = () => {
    setActiveType("All");
    setActiveLevel("All Levels");
    setSearchQuery("");
  };

  const showBeginnerClasses = () => {
    setActiveType("All");
    setSearchQuery("");
    setActiveLevel(beginnerLevel);
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    resultsRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  const viewBtn = (active) =>
    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${
      active
        ? "bg-emerald-800 text-white shadow-sm"
        : "text-stone-600 hover:text-stone-900"
    }`;

  return (
    <div className="min-h-screen w-full bg-[#f6f2ea] font-sans text-stone-800">
      <style>{`
        @keyframes sched-rise { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: no-preference) {
          .sched-rise { opacity: 0; animation: sched-rise .9s cubic-bezier(.22,1,.36,1) forwards; }
        }
      `}</style>

      {/* Header */}
      <header className="relative isolate overflow-hidden px-5 pb-12 pt-28 sm:px-8 sm:pb-16 md:pt-36 md:pb-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_85%_0%,rgba(163,177,138,0.28),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_8%_100%,rgba(214,181,140,0.24),transparent_70%)]" />
        </div>

        <div className="mx-auto max-w-6xl text-center">
          <p className="sched-rise inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
            Weekly schedule
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
          </p>
          <h1 className="sched-rise mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-stone-900 [animation-delay:100ms] sm:text-5xl md:text-6xl">
            Find your <span className="italic text-emerald-800">practice.</span>
          </h1>
          <p className="sched-rise mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600 [animation-delay:200ms] md:text-lg">
            Browse our weekly classes and find the practice that meets you where
            you are today — whether you seek energy, stillness, or restoration.
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="px-5 pb-20 sm:px-8 md:pb-32">
        <div
          ref={resultsRef}
          className="mx-auto max-w-6xl scroll-mt-24 space-y-6 md:space-y-8"
        >
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

          {/* Toolbar */}
          <div className="flex items-center justify-between gap-3">
            {/* aria-live: pembaca layar diberi tahu saat hasil filter berubah */}
            <p
              role="status"
              aria-live="polite"
              className="text-sm text-stone-500"
            >
              Showing{" "}
              <span className="font-medium text-stone-800">
                {filteredIds.length}
              </span>{" "}
              of {scheduleData.length} classes
            </p>

            <div
              role="group"
              aria-label="Choose schedule layout"
              className="hidden rounded-full border border-stone-900/10 bg-white p-1 shadow-sm lg:inline-flex"
            >
              <button
                type="button"
                onClick={() => setView("week")}
                aria-pressed={view === "week"}
                className={viewBtn(view === "week")}
              >
                <CalendarIcon className="h-4 w-4" />
                Week
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                aria-pressed={view === "list"}
                className={viewBtn(view === "list")}
              >
                <ListIcon className="h-4 w-4" />
                List
              </button>
            </div>
          </div>

          {/* View dirender SEKALI saja, tergantung ukuran layar */}
          {filteredIds.length === 0 ? (
            <div className="rounded-[1.5rem] border border-dashed border-stone-900/15 bg-white/60 px-6 py-16 text-center">
              <p className="font-serif text-2xl text-stone-900">
                No classes match your filters.
              </p>
              <p className="mx-auto mt-3 max-w-md text-stone-600">
                Try a different type or level, or clear your search to see the
                full week.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-emerald-800 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-emerald-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
              >
                Clear all filters
              </button>
            </div>
          ) : currentView === "week" ? (
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

          {/* Info banner */}
          <aside
            aria-labelledby="start-heading"
            className="relative mt-12 overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-14 text-center shadow-[0_40px_100px_-40px_rgba(6,40,30,0.7)] sm:px-12 md:mt-16 md:py-16"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(163,177,138,0.28),transparent_70%)]" />
              <div className="absolute left-1/2 top-1/2 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06]" />
              <div className="absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]" />
            </div>

            <div className="relative mx-auto max-w-xl">
              <h2
                id="start-heading"
                className="font-serif text-3xl leading-tight text-white sm:text-4xl"
              >
                Not sure where to{" "}
                <span className="italic text-emerald-200">start?</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-emerald-50/80">
                Try our Beginner-Friendly Hatha or Restorative classes — no
                experience needed, just an open mind.
              </p>

              {beginnerLevel && (
                <button
                  type="button"
                  onClick={showBeginnerClasses}
                  className="group mt-8 inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f6f2ea] px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  View beginner classes
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              )}
            </div>
          </aside>
        </div>
      </main>

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
