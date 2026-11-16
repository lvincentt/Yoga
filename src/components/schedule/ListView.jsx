// src/components/yoga/schedule/ListView.jsx
import { DAYS, scheduleData } from "./scheduleData";
import ClassCard from "./ClassCard";

export default function ListView({ filteredIds }) {
  const grouped = DAYS.map((day) => ({
    day,
    classes: scheduleData.filter(
      (c) => c.day === day && filteredIds.includes(c.id),
    ),
  })).filter((g) => g.classes.length > 0);

  if (grouped.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="text-5xl mb-4">🧘</div>
        <p className="text-stone-600 text-lg">No classes match your filters.</p>
        <p className="text-stone-400 text-sm mt-2">
          Try adjusting the filters above.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      {grouped.map(({ day, classes }) => (
        <div key={day}>
          <div className="flex items-center gap-4 mb-5">
            <h3 className="font-serif text-2xl text-stone-900">
              {day === "Mon" && "Monday"}
              {day === "Tue" && "Tuesday"}
              {day === "Wed" && "Wednesday"}
              {day === "Thu" && "Thursday"}
              {day === "Fri" && "Friday"}
              {day === "Sat" && "Saturday"}
              {day === "Sun" && "Sunday"}
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-stone-200 to-transparent"></div>
            <span className="text-sm text-stone-500">
              {classes.length} class{classes.length !== 1 ? "es" : ""}
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {classes.map((cls) => (
              <ClassCard key={cls.id} cls={cls} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
