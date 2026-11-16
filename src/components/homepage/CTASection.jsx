// src/components/yoga/CTASection.jsx
// Semua teks dan link bisa di-override lewat props.

const DEFAULTS = {
  eyebrow: "Begin your journey",
  title: "Your first step",
  titleAccent: "towards balance.",
  description:
    "Take a deep breath and begin. Your mat awaits in our peaceful studio, where every journey starts with a single moment of intention.",
  primaryCta: { label: "Book your first class", href: "#schedule" },
  secondaryCta: { label: "Schedule a tour", href: "/contact" },
  note: "First-time guests enjoy 20% off",
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

export default function CTASection(props) {
  const {
    eyebrow,
    title,
    titleAccent,
    description,
    primaryCta,
    secondaryCta,
    note,
  } = {
    ...DEFAULTS,
    ...props,
  };

  return (
    <section
      aria-labelledby="cta-heading"
      className="relative bg-[#f6f2ea] px-5 py-20 sm:px-8 md:py-28"
    >
      <style>{`
        @keyframes cta-breathe { 0%,100% { transform: translate(-50%,-50%) scale(1); } 50% { transform: translate(-50%,-50%) scale(1.05); } }
        @media (prefers-reduced-motion: no-preference) {
          .cta-ring { animation: cta-breathe 10s ease-in-out infinite; }
        }
      `}</style>

      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-emerald-950 px-6 py-16 text-center shadow-[0_40px_100px_-40px_rgba(6,40,30,0.7)] sm:rounded-[2.5rem] sm:px-12 sm:py-20 md:py-24">
        {/* Dekorasi: cincin konsentris + cahaya hangat, senada dengan lingkaran di hero */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,rgba(163,177,138,0.28),transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_90%_100%,rgba(214,181,140,0.18),transparent_70%)]" />
          <div className="cta-ring absolute left-1/2 top-1/2 h-[34rem] w-[34rem] rounded-full border border-white/[0.06] sm:h-[44rem] sm:w-[44rem]" />
          <div className="cta-ring absolute left-1/2 top-1/2 h-[24rem] w-[24rem] rounded-full border border-white/[0.07] [animation-delay:-4s] sm:h-[30rem] sm:w-[30rem]" />
          <div className="cta-ring absolute left-1/2 top-1/2 h-[14rem] w-[14rem] rounded-full border border-white/[0.08] [animation-delay:-7s] sm:h-[17rem] sm:w-[17rem]" />
        </div>

        <div className="relative mx-auto max-w-2xl">
          <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200 sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-200/50" />
            {eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-emerald-200/50" />
          </p>

          <h2
            id="cta-heading"
            className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {title}{" "}
            <span className="block italic text-emerald-200">{titleAccent}</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-emerald-50/80 md:text-lg">
            {description}
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href={primaryCta.href}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#f6f2ea] px-8 py-4 text-sm font-semibold text-emerald-950 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base"
            >
              {primaryCta.label}
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href={secondaryCta.href}
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 text-sm font-medium text-white transition duration-300 hover:border-white/60 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:text-base"
            >
              {secondaryCta.label}
            </a>
          </div>

          {note && (
            <p className="mt-8 inline-flex items-center gap-2 text-sm text-emerald-100/70">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-amber-300"
              />
              {note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
