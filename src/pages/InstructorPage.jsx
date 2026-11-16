// src/pages/Instructors.jsx
import { useMemo, useState } from "react";
import {
  instructorsData,
  SPECIALTIES,
} from "../components/instructor/instructorsData";
import InstructorCard from "../components/instructor/InstructorCard";
import InstructorModal from "../components/instructor/InstructorModal";

export default function Instructors() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  const filtered = useMemo(() => {
    if (activeSpecialty === "All") return instructorsData;
    return instructorsData.filter((i) =>
      i.specialties.includes(activeSpecialty),
    );
  }, [activeSpecialty]);

  return (
    <div className="w-full bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans">
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-stone-50/30 to-amber-50/20" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-emerald-700 font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            OUR TEACHERS
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-serif leading-tight tracking-tight text-stone-900">
            Guides on the <span className="text-emerald-700">Path</span>
          </h1>
          <p className="mt-6 text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Each of our instructors brings a unique perspective to the practice
            — united by a shared commitment to mindful, sustainable movement.
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="px-6 pb-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SPECIALTIES.map((spec) => (
              <button
                key={spec}
                onClick={() => setActiveSpecialty(spec)}
                className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                  activeSpecialty === spec
                    ? "bg-emerald-700 text-white shadow-md shadow-emerald-200"
                    : "bg-white/80 text-stone-600 border border-stone-200 hover:border-emerald-300 hover:text-emerald-700"
                }`}
              >
                {spec}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🧘</div>
              <p className="text-stone-600 text-lg">
                No instructors match this specialty.
              </p>
              <button
                onClick={() => setActiveSpecialty("All")}
                className="mt-4 text-sm text-emerald-700 underline underline-offset-4"
              >
                Show all instructors
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((instructor) => (
                <InstructorCard
                  key={instructor.id}
                  instructor={instructor}
                  onClick={setSelectedInstructor}
                />
              ))}
            </div>
          )}

          <p className="text-center text-sm text-stone-500 mt-10">
            {filtered.length} instructor{filtered.length !== 1 ? "s" : ""} ·{" "}
            {activeSpecialty === "All" ? "all specialties" : activeSpecialty}
          </p>
        </div>
      </section>

      {/* CTA — TERANG (agar tidak tabrak footer gelap) */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            Ready to practice <br />
            <span className="text-emerald-700">with us?</span>
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-xl mx-auto">
            Browse the schedule and find a class with your favorite instructor.
          </p>
          <button className="group px-10 py-5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3">
            <span>View Schedule</span>
            <svg
              className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* MODAL */}
      {selectedInstructor && (
        <InstructorModal
          instructor={selectedInstructor}
          onClose={() => setSelectedInstructor(null)}
        />
      )}
    </div>
  );
}
