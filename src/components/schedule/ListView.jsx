// src/components/yoga/schedule/ListView.jsx
// Props dan import tidak berubah: { filteredIds, onSelectClass }.
import { useId, useMemo, useState, useSyncExternalStore } from "react";
import { DAYS, scheduleData } from "./scheduleData";
import ClassCard from "./ClassCard";

const DAY_LABELS = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

/** Satu view saja yang dirender (mobile accordion ATAU desktop grid), bukan keduanya disembunyikan via CSS. */
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

function ChevronIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m19 9-7 7-7-7" />
    </svg>
  );
}

const plural = (n) => `${n} class${n !== 1 ? "es" : ""}`;

function DaySection({
  day,
  classes,
  isToday,
  isOpen,
  onToggle,
  onSelectClass,
}) {
  const panelId = useId();
  const buttonId = useId();
  const availableCount = classes.filter((c) => c.spots > 0).length;

  return (
    <div
      className={`overflow-hidden rounded-[1.25rem] border transition-all duration-300 ${
        isOpen
          ? "border-emerald-800/20 bg-white shadow-lg shadow-emerald-900/5"
          : "border-stone-900/[0.07] bg-white/60"
      }`}
    >
      <h2>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-emerald-800"
        >
          <span className="flex min-w-0 items-center gap-3">
            <span
              aria-hidden="true"
              className={`h-9 w-1 shrink-0 rounded-full transition-colors duration-300 ${
                isOpen ? "bg-emerald-700" : "bg-stone-300"
              }`}
            />
            <span className="min-w-0">
              <span className="flex items-center gap-2">
                <span className="font-serif text-lg leading-tight text-stone-900">
                  {DAY_LABELS[day]}
                </span>
                {isToday && (
                  <span className="rounded-full bg-emerald-800 px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white">
                    Today
                  </span>
                )}
              </span>
              <span className="mt-1 block text-xs text-stone-500">
                {plural(classes.length)}
                {availableCount > 0 && (
                  <span className="text-emerald-800">
                    {" "}
                    · {availableCount} available
                  </span>
                )}
              </span>
            </span>
          </span>

          <span className="flex shrink-0 items-center gap-2">
            {availableCount === 0 && (
              <span className="rounded-full border border-stone-200 bg-stone-100 px-2.5 py-0.5 text-[11px] font-medium text-stone-600">
                Full
              </span>
            )}
            <ChevronIcon
              className={`h-4 w-4 text-stone-400 transition-transform duration-300 motion-reduce:transition-none ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
      </h2>

      {/*
        Panel collapsible. `invisible` saat tertutup memastikan kartu di dalamnya
        tidak bisa difokus dengan Tab (versi lama: tertutup tapi masih tabbable).
        visibility ikut ter-transisi, jadi animasi tutup tetap mulus.
      */}
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out motion-reduce:transition-none ${
          isOpen
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-3 px-3 pb-3 pt-1">
            {classes.map((cls) => (
              <ClassCard
                key={cls.id}
                cls={cls}
                onClick={() => onSelectClass?.(cls)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ListView({ filteredIds, onSelectClass }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const todayKey = useMemo(
    () => new Date().toLocaleDateString("en-US", { weekday: "short" }),
    [],
  );

  // Default: hari ini (atau hari pertama). null = user menutup semua.
  const [openDay, setOpenDay] = useState(() =>
    DAYS.includes(todayKey) ? todayKey : DAYS[0],
  );

  const grouped = useMemo(() => {
    const ids = new Set(filteredIds); // O(1) lookup, bukan includes() di dalam loop
    return DAYS.map((day) => ({
      day,
      classes: scheduleData.filter((c) => c.day === day && ids.has(c.id)),
    })).filter((g) => g.classes.length > 0);
  }, [filteredIds]);

  if (grouped.length === 0) {
    return (
      <div className="rounded-[1.5rem] border border-dashed border-stone-900/15 bg-white/60 px-6 py-16 text-center">
        <p className="font-serif text-2xl text-stone-900">
          No classes match your filters.
        </p>
        <p className="mt-2 text-sm text-stone-500">
          Try adjusting the filters above.
        </p>
      </div>
    );
  }

  // Kalau hari yang terbuka hilang karena filter, buka hari pertama yang tersisa
  const resolvedOpen =
    openDay === null
      ? null
      : grouped.some((g) => g.day === openDay)
        ? openDay
        : grouped[0].day;

  /* ===== MOBILE: accordion per hari ===== */
  if (!isDesktop) {
    return (
      <div className="space-y-3">
        {grouped.map(({ day, classes }) => (
          <DaySection
            key={day}
            day={day}
            classes={classes}
            isToday={day === todayKey}
            isOpen={resolvedOpen === day}
            onToggle={() => setOpenDay(resolvedOpen === day ? null : day)}
            onSelectClass={onSelectClass}
          />
        ))}
      </div>
    );
  }

  /* ===== DESKTOP: grid 2 kolom per hari ===== */
  return (
    <div className="space-y-12">
      {grouped.map(({ day, classes }) => (
        <section key={day} aria-labelledby={`day-${day}`}>
          <div className="mb-6 flex items-center gap-4">
            <h2
              id={`day-${day}`}
              className="flex items-center gap-3 whitespace-nowrap font-serif text-3xl text-stone-900"
            >
              {DAY_LABELS[day]}
              {day === todayKey && (
                <span className="rounded-full bg-emerald-800 px-2.5 py-1 font-sans text-[10px] font-medium uppercase tracking-widest text-white">
                  Today
                </span>
              )}
            </h2>
            <div
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-r from-stone-900/15 to-transparent"
            />
            <span className="whitespace-nowrap text-sm text-stone-500">
              {plural(classes.length)}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {classes.map((cls) => (
              <ClassCard
                key={cls.id}
                cls={cls}
                onClick={() => onSelectClass?.(cls)}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
