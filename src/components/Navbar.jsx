// src/components/yoga/Navbar.jsx
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Pricing", href: "/pricing" },
  { label: "Instructor", href: "/instructor" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Efek background saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cegah scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-50/80 backdrop-blur-md shadow-sm border-b border-stone-200/60"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Yoga Studio Home"
        >
          <span className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-emerald-500 text-white shadow-md group-hover:shadow-emerald-200 transition-shadow duration-300">
            <span className="text-lg">🧘</span>
          </span>
          <span className="font-serif text-xl tracking-tight text-stone-900">
            Sthira<span className="text-emerald-700">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-stone-600 hover:text-emerald-700 transition-colors duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                  after:bg-emerald-500 after:transition-all after:duration-300
                  hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#cta"
            className="group px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-sm rounded-full shadow-md hover:shadow-lg hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
          >
            <span>Book a Class</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-stone-200/50 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Menu</span>
          <div className="w-5 h-4 relative">
            <span
              className={`absolute left-0 w-5 h-0.5 bg-stone-800 rounded transition-all duration-300 ${
                menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 -translate-y-1/2 w-5 h-0.5 bg-stone-800 rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 w-5 h-0.5 bg-stone-800 rounded transition-all duration-300 ${
                menuOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-8 pt-2 bg-stone-50/95 backdrop-blur-md border-t border-stone-200/60">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 px-2 text-stone-700 hover:text-emerald-700 hover:bg-stone-100/60 rounded-lg transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-sm rounded-full shadow-md"
          >
            Book a Class
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
