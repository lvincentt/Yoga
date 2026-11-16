// src/components/yoga/TestimonialSection.jsx
import { useState, useEffect } from "react";
import { testimonials, stats } from "./yogaData";

function Stars({ count = 5 }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function QuoteMark({ className = "" }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
    </svg>
  );
}

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const active = testimonials[activeIndex];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const goTo = (index) => {
    setActiveIndex(index);
    setIsAutoPlay(false);
  };

  const next = () => goTo((activeIndex + 1) % testimonials.length);
  const prev = () =>
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50 via-white to-stone-50" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-emerald-700 font-medium mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            COMMUNITY VOICES
          </span>
          <h2 className="text-4xl md:text-5xl font-serif mb-4 text-stone-900 leading-tight">
            Voices from Our{" "}
            <span className="text-emerald-700 relative inline-block">
              Sanctuary
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-emerald-300"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M2 8 Q 50 2, 100 6 T 198 5"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>
          <p className="text-stone-600">
            Real stories from people who practice with us
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="relative mb-12">
          {/* Decorative quote marks */}
          <QuoteMark className="absolute -top-8 -left-4 w-20 h-20 text-emerald-200/60 rotate-180" />
          <QuoteMark className="absolute -bottom-8 -right-4 w-20 h-20 text-emerald-200/60" />

          <div className="relative bg-white/90 backdrop-blur-sm rounded-[2rem] p-8 md:p-14 shadow-xl shadow-stone-200/50 border border-stone-100">
            {/* Rating */}
            <div className="flex items-center justify-between mb-8">
              <Stars count={active.rating} />
              <span className="text-xs tracking-widest text-stone-400 font-medium">
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>

            {/* Quote — key trigger untuk animasi fade saat ganti */}
            <blockquote
              key={active.id}
              className="text-xl md:text-2xl font-serif italic text-stone-700 leading-relaxed mb-10 animate-fadeSlide"
            >
              “{active.quote}”
            </blockquote>

            {/* Author */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={active.avatar}
                    alt={active.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center ring-2 ring-white">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{active.name}</p>
                  <p className="text-sm text-stone-500">
                    {active.role} · {active.location}
                  </p>
                  <p className="text-xs text-emerald-700 mt-0.5 font-medium">
                    {active.since}
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-11 h-11 rounded-full bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Previous testimonial"
                >
                  <svg
                    className="w-5 h-5 text-stone-500 group-hover:text-emerald-700 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={next}
                  className="w-11 h-11 rounded-full bg-emerald-700 hover:bg-emerald-800 shadow-md hover:shadow-lg hover:shadow-emerald-200 flex items-center justify-center transition-all duration-300 group"
                  aria-label="Next testimonial"
                >
                  <svg
                    className="w-5 h-5 text-white transform group-hover:translate-x-0.5 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dots + mini thumbnails */}
        <div className="flex items-center justify-center gap-2 mb-16">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === activeIndex
                  ? "w-8 h-2 bg-emerald-600"
                  : "w-2 h-2 bg-stone-300 hover:bg-stone-400"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-100"
            >
              <p className="font-serif text-3xl text-stone-900 mb-1">
                {stat.value}
                {stat.suffix && (
                  <span className="text-amber-400 ml-0.5">{stat.suffix}</span>
                )}
              </p>
              <p className="text-xs text-stone-500 tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Mini testimonials — social proof berlapis */}
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials
            .filter((_, i) => i !== activeIndex)
            .slice(0, 3)
            .map((t) => (
              <button
                key={t.id}
                onClick={() => goTo(testimonials.indexOf(t))}
                className="text-left p-5 bg-white/70 backdrop-blur-sm rounded-2xl border border-stone-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <Stars count={t.rating} />
                <p className="text-sm text-stone-600 leading-relaxed mt-3 line-clamp-3">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-stone-100">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-7 h-7 rounded-full object-cover"
                  />
                  <span className="text-xs text-stone-500 group-hover:text-emerald-700 transition-colors">
                    {t.name}
                  </span>
                </div>
              </button>
            ))}
        </div>
      </div>
    </section>
  );
}
