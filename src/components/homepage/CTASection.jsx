// src/components/yoga/CTASection.jsx

export default function CTASection() {
  return (
    <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-stone-50 via-stone-100 to-stone-200">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-emerald-200/30 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-amber-200/20 rounded-full blur-3xl hidden sm:block" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 sm:gap-3 mb-5 sm:mb-8">
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-emerald-700 tracking-[0.15em] sm:tracking-widest text-[10px] sm:text-xs md:text-sm font-medium">
            BEGIN YOUR JOURNEY
          </span>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse" />
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-stone-900 mb-4 sm:mb-6 leading-tight">
          Your First Step <br className="hidden sm:block" />
          <span className="text-emerald-700">Towards Balance</span>
        </h2>

        {/* Body */}
        <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Take a deep breath and begin. Your mat awaits in our peaceful studio,
          where every journey starts with a single moment of intention.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
          <button className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-sm sm:text-base rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3">
            <span>Book Your First Class</span>
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-2 transition-transform"
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
          <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-white border border-stone-300 text-stone-700 text-sm sm:text-base rounded-full font-medium hover:border-emerald-300 hover:text-emerald-700 hover:shadow-md transition-all duration-300">
            Schedule a Tour
          </button>
        </div>

        {/* Note */}
        <p className="mt-6 sm:mt-8 text-xs sm:text-sm text-stone-500">
          First-time guests enjoy 20% off
        </p>
      </div>
    </section>
  );
}
