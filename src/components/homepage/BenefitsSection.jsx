// src/components/yoga/BenefitsSection.jsx
// Kompatibel dengan data lama: { title, desc, icon, color }.
// Field opsional baru: href (tujuan "Learn more"). Kalau tidak ada, link tidak ditampilkan.
import { benefits } from "./yogaData";

export default function BenefitsSection({
  eyebrow = "Why practice with us",
  title = "A practice that",
  titleAccent = "nurtures.",
  description = "Pendekatan kami memadukan kebijaksanaan tradisional dengan pemahaman modern tentang gerak dan kesadaran diri.",
  items = benefits,
}) {
  return (
    <section
      aria-labelledby="benefits-heading"
      className="relative isolate overflow-hidden bg-[#fbf9f4] px-5 py-20 sm:px-8 md:py-32"
    >
      {/* Scroll-reveal: progressive enhancement, aman untuk browser yang belum support */}
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @supports (animation-timeline: view()) {
            .benefit-reveal {
              animation: benefit-in linear both;
              animation-timeline: view();
              animation-range: entry 0% entry 45%;
            }
            @keyframes benefit-in {
              from { opacity: 0; transform: translateY(28px); }
              to { opacity: 1; transform: none; }
            }
          }
        }
      `}</style>

      {/* Latar halus */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-stone-900/10 to-transparent" />
        <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-[radial-gradient(closest-side,rgba(163,177,138,0.22),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16 md:mb-20">
          <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-800 sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
            {eyebrow}
            <span aria-hidden="true" className="h-px w-8 bg-emerald-800/60" />
          </p>
          <h2
            id="benefits-heading"
            className="mt-5 font-serif text-4xl leading-[1.08] tracking-tight text-stone-900 sm:text-5xl"
          >
            {title}{" "}
            <span className="italic text-emerald-800">{titleAccent}</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            {description}
          </p>
        </div>

        {/* Cards */}
        <ul className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:gap-7">
          {items.map((item, i) => (
            <li key={item.title} className="benefit-reveal group relative flex">
              <article className="relative flex w-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-900/[0.07] bg-white p-6 shadow-sm shadow-stone-900/[0.03] transition duration-500 hover:-translate-y-1.5 hover:border-emerald-800/20 hover:shadow-2xl hover:shadow-emerald-900/10 sm:p-7 md:p-8">
                {/* Tint saat hover (pakai gradient lama kalau ada) */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 -z-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
                    item.color || "from-emerald-50 to-amber-50/60"
                  }`}
                />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between">
                    {/* Icon dalam bentuk arch, senada dengan hero */}
                    <span
                      aria-hidden="true"
                      className="flex h-14 w-12 items-center justify-center rounded-t-full rounded-b-xl bg-[#f1ece0] text-2xl ring-1 ring-stone-900/5 transition duration-500 group-hover:scale-105 group-hover:bg-white"
                    >
                      {item.icon}
                    </span>
                    <span
                      aria-hidden="true"
                      className="font-serif text-sm tabular-nums text-stone-400"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 font-serif text-2xl leading-snug text-stone-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-stone-600">
                    {item.desc}
                  </p>

                  {item.href && (
                    <a
                      href={item.href}
                      className="mt-7 inline-flex items-center gap-2 border-t border-stone-900/10 pt-5 text-xs font-medium uppercase tracking-[0.18em] text-emerald-800 outline-none after:absolute after:inset-0 after:content-[''] focus-visible:underline focus-visible:underline-offset-4"
                    >
                      Learn more
                      <svg
                        aria-hidden="true"
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
