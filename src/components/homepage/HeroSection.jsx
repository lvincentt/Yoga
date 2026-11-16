// src/components/yoga/HeroSection.jsx

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] pb-12 md:pb-0 pt-24 md:pt-0 flex items-center px-6 overflow-hidden">
      {/* Background dengan gradient yang lebih hidup */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-stone-50/30 to-amber-50/20" />
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div>
            <span className="inline-flex items-center gap-2 text-sm tracking-[0.2em] text-emerald-700 font-medium">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              YOGA · WELLNESS · MINDFULNESS
            </span>

            <h1 className="mt-8 text-5xl md:text-6xl lg:text-7xl font-serif leading-tight tracking-tight">
              <span className="block text-stone-900">Move with</span>
              <span className="block text-emerald-700 mt-2">intention.</span>
            </h1>

            <div className="mt-6 pl-4 border-l-2 border-emerald-300">
              <p className="text-stone-600 text-lg max-w-lg leading-relaxed">
                A sanctuary where movement meets mindfulness, and every breath
                brings you closer to balance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group px-8 py-4 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
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
            <button className="group px-8 py-4 border border-stone-300 rounded-full hover:bg-white/50 hover:border-emerald-300 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
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

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400/20 to-amber-400/10 rounded-[3rem] blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=80"
            className="relative rounded-[2.5rem] shadow-2xl transform hover:scale-[1.01] transition-transform duration-700"
            alt="Yoga practice in peaceful studio"
          />
          {/* Floating element */}
          <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-stone-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 text-lg">🧘</span>
              </div>
              <div>
                <p className="text-sm font-medium">Small Groups</p>
                <p className="text-xs text-stone-500">Personal attention</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
