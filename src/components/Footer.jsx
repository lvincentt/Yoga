// src/components/yoga/Footer.jsx
// Edit data studio di konstanta di bawah ini. Props opsional: onSubscribe(email) -> Promise.
import { useEffect, useId, useState } from "react";

const BRAND = "Sthira";
const TAGLINE =
  "A sanctuary where movement meets mindfulness, and every breath brings you closer to balance.";

const CONTACT = {
  address: "Jl. Kemang Raya No. 42, Jakarta Selatan",
  phone: "+62 812 3456 7890",
  phoneHref: "tel:+6281234567890",
  email: "hello@sthirayoga.id",
};

const HOURS = [
  { days: "Mon–Fri", time: "06:00–21:00" },
  { days: "Sat", time: "07:00–20:00" },
  { days: "Sun", time: "08:00–18:00" },
];

// Privacy & Terms dipindah ke bottom bar (sebelumnya muncul dua kali di footer)
const FOOTER_LINKS = {
  Studio: [
    { label: "About", href: "/about" },
    { label: "Instructors", href: "/instructors" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ],
  Practice: [
    { label: "Classes", href: "/classes" },
    { label: "Schedule", href: "/schedule" },
    { label: "Pricing", href: "/pricing" },
    { label: "Events", href: "/events" },
  ],
  Resources: [
    { label: "Journal", href: "/journal" },
    { label: "FAQ", href: "/faq" },
  ],
};

// Ganti href dengan akun asli studio sebelum launch
const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  },
  {
    label: "Spotify",
    href: "https://spotify.com",
    path: "M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z",
  },
];

const linkFocus =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200";

function BrandMark({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="19" className="fill-[#f6f2ea]" />
      {/* Arch + matahari kecil: senada dengan bingkai arch di hero */}
      <path
        d="M12 29V19a8 8 0 0 1 16 0v10"
        stroke="#064e3b"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <circle cx="20" cy="19" r="2.5" fill="#064e3b" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.657 16.657 13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-emerald-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5Z"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-emerald-300"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 8 7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z"
      />
    </svg>
  );
}

export default function Footer({ onSubscribe }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const emailId = useId();

  // Reset pesan sukses setelah 5 detik; timer dibersihkan kalau komponen unmount
  useEffect(() => {
    if (status !== "success") return;
    const t = setTimeout(() => setStatus("idle"), 5000);
    return () => clearTimeout(t);
  }, [status]);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || status === "loading") return;

    setStatus("loading");
    try {
      await onSubscribe?.(value); // sambungkan ke Mailchimp / ConvertKit / API kamu
      setEmail("");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="relative isolate overflow-hidden bg-emerald-950 text-emerald-50/75">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-[radial-gradient(55%_50%_at_20%_0%,rgba(163,177,138,0.18),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_90%_100%,rgba(214,181,140,0.10),transparent_70%)]" />
        <div className="absolute -right-24 top-1/3 h-[30rem] w-[30rem] rounded-full border border-white/[0.04]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* NEWSLETTER */}
        <section
          aria-labelledby="newsletter-heading"
          className="border-b border-white/10 pb-14 pt-16 md:pt-20"
        >
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <div>
              <h2
                id="newsletter-heading"
                className="font-serif text-4xl leading-tight text-white"
              >
                Stay in the{" "}
                <span className="italic text-emerald-200">flow.</span>
              </h2>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-emerald-50/75">
                Weekly inspiration, new class announcements, and quiet reminders
                to breathe. No spam — just intention.
              </p>
            </div>

            <div>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <label htmlFor={emailId} className="sr-only">
                  Email address
                </label>
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-describedby={`${emailId}-status`}
                  className="min-w-0 flex-1 rounded-full border border-white/20 bg-white/[0.06] px-5 py-3.5 text-base text-white placeholder-emerald-100/50 outline-none transition duration-300 focus:border-emerald-200/70 focus:bg-white/10 focus:ring-4 focus:ring-emerald-200/10"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="whitespace-nowrap rounded-full bg-[#f6f2ea] px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-0.5 hover:bg-white disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  {status === "loading" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {/* Status diumumkan ke pembaca layar; versi lama hanya mengganti teks tombol */}
              <p
                id={`${emailId}-status`}
                role="status"
                aria-live="polite"
                className={`mt-3 min-h-[1.25rem] text-sm ${
                  status === "error" ? "text-amber-200" : "text-emerald-200"
                }`}
              >
                {status === "success" && "Thank you — you're on the list."}
                {status === "error" &&
                  "Something went wrong. Please try again."}
              </p>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-5 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 space-y-6">
            <a
              href="/"
              className={`inline-flex items-center gap-3 ${linkFocus}`}
              aria-label={`${BRAND} home`}
            >
              <BrandMark className="h-10 w-10" />
              <span className="font-serif text-2xl tracking-tight text-white">
                {BRAND}
                <span className="text-emerald-200">.</span>
              </span>
            </a>
            <p className="max-w-xs text-[15px] leading-relaxed">{TAGLINE}</p>

            <address className="space-y-3 text-sm not-italic">
              <p className="flex items-start gap-2.5">
                <PinIcon />
                {CONTACT.address}
              </p>
              <p>
                <a
                  href={CONTACT.phoneHref}
                  className={`inline-flex items-center gap-2.5 transition-colors hover:text-white ${linkFocus}`}
                >
                  <PhoneIcon />
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className={`inline-flex items-center gap-2.5 transition-colors hover:text-white ${linkFocus}`}
                >
                  <MailIcon />
                  {CONTACT.email}
                </a>
              </p>
            </address>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <nav key={category} aria-label={category}>
              <h3 className="mb-5 text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-200">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`group relative inline-block text-sm transition-colors duration-300 hover:text-white ${linkFocus}`}
                    >
                      {link.label}
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-0.5 left-0 h-px w-0 bg-emerald-200 transition-all duration-300 group-hover:w-full"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* HOURS + SOCIALS */}
        <div className="flex flex-col gap-8 border-t border-white/10 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="sr-only">Opening hours</h3>
            <dl className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              {HOURS.map((h) => (
                <div key={h.days}>
                  <dt className="text-[11px] font-medium uppercase tracking-[0.18em] text-emerald-200">
                    {h.days}
                  </dt>
                  <dd className="mt-1 tabular-nums">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="flex items-center gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] text-emerald-50/80 transition duration-300 hover:-translate-y-0.5 hover:border-[#f6f2ea] hover:bg-[#f6f2ea] hover:text-emerald-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-200"
                >
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 py-6 text-xs text-emerald-50/70 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND} Yoga Studio. All rights
            reserved.
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <a
                href="/privacy"
                className={`transition-colors hover:text-white ${linkFocus}`}
              >
                Privacy
              </a>
            </li>
            <li aria-hidden="true" className="text-white/20">
              ·
            </li>
            <li>
              <a
                href="/terms"
                className={`transition-colors hover:text-white ${linkFocus}`}
              >
                Terms
              </a>
            </li>
            <li aria-hidden="true" className="text-white/20">
              ·
            </li>
            <li>Made in Jakarta</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
