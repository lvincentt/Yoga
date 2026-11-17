// src/components/yoga/TestimonialSection.jsx
// Compatible with legacy data:
// testimonials: { id, quote, name, role, location, since, rating, avatar }
// stats: { value, suffix, label }
import { useEffect, useState } from "react";
import {
  testimonials as defaultTestimonials,
  stats as defaultStats,
} from "./yogaData";

const AUTOPLAY_MS = 6500;

function Stars({ count = 5 }) {
  return (
    <div
      role="img"
      aria-label={`Rated ${count} out of 5`}
      className="flex items-center gap-0.5 text-amber-500"
    >
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          aria-hidden="true"
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ChevronIcon({ dir = "right", className = "" }) {
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
        d={dir === "right" ? "M9 5l7 7-7 7" : "M15 19l-7-7 7-7"}
      />
    </svg>
  );
}

export default function TestimonialSection({
  eyebrow = "Community voices",
  title = "Voices from our",
  titleAccent = "sanctuary.",
  description = "Real stories from the people who practice with us.",
  testimonials = defaultTestimonials,
  stats = defaultStats,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userStopped, setUserStopped] = useState(false); // stops permanently after the user interacts
  const [hovering, setHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const total = testimonials.length;
  const active = testimonials[activeIndex];
  const autoplay = !userStopped && !hovering && !reducedMotion && total > 1;

  // Respect prefers-reduced-motion: no autoplay at all
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Autoplay: pause on hover/focus, restart cleanly when state changes
  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(
      () => setActiveIndex((i) => (i + 1) % total),
      AUTOPLAY_MS,
    );
    return () => clearTimeout(t);
  }, [autoplay, activeIndex, total]);

  const goTo = (i) => {
    setActiveIndex((i + total) % total);
    setUserStopped(true);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") goTo(activeIndex + 1);
    if (e.key === "ArrowLeft") goTo(activeIndex - 1);
  };

  if (!active) return null;

  const others = testimonials.filter((_, i) => i !== activeIndex).slice(0, 3);

  return (
    <section
      aria-labelledby="testimonial-heading"
      className="relative isolate overflow-hidden bg-[#f6f2ea] px-5 py-20 sm:px-8 md:py-32"
    >
      <style>{`
        @keyframes testi-in { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        @media (prefers-reduced-motion: no-preference) {
          .testi-in { animation: testi-in .7s cubic-bezier(.22,1,.36,1) both; }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-900/10 to-transparent" />
        <div className="absolute left-1/2 top-0 h-[28rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(163,177,138,0.22),transparent)]" />
      </div>

      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
            {eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
          </p>
          <h2
            id="testimonial-heading"
            className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-stone-900 sm:text-5xl"
          >
            {title}{" "}
            <span className="italic text-emerald-800">{titleAccent}</span>
          </h2>
          <p className="mt-5 text-base text-stone-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Main carousel */}
        <div
          role="group"
          aria-roledescription="carousel"
          aria-label="Testimonials"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={() => setHovering(true)}
          onBlur={() => setHovering(false)}
          className="relative rounded-[2rem] border border-stone-900/[0.07] bg-white p-6 shadow-[0_30px_80px_-40px_rgba(60,70,50,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-emerald-800 sm:p-10 md:p-14"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-6 top-2 font-serif text-8xl leading-none text-emerald-800/15 sm:left-10 sm:text-9xl"
          >
            "
          </span>

          <div className="relative flex items-center justify-between">
            <Stars count={active.rating} />
            <span
              aria-hidden="true"
              className="font-serif text-sm tabular-nums tracking-widest text-stone-400"
            >
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          <div
            // aria-live "polite" only when the user changes the slide, not during autoplay
            aria-live={autoplay ? "off" : "polite"}
            aria-atomic="true"
            role="group"
            aria-roledescription="slide"
            aria-label={`${activeIndex + 1} of ${total}`}
            key={active.id}
            className="testi-in"
          >
            <figure>
              <blockquote className="mt-7 font-serif text-xl italic leading-relaxed text-stone-800 sm:text-2xl md:text-[1.75rem] md:leading-[1.5]">
                {active.quote}
              </blockquote>

              <figcaption className="mt-9 flex items-center gap-4">
                <img
                  src={active.avatar}
                  alt=""
                  width={64}
                  height={64}
                  loading="lazy"
                  decoding="async"
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-white shadow-md sm:h-16 sm:w-16"
                />
                <div className="min-w-0 leading-tight">
                  <p className="truncate font-semibold text-stone-900">
                    {active.name}
                  </p>
                  <p className="mt-1 truncate text-sm text-stone-500">
                    {[active.role, active.location].filter(Boolean).join(" · ")}
                  </p>
                  {active.since && (
                    <p className="mt-1 text-xs font-medium text-emerald-800">
                      {active.since}
                    </p>
                  )}
                </div>
              </figcaption>
            </figure>
          </div>

          {/* Controls */}
          <div className="relative mt-8 flex items-center justify-between border-t border-stone-900/[0.07] pt-6">
            <div
              className="flex items-center gap-1"
              role="group"
              aria-label="Choose testimonial"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-current={i === activeIndex}
                  // 24px touch target, visual dot stays small
                  className="group flex h-6 items-center px-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                >
                  <span
                    className={`block h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex
                        ? "w-8 bg-emerald-800"
                        : "w-2 bg-stone-300 group-hover:bg-stone-400"
                    }`}
                  />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => goTo(activeIndex - 1)}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-900/15 text-stone-600 transition duration-300 hover:border-emerald-800/40 hover:bg-emerald-50 hover:text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              >
                <ChevronIcon dir="left" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => goTo(activeIndex + 1)}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-800 text-white shadow-md shadow-emerald-900/15 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
              >
                <ChevronIcon dir="right" className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats: a dl with thin dividers, not cards */}
        {stats?.length > 0 && (
          <dl className="mt-14 grid grid-cols-2 gap-y-8 md:mt-20 md:grid-cols-4 md:divide-x md:divide-stone-900/10">
            {stats.map((s) => (
              <div key={s.label} className="px-4 text-center">
                <dd className="font-serif text-4xl text-stone-900 sm:text-5xl">
                  {s.value}
                  {s.suffix && (
                    <span className="ml-0.5 text-emerald-800">{s.suffix}</span>
                  )}
                </dd>
                <dt className="mt-2 text-xs uppercase tracking-[0.16em] text-stone-500">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        )}

        {/* Other testimonials */}
        {others.length > 0 && (
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 md:mt-20 md:grid-cols-3">
            {others.map((t) => (
              <li key={t.id} className="flex">
                <button
                  type="button"
                  onClick={() => goTo(testimonials.indexOf(t))}
                  className="group flex w-full flex-col rounded-2xl border border-stone-900/[0.07] bg-white/70 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-emerald-800/20 hover:bg-white hover:shadow-xl hover:shadow-emerald-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
                >
                  <Stars count={t.rating} />
                  <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600">
                    "{t.quote}"
                  </p>
                  <span className="mt-4 flex items-center gap-2.5 border-t border-stone-900/[0.07] pt-4">
                    <img
                      src={t.avatar}
                      alt=""
                      width={28}
                      height={28}
                      loading="lazy"
                      decoding="async"
                      className="h-7 w-7 rounded-full object-cover"
                    />
                    <span className="truncate text-xs text-stone-500 transition-colors group-hover:text-emerald-800">
                      {t.name}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
