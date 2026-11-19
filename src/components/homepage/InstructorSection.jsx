// src/components/yoga/InstructorSection.jsx
// All content can be overridden via props. `name` and `credentials` are optional:
// if not provided, that part isn't rendered (so there's no fabricated data).

const DEFAULTS = {
  eyebrow: "Lead instructor",
  title: "Meet your",
  titleAccent: "guide.",
  name: "", // e.g. "Maya Putri"
  bio: "With more than 8 years of teaching experience, our instructor focuses on sustainable movement, safe alignment, and breath-guided awareness.",
  quote: "Yoga is a lifelong conversation with your body — not a destination.",
  credentials: [], // e.g. ["RYT-500", "Prenatal Yoga", "Breathwork Facilitator"]
  years: 8,
  bioHref: "", // e.g. "/about"
  image: {
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80",
    alt: "Portrait of the lead yoga instructor in the studio",
  },
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

export default function InstructorSection(props) {
  const {
    eyebrow,
    title,
    titleAccent,
    name,
    bio,
    quote,
    credentials,
    years,
    bioHref,
    image,
  } = {
    ...DEFAULTS,
    ...props,
  };

  return (
    <section
      aria-labelledby="instructor-heading"
      className="relative isolate overflow-hidden bg-[#fbf9f4] px-5 py-20 sm:px-8 md:py-32"
    >
      <style>{`
        @keyframes instructor-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        @keyframes instructor-spin { to { transform: rotate(360deg); } }

        @media (prefers-reduced-motion: no-preference) {
          .instructor-float { animation: instructor-float 7s ease-in-out infinite; }
          .instructor-spin { animation: instructor-spin 40s linear infinite; }

          @supports (animation-timeline: view()) {
            /* Shared reveal keyframes */
            @keyframes instructor-in {
              from { opacity: 0; transform: translateY(28px); }
              to   { opacity: 1; transform: none; }
            }

            /* Photo column — appears first */
            .instructor-photo-reveal {
              animation: instructor-in linear both;
              animation-timeline: view();
              animation-range: entry 0% entry 45%;
            }

            /* "Years" badge — follows the photo slightly */
            .instructor-badge-reveal {
              animation: instructor-in linear both;
              animation-timeline: view();
              animation-range: entry 8% entry 52%;
            }

            /* Content column — starts a touch later than the photo */
            .instructor-content-reveal {
              animation: instructor-in linear both;
              animation-timeline: view();
              animation-range: entry 6% entry 52%;
            }

            /* Individual content elements — stagger down the column.
               We use nth-of-type inside the content block so each line
               reveals as the user scrolls through it. */
            .instructor-line-reveal {
              animation: instructor-in linear both;
              animation-timeline: view();
              animation-range: entry 0% entry 45%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(1) {
              animation-range: entry 8%  entry 53%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(2) {
              animation-range: entry 12% entry 57%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(3) {
              animation-range: entry 16% entry 61%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(4) {
              animation-range: entry 20% entry 65%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(5) {
              animation-range: entry 24% entry 69%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(6) {
              animation-range: entry 28% entry 73%;
            }
            .instructor-content-reveal .instructor-line-reveal:nth-child(7) {
              animation-range: entry 32% entry 77%;
            }
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-900/10 to-transparent" />
        <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(163,177,138,0.22),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        {/* ===== Image (on top on mobile, on the left on desktop) ===== */}
        <div className="instructor-photo-reveal relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            aria-hidden="true"
            className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-emerald-800/25 md:translate-x-6 md:translate-y-6"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200 shadow-[0_30px_80px_-30px_rgba(60,70,50,0.45)] ring-1 ring-stone-900/5">
            <img
              src={image.src}
              alt={image.alt}
              width={1200}
              height={1500}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent"
            />
          </div>

          {/* Years-of-experience badge — own reveal, follows photo */}
          <div className="instructor-badge-reveal absolute -bottom-6 -right-2 flex h-28 w-28 items-center justify-center sm:-right-6 sm:h-32 sm:w-32">
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute inset-0 h-full w-full text-emerald-800/70"
            >
              <defs>
                <path
                  id="instructor-circle"
                  d="M50,50 m-40,0 a40,40 0 1,1 80,0 a40,40 0 1,1 -80,0"
                />
              </defs>
              <circle
                cx="50"
                cy="50"
                r="49"
                className="fill-[#f6f2ea] stroke-stone-900/10"
                strokeWidth="0.5"
              />
              <text
                className="fill-current text-[8.5px] font-medium uppercase"
                letterSpacing="2.4"
              >
                <textPath href="#instructor-circle">
                  Mindful teaching · Mindful teaching ·
                </textPath>
              </text>
            </svg>
            <div className="relative text-center leading-none">
              <span className="block font-serif text-3xl text-stone-900 sm:text-4xl">
                {years}+
              </span>
              <span className="mt-1 block text-[10px] uppercase tracking-widest text-stone-500">
                years
              </span>
            </div>
          </div>
        </div>

        {/* ===== Content ===== */}
        <div className="instructor-content-reveal text-center md:text-left">
          <p className="instructor-line-reveal inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
            {eyebrow}
          </p>

          <h2
            id="instructor-heading"
            className="instructor-line-reveal mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-stone-900 sm:text-5xl"
          >
            {title}{" "}
            <span className="italic text-emerald-800">{titleAccent}</span>
          </h2>

          {name && (
            <p className="instructor-line-reveal mt-4 font-serif text-xl text-stone-700">
              {name}
            </p>
          )}

          <p className="instructor-line-reveal mx-auto mt-6 max-w-md text-base leading-relaxed text-stone-600 md:mx-0 md:text-lg">
            {bio}
          </p>

          {credentials.length > 0 && (
            <ul className="instructor-line-reveal mx-auto mt-6 flex max-w-md flex-wrap justify-center gap-2 md:mx-0 md:justify-start">
              {credentials.map((c) => (
                <li
                  key={c}
                  className="rounded-full border border-stone-900/10 bg-white px-3.5 py-1.5 text-xs font-medium text-stone-700"
                >
                  {c}
                </li>
              ))}
            </ul>
          )}

          {/* Pull quote */}
          <figure className="instructor-line-reveal relative mx-auto mt-10 max-w-md md:mx-0">
            <span
              aria-hidden="true"
              className="absolute -top-5 left-0 font-serif text-6xl leading-none text-emerald-800/25"
            >
              "
            </span>
            <blockquote className="border-l border-emerald-800/30 pl-6 text-left font-serif text-xl italic leading-snug text-stone-700 sm:text-2xl">
              {quote}
            </blockquote>
          </figure>

          {bioHref && (
            <div className="instructor-line-reveal mt-9">
              <a
                href={bioHref}
                className="group inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
              >
                <span className="border-b border-emerald-800/30 pb-0.5 transition-colors group-hover:border-emerald-800">
                  Read full bio
                </span>
                <ArrowIcon className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
