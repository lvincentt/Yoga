// src/components/yoga/HeroSection.jsx
// Tailwind only, tanpa dependency tambahan.

const DEFAULTS = {
  eyebrow: "Yoga · Breathwork · Stillness",
  titleTop: "Move with",
  titleAccent: "intention.",
  description:
    "Kelas kecil di ruang yang tenang, untuk kamu yang ingin bergerak lebih pelan, bernapas lebih dalam, dan pulang dengan kepala yang lebih ringan.",
  primaryCta: { label: "Begin your journey", href: "#join" },
  secondaryCta: { label: "View schedule", href: "#schedule" },
  image: {
    src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80",
    alt: "Seseorang berlatih yoga di studio yang tenang dengan cahaya alami",
  },
  stats: [
    { value: "8", label: "Murid per kelas" },
    { value: "12+", label: "Kelas tiap minggu" },
    { value: "4.9", label: "Rating murid" },
  ],
  nextClass: { title: "Vinyasa Flow", time: "Hari ini · 17:30" },
};

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

export default function HeroSection(props) {
  const {
    eyebrow,
    titleTop,
    titleAccent,
    description,
    primaryCta,
    secondaryCta,
    image,
    stats,
    nextClass,
  } = { ...DEFAULTS, ...props };

  return (
    <section
      aria-labelledby="hero-heading"
      // ✅ min-h-screen di SECTION (bukan cuma grid) + pakai dvh untuk mobile browser bar
      className="relative isolate flex min-h-screen min-h-[100dvh] flex-col overflow-hidden bg-[#f6f2ea] text-stone-900"
    >
      {/* Animasi: hanya jalan kalau user tidak minta reduced motion */}
      <style>{`
        @keyframes hero-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes hero-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes hero-breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.06); } }
        @media (prefers-reduced-motion: no-preference) {
          .hero-rise { opacity: 0; animation: hero-rise .9s cubic-bezier(.22,1,.36,1) forwards; }
          .hero-fade { opacity: 0; animation: hero-fade 1.2s ease-out forwards; }
          .hero-breathe { animation: hero-breathe 9s ease-in-out infinite; }
        }
      `}</style>

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_85%_20%,rgba(163,177,138,0.28),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_10%_90%,rgba(214,181,140,0.25),transparent_70%)]" />
        <div className="hero-breathe absolute -right-32 top-10 hidden h-[34rem] w-[34rem] rounded-full border border-stone-900/5 md:block" />
        <div className="hero-breathe absolute -right-10 top-32 hidden h-[24rem] w-[24rem] rounded-full border border-stone-900/5 [animation-delay:-3s] md:block" />
      </div>

      {/* ✅ Grid jadi flex-1 supaya mengisi sisa tinggi section */}
      <div className="mx-auto flex w-full max-w-6xl flex-1 items-center px-5 sm:px-8">
        <div className="grid w-full items-center gap-12 py-24 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          {/* ===== Gambar ===== */}
          <div className="hero-fade relative order-1 mx-auto w-full max-w-sm md:order-2 md:max-w-none">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-stone-200 shadow-[0_30px_80px_-30px_rgba(60,70,50,0.45)] ring-1 ring-stone-900/5">
              <img
                src={image.src}
                alt={image.alt}
                width={1200}
                height={1500}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-stone-900/25 via-transparent to-transparent"
              />
            </div>

            <div className="hero-rise absolute -bottom-5 left-0 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 p-3 pr-5 shadow-xl shadow-stone-900/10 backdrop-blur-md [animation-delay:600ms] sm:-left-6 md:p-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-800 text-emerald-50 md:h-11 md:w-11">
                <CalendarIcon className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[11px] font-medium uppercase tracking-widest text-stone-500">
                  Kelas berikutnya
                </p>
                <p className="mt-0.5 text-sm font-semibold text-stone-900">
                  {nextClass.title}
                </p>
                <p className="text-xs text-stone-500">{nextClass.time}</p>
              </div>
            </div>
          </div>

          {/* ===== Teks ===== */}
          <div className="order-2 text-center md:order-1 md:text-left">
            <p className="hero-rise inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
              <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
              {eyebrow}
            </p>

            <h1
              id="hero-heading"
              className="hero-rise mt-6 font-serif text-[2.9rem] leading-[1.02] tracking-tight [animation-delay:100ms] sm:text-6xl lg:text-7xl"
            >
              <span className="block text-stone-900">{titleTop}</span>
              <span className="block italic text-emerald-800">
                {titleAccent}
              </span>
            </h1>

            <p className="hero-rise mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-600 [animation-delay:200ms] md:mx-0 md:text-lg">
              {description}
            </p>

            <div className="hero-rise mx-auto mt-9 flex max-w-md flex-col gap-3 [animation-delay:300ms] sm:max-w-none sm:flex-row sm:justify-center md:justify-start">
              <a
                href={primaryCta.href}
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-emerald-800 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-900/20 transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-900 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 md:text-base"
              >
                {primaryCta.label}
                <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center rounded-full border border-stone-900/15 bg-white/40 px-7 py-3.5 text-sm font-medium text-stone-800 backdrop-blur-sm transition duration-300 hover:border-emerald-800/40 hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800 md:text-base"
              >
                {secondaryCta.label}
              </a>
            </div>

            <dl className="hero-rise mx-auto mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-stone-900/10 pt-6 [animation-delay:400ms] md:mx-0">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd>
                    <span className="block font-serif text-2xl text-stone-900 sm:text-3xl">
                      {s.value}
                    </span>
                    <span className="mt-1 block text-[11px] leading-tight text-stone-500 sm:text-xs">
                      {s.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
