// src/components/yoga/CTASection.jsx

export default function CTASection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200">
      {/* Background decorations — lembut, terang */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 mb-8">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <span className="text-emerald-700 tracking-widest text-sm font-medium">
            BEGIN YOUR JOURNEY
          </span>
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>

        <h2 className="text-5xl font-serif text-stone-900 mb-6 leading-tight">
          Your First Step <br />
          <span className="text-emerald-700">Towards Balance</span>
        </h2>

        <p className="text-stone-600 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
          Take a deep breath and begin. Your mat awaits in our peaceful studio,
          where every journey starts with a single moment of intention.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
            <span>Book Your First Class</span>
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
          <button className="px-10 py-5 bg-white border border-stone-300 text-stone-700 rounded-full font-medium hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md transition-all duration-300">
            Schedule a Tour
          </button>
        </div>

        <p className="mt-8 text-sm text-stone-500">
          First-time guests enjoy 20% off
        </p>
      </div>
    </section>
  );
}
