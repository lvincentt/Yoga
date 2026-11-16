// src/components/yoga/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="relative min-h-screen md:min-h-[95vh] pt-20 pb-16 md:pt-0 md:pb-0 flex items-center px-4 sm:px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-stone-50/30 to-amber-50/20" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl hidden sm:block" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl hidden sm:block" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center w-full">
        {/* Image - muncul duluan di mobile */}
        <div className="relative order-1 md:order-2 max-w-md mx-auto md:max-w-none w-full">
          <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-tr from-emerald-400/20 to-amber-400/10 rounded-[2rem] md:rounded-[3rem] blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
            className="relative w-full h-64 sm:h-80 md:h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl transform hover:scale-[1.01] transition-transform duration-700"
            alt="Yoga practice in peaceful studio"
            loading="lazy"
          />
          {/* Floating element */}
          <div className="absolute -bottom-4 -left-2 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-sm p-3 md:p-5 rounded-xl md:rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-9 h-9 md:w-12 md:h-12 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-700 text-sm md:text-lg">🧘</span>
              </div>
              <div>
                <p className="text-xs md:text-sm font-medium">Small Groups</p>
                <p className="text-[10px] md:text-xs text-stone-500">
                  Personal attention
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - muncul setelah gambar di mobile */}
        <div className="space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-emerald-500 rounded-full animate-pulse" />
              YOGA · WELLNESS · MINDFULNESS
            </span>

            <h1 className="mt-4 md:mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] tracking-tight">
              <span className="block text-stone-900">Move with</span>
              <span className="block text-emerald-700 mt-1 md:mt-2">
                intention.
              </span>
            </h1>

            <div className="mt-4 md:mt-6 pl-3 md:pl-4 border-l-2 border-emerald-300 text-left max-w-md mx-auto md:mx-0">
              <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
                A sanctuary where movement meets mindfulness, and every breath
                brings you closer to balance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 max-w-md mx-auto md:mx-0">
            <button className="group w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-sm md:text-base rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 md:gap-3">
              <span>Begin Your Journey</span>
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
            </button>
            <button className="group w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 border border-stone-300 text-sm md:text-base rounded-full hover:bg-white/50 hover:border-emerald-300 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View Schedule
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
