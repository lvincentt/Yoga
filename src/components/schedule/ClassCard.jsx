// src/components/yoga/schedule/ClassCard.jsx
// Props tidak berubah: { cls, onClick }.
import { INSTRUCTORS, formatPrice } from "./scheduleData";

function ClockIcon({ className = "" }) {
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
        d="M12 7v5l3 2m6-2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}

// Ikon timer untuk durasi. Versi lama memakai ikon jam yang SAMA untuk waktu dan durasi.
function TimerIcon({ className = "" }) {
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
        d="M9 3h6M12 8v4l2 2m6-2a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
    </svg>
  );
}

function SpotBadge({ spots }) {
  const base =
    "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium";

  if (spots === 0) {
    return (
      <span className={`${base} border-stone-200 bg-stone-100 text-stone-600`}>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-stone-400"
        />
        Fully booked
      </span>
    );
  }
  if (spots <= 3) {
    return (
      <span className={`${base} border-amber-200 bg-amber-50 text-amber-800`}>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-amber-500 motion-safe:animate-pulse"
        />
        Only {spots} spot{spots !== 1 ? "s" : ""} left
      </span>
    );
  }
  return (
    <span
      className={`${base} border-emerald-200 bg-emerald-50 text-emerald-800`}
    >
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-emerald-500"
      />
      {spots} spots available
    </span>
  );
}

export default function ClassCard({ cls, onClick }) {
  const instructor = INSTRUCTORS.find((i) => i.id === cls.instructor);
  const isFull = cls.spots === 0;
  // Hanya jam mulai yang ditampilkan di kartu; rentang lengkap ada di modal
  const startTime = String(cls.time).split(" – ")[0];

  return (
    <button
      type="button"
      onClick={onClick}
      aria-haspopup="dialog"
      className="group relative w-full overflow-hidden rounded-[1.25rem] border border-stone-900/[0.07] bg-white text-left shadow-sm shadow-stone-900/[0.03] transition duration-300 hover:-translate-y-1 hover:border-emerald-800/20 hover:shadow-xl hover:shadow-emerald-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
    >
      {/* Accent bar: pakai gradient dari data, dengan fallback kalau cls.color kosong */}
      <div
        aria-hidden="true"
        className={`absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b transition-[width] duration-300 group-hover:w-2 ${
          cls.color ?? "from-emerald-300 to-emerald-500"
        }`}
      />

      <div className="py-5 pl-6 pr-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <p className="flex flex-wrap items-center gap-x-2 text-[11px] uppercase tracking-[0.18em]">
              <span className="font-medium text-emerald-800">{cls.type}</span>
              <span aria-hidden="true" className="text-stone-300">
                ·
              </span>
              <span className="normal-case tracking-normal text-stone-500">
                {cls.level}
              </span>
            </p>
            <h3 className="mt-1.5 line-clamp-2 font-serif text-xl leading-snug text-stone-900">
              {cls.name}
            </h3>
          </div>

          {/* Instruktur */}
          <div className="flex w-16 shrink-0 flex-col items-center">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-100 to-amber-100 text-sm font-semibold text-emerald-900 ring-2 ring-white shadow-sm"
            >
              {instructor?.avatar}
            </span>
            <span className="mt-1.5 line-clamp-2 text-center text-[11px] leading-tight text-stone-500">
              {instructor?.name}
            </span>
          </div>
        </div>

        {/* Meta */}
        <p className="mt-4 flex items-center gap-4 text-sm text-stone-600">
          <span className="inline-flex items-center gap-1.5">
            <ClockIcon className="h-4 w-4 shrink-0 text-stone-400" />
            {startTime}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <TimerIcon className="h-4 w-4 shrink-0 text-stone-400" />
            {cls.duration} min
          </span>
        </p>

        <div className="mt-4">
          <SpotBadge spots={cls.spots} />
        </div>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-stone-900/[0.07] pt-4">
          <span className="whitespace-nowrap font-serif text-xl text-emerald-800">
            {formatPrice(cls.price)}
          </span>
          {/* Visual saja: seluruh kartu adalah tombol yang membuka detail */}
          <span
            aria-hidden="true"
            className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition duration-300 ${
              isFull
                ? "border border-stone-900/15 text-stone-700 group-hover:bg-stone-50"
                : "bg-emerald-800 text-white group-hover:bg-emerald-900 group-hover:shadow-md group-hover:shadow-emerald-900/20"
            }`}
          >
            {isFull ? "Waitlist" : "Book"}
          </span>
          <span className="sr-only">View details</span>
        </div>
      </div>
    </button>
  );
}
