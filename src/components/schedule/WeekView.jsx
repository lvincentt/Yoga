// src/components/yoga/schedule/WeekView.jsx
import { useState } from "react";
import { DAYS, scheduleData, INSTRUCTORS } from "./scheduleData";

const DAY_LABELS = {
  Mon: "Monday",
  Tue: "Tuesday",
  Wed: "Wednesday",
  Thu: "Thursday",
  Fri: "Friday",
  Sat: "Saturday",
  Sun: "Sunday",
};

export default function WeekView({ filteredIds, onSelectClass }) {
  // Default: hari ini (atau Senin kalau hari ini gak ada di DAYS)
  const [openDay, setOpenDay] = useState(() => {
    const today = new Date().toLocaleDateString("en-US", { weekday: "short" });
    return DAYS.includes(today) ? today : DAYS[0];
  });

  const hasAny = scheduleData.some((c) => filteredIds.includes(c.id));

  if (!hasAny) {
    return (
      <div className="text-center py-16 sm:py-20 px-4">
        <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">🧘</div>
        <p className="text-stone-700 text-base sm:text-lg font-medium">
          No classes match your filters.
        </p>
        <p className="text-stone-400 text-xs sm:text-sm mt-1.5">
          Try adjusting the filters above.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* ===== MOBILE: Accordion per hari ===== */}
      <div className="lg:hidden space-y-2.5">
        {DAYS.map((day) => {
          const dayClasses = scheduleData.filter(
            (c) => c.day === day && filteredIds.includes(c.id),
          );
          const isOpen = openDay === day;
          const isEmpty = dayClasses.length === 0;

          return (
            <div
              key={day}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? "border-emerald-200 bg-white shadow-sm"
                  : "border-stone-100 bg-white/60"
              }`}
            >
              {/* Header — selalu klikable */}
              <button
                type="button"
                onClick={() => setOpenDay(isOpen ? null : day)}
                className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-stone-50/80 transition-colors"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span
                    className={`w-1 h-8 rounded-full bg-gradient-to-b shrink-0 ${
                      isEmpty
                        ? "from-stone-200 to-stone-200"
                        : "from-emerald-400 to-emerald-600"
                    }`}
                  />
                  <div className="min-w-0">
                    <p className="font-serif text-base text-stone-900 leading-tight">
                      {DAY_LABELS[day]}
                    </p>
                    <p className="text-[11px] text-stone-500 mt-0.5">
                      {isEmpty
                        ? "No classes"
                        : `${dayClasses.length} class${dayClasses.length !== 1 ? "es" : ""}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {!isEmpty && (
                    <span className="hidden xs:inline text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                      {dayClasses.filter((c) => c.spots > 0).length} available
                    </span>
                  )}
                  <svg
                    className={`w-4 h-4 text-stone-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Body — collapsible */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-3 pb-3 pt-1 space-y-2">
                    {isEmpty ? (
                      <div className="text-center py-6 text-xs text-stone-400">
                        No classes scheduled for this day.
                      </div>
                    ) : (
                      dayClasses.map((cls) => {
                        const instructor = INSTRUCTORS.find(
                          (i) => i.id === cls.instructor,
                        );
                        const isFull = cls.spots === 0;
                        return (
                          <button
                            key={cls.id}
                            type="button"
                            onClick={() => onSelectClass(cls)}
                            className={`w-full text-left p-3 rounded-xl bg-gradient-to-br ${
                              cls.color
                            } border border-white hover:border-emerald-200 hover:shadow-md transition-all duration-300 ${
                              isFull ? "opacity-60" : ""
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <p className="text-[11px] font-medium text-stone-600">
                                {cls.time}
                              </p>
                              {isFull ? (
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-stone-200/70 text-stone-500">
                                  Full
                                </span>
                              ) : cls.spots <= 3 ? (
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-amber-100 text-amber-700">
                                  {cls.spots} left
                                </span>
                              ) : null}
                            </div>
                            <p className="text-sm font-semibold text-stone-900 leading-tight mb-2">
                              {cls.name}
                            </p>
                            <div className="flex items-center gap-1.5">
                              <div className="w-5 h-5 bg-white/70 rounded-full flex items-center justify-center text-[9px] font-semibold text-emerald-700">
                                {instructor?.avatar}
                              </div>
                              <span className="text-[10px] text-stone-500 truncate">
                                {instructor?.name}
                              </span>
                              <span className="text-[10px] text-stone-400 ml-auto">
                                {cls.duration} min
                              </span>
                            </div>
                          </button>
                        );
                      })
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ===== DESKTOP: Grid 7 kolom (seperti sebelumnya) ===== */}
      <div className="hidden lg:block overflow-x-auto pb-2">
        <div className="min-w-[900px] grid grid-cols-7 gap-3">
          {DAYS.map((day) => {
            const dayClasses = scheduleData.filter(
              (c) => c.day === day && filteredIds.includes(c.id),
            );
            return (
              <div key={day} className="space-y-3">
                <div className="text-center pb-3 border-b border-stone-200">
                  <p className="text-xs tracking-widest text-stone-500 font-medium">
                    {day.toUpperCase()}
                  </p>
                  <p className="text-sm text-stone-400 mt-0.5">
                    {dayClasses.length} class
                    {dayClasses.length !== 1 ? "es" : ""}
                  </p>
                </div>

                {dayClasses.length === 0 ? (
                  <div className="text-center py-8 text-xs text-stone-400">
                    —
                  </div>
                ) : (
                  dayClasses.map((cls) => {
                    const instructor = INSTRUCTORS.find(
                      (i) => i.id === cls.instructor,
                    );
                    const isFull = cls.spots === 0;
                    return (
                      <button
                        key={cls.id}
                        onClick={() => onSelectClass(cls)}
                        className={`w-full text-left p-3 rounded-xl bg-gradient-to-br ${
                          cls.color
                        } border border-white hover:border-emerald-200 hover:shadow-md transition-all duration-300 ${
                          isFull ? "opacity-60" : ""
                        }`}
                      >
                        <p className="text-[11px] font-medium text-stone-500 mb-1">
                          {cls.time.split(" – ")[0]}
                        </p>
                        <p className="text-xs font-semibold text-stone-900 leading-tight mb-1.5">
                          {cls.name}
                        </p>
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 bg-white/70 rounded-full flex items-center justify-center text-[9px] font-semibold text-emerald-700">
                            {instructor?.avatar}
                          </div>
                          <span className="text-[10px] text-stone-500 truncate">
                            {instructor?.name}
                          </span>
                        </div>
                        {isFull && (
                          <p className="text-[10px] text-stone-400 mt-1.5 italic">
                            Fully booked
                          </p>
                        )}
                      </button>
                    );
                  })
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
