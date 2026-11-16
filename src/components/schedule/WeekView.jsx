// src/components/yoga/schedule/WeekView.jsx
import { DAYS, scheduleData, INSTRUCTORS } from "./scheduleData";

export default function WeekView({ filteredIds, onSelectClass }) {
  return (
    <div className="hidden lg:block overflow-x-auto">
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
                  {dayClasses.length} class{dayClasses.length !== 1 ? "es" : ""}
                </p>
              </div>

              {dayClasses.length === 0 ? (
                <div className="text-center py-8 text-xs text-stone-400">—</div>
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
                        <span className="text-[10px] text-stone-500">
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
  );
}
