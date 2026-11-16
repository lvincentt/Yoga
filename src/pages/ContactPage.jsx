// src/pages/ContactPage.jsx
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";
import MapEmbed from "../components/contact/MapEmbed";
import QuickFaq from "../components/contact/QuickFaq";

export default function ContactPage() {
  return (
    <div className="w-full bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans">
      {/* HERO */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-stone-50/30 to-amber-50/20" />
        <div className="absolute top-1/3 -left-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-emerald-700 font-medium">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            GET IN TOUCH
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl font-serif leading-tight tracking-tight text-stone-900">
            We'd Love to <span className="text-emerald-700">Hear</span> From You
          </h1>
          <p className="mt-6 text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Questions about classes, memberships, or private sessions? Reach out
            — we're here to help you find your way onto the mat.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-8">
          {/* Form (left, wider) */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          {/* Info (right) */}
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-serif text-stone-900 mb-2">
                Find Us
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
            </div>
            <p className="text-sm text-stone-500 hidden sm:block">
              Free parking available on-site
            </p>
          </div>
          <MapEmbed />
        </div>
      </section>

      {/* QUICK FAQ */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif text-stone-900 mb-3">
              Before You Ask
            </h2>
            <p className="text-stone-600">
              A few answers to the most common questions.
            </p>
          </div>
          <QuickFaq />
        </div>
      </section>

      {/* CTA — TERANG (agar tidak tabrak footer gelap) */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
            Your mat is <span className="text-emerald-700">waiting.</span>
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-xl mx-auto">
            Come visit, take a breath, and see if our space feels like home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 inline-flex items-center gap-3">
              <span>Book a Class</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-white border border-stone-300 text-stone-700 rounded-full font-medium hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              💬 Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
