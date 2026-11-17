// src/components/yoga/schedule/ClassModal.jsx
// Props lama tetap: { cls, onClose }. Prop opsional baru: onBook(cls).
// Kalau onBook tidak diberikan, CTA menjadi link ke cls.href (atau #book / #waitlist).
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { INSTRUCTORS, formatPrice } from "./scheduleData";

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

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

function Detail({ label, children, accent = false }) {
  return (
    <div className="rounded-2xl bg-[#f6f2ea]/70 p-4 ring-1 ring-stone-900/[0.05]">
      <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-stone-500">
        {label}
      </dt>
      <dd
        className={`mt-1.5 text-sm font-medium sm:text-base ${
          accent
            ? "font-serif text-xl text-emerald-800 sm:text-2xl"
            : "text-stone-900"
        }`}
      >
        {children}
      </dd>
    </div>
  );
}

export default function ClassModal({ cls, onClose, onBook }) {
  const open = Boolean(cls);
  const dialogRef = useRef(null);
  const onCloseRef = useRef(onClose);
  const titleId = useId();
  const descId = useId();

  // Simpan onClose terbaru di ref: effect di bawah cukup jalan sekali,
  // tidak re-subscribe setiap parent render (parent biasanya mengirim arrow function baru).
  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement;
    const { overflow, paddingRight } = document.body.style;

    // Kunci scroll tanpa layout "lompat" saat scrollbar hilang
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    // Pindahkan fokus ke dialog supaya pembaca layar langsung membaca judulnya
    dialogRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        onCloseRef.current?.();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      // Focus trap: Tab berputar di dalam dialog
      const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === dialogRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      // Kembalikan nilai asli, bukan dipaksa "" (bisa menimpa style yang sudah ada)
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      // Kembalikan fokus ke kartu yang membuka modal
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [open]);

  if (!cls) return null;

  const instructor = INSTRUCTORS.find((i) => i.id === cls.instructor);
  const isFull = cls.spots === 0;
  const ctaLabel = isFull ? "Join waitlist" : "Book this class";
  const ctaStyles = isFull
    ? "border border-stone-900/15 bg-transparent text-stone-800 hover:bg-stone-50"
    : "bg-emerald-800 text-white shadow-lg shadow-emerald-900/20 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-xl";
  const ctaClass = `flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-medium transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 ${ctaStyles}`;

  return createPortal(
    <div
      // Tutup hanya kalau klik DIMULAI di backdrop (drag teks dari dalam dialog tidak menutup modal)
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose?.();
      }}
      className="modal-backdrop fixed inset-0 z-[60] flex items-end justify-center bg-stone-950/50 backdrop-blur-sm sm:items-center sm:px-4"
    >
      <style>{`
        @keyframes modal-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-pop { from { opacity: 0; transform: translateY(20px) scale(.98); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: no-preference) {
          .modal-backdrop { animation: modal-fade .25s ease-out both; }
          .modal-panel { animation: modal-pop .4s cubic-bezier(.22,1,.36,1) both; }
        }
      `}</style>

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        tabIndex={-1}
        className="modal-panel relative max-h-[90dvh] w-full overflow-y-auto rounded-t-[2rem] bg-white p-6 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.5)] outline-none sm:max-w-lg sm:rounded-[2rem] sm:p-8"
      >
        {/* Handle: petunjuk visual bottom sheet di mobile */}
        <div
          aria-hidden="true"
          className="mx-auto mb-5 h-1 w-10 rounded-full bg-stone-200 sm:hidden"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-stone-200 hover:text-stone-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-800 sm:right-6 sm:top-6"
        >
          <CloseIcon className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="pr-12">
          <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800">
            <span aria-hidden="true" className="h-px w-6 bg-emerald-800/60" />
            {cls.type} · {cls.level}
          </p>
          <h2
            id={titleId}
            className="mt-3 font-serif text-3xl leading-tight text-stone-900 sm:text-4xl"
          >
            {cls.name}
          </h2>
        </div>

        {/* Detail */}
        <dl className="mt-7 grid grid-cols-2 gap-3">
          <Detail label="Time">{cls.time}</Detail>
          <Detail label="Duration">{cls.duration} minutes</Detail>
          <Detail label="Instructor">
            {instructor?.name ?? "To be announced"}
          </Detail>
          <Detail label="Price" accent>
            {formatPrice(cls.price)}
          </Detail>
        </dl>

        {/* Status */}
        <p
          id={descId}
          className={`mt-5 rounded-2xl px-4 py-3 text-center text-sm leading-relaxed ${
            isFull
              ? "bg-stone-100 text-stone-600"
              : "bg-emerald-50 text-stone-700"
          }`}
        >
          {isFull ? (
            "This class is fully booked. Join the waitlist to be notified."
          ) : (
            <>
              <span className="font-semibold text-emerald-800">
                {cls.spots} spot{cls.spots !== 1 ? "s" : ""}
              </span>{" "}
              remaining — reserve yours now.
            </>
          )}
        </p>

        {/* CTA: waitlist sekarang bisa diklik (versi lama: button disabled, jadi mustahil bergabung) */}
        <div className="mt-6">
          {onBook ? (
            <button
              type="button"
              onClick={() => onBook(cls)}
              className={ctaClass}
            >
              {ctaLabel}
            </button>
          ) : (
            <a
              href={cls.href ?? (isFull ? "#waitlist" : "#book")}
              className={ctaClass}
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
