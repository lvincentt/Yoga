// src/components/yoga/Footer.jsx
import { useState } from "react";

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
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281234567890",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://spotify.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-stone-950 text-stone-300 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* NEWSLETTER */}
        <div className="pt-16 pb-12 border-b border-emerald-800/40">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-3xl text-white mb-3">
                Stay in the <span className="text-emerald-400">flow</span>
              </h3>
              <p className="text-emerald-100/60 text-sm leading-relaxed max-w-md">
                Weekly inspiration, new class announcements, and quiet reminders
                to breathe. No spam — just intention.
              </p>
            </div>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row gap-3"
            >
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full px-5 py-3.5 bg-emerald-950/50 border border-emerald-800/60 rounded-full text-white placeholder-emerald-200/40 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-emerald-500 to-emerald-400 text-emerald-950 rounded-full font-medium text-sm shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
              >
                {subscribed ? "✓ Subscribed" : "Subscribe"}
              </button>
            </form>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="py-14 grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
          {/* Brand (2 cols) */}
          <div className="col-span-2 space-y-5">
            <a href="/" className="inline-flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 flex items-center justify-center text-emerald-950 text-lg shadow-lg">
                🧘
              </span>
              <span className="font-serif text-2xl text-white tracking-tight">
                Sthira<span className="text-emerald-400">.</span>
              </span>
            </a>
            <p className="text-sm text-emerald-100/60 leading-relaxed max-w-xs">
              A sanctuary where movement meets mindfulness, and every breath
              brings you closer to balance.
            </p>

            {/* Address */}
            <div className="text-sm text-emerald-100/60 space-y-2 pt-2">
              <p className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 mt-0.5 text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Jl. Kemang Raya No. 42, Jakarta Selatan
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +62 812 3456 7890
              </p>
              <p className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-emerald-400 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@sthirayoga.id
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs tracking-widest text-emerald-400 font-medium mb-4 uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-emerald-100/60 hover:text-white transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-emerald-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SOCIALS + HOURS */}
        <div className="py-8 border-t border-emerald-800/40 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Hours */}
          <div className="text-xs text-emerald-100/50 space-y-1">
            <p>
              <span className="text-emerald-400 font-medium">Mon–Fri</span>{" "}
              06.00–21.00
            </p>
            <p>
              <span className="text-emerald-400 font-medium">Sat</span>{" "}
              07.00–20.00
            </p>
            <p>
              <span className="text-emerald-400 font-medium">Sun</span>{" "}
              08.00–18.00
            </p>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center text-emerald-100/70 hover:text-emerald-950 hover:bg-emerald-400 hover:border-emerald-400 hover:-translate-y-0.5 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="py-6 border-t border-emerald-800/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-emerald-100/40">
          <p>
            © {new Date().getFullYear()} Sthira Yoga Studio. All rights
            reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="hover:text-emerald-300 transition-colors"
            >
              Privacy
            </a>
            <span className="text-emerald-800">·</span>
            <a
              href="/terms"
              className="hover:text-emerald-300 transition-colors"
            >
              Terms
            </a>
            <span className="text-emerald-800">·</span>
            <span className="flex items-center gap-1.5">
              Made with
              <span className="text-emerald-400">🧘</span>
              in Jakarta
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
