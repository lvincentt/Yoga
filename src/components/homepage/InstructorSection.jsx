// src/components/yoga/InstructorSection.jsx

export default function InstructorSection() {
  return (
    <section className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-white/50 relative overflow-hidden animate-fadeUp">
      {/* Background shape - dikecilin & di-hide di mobile biar gak overflow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3
        bg-gradient-to-b from-emerald-50/50 to-amber-50/30
        rounded-[4rem] rotate-12 animate-gradientDrift hidden md:block"
      />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Image - muncul duluan di mobile */}
        <div className="relative order-1 md:order-2 max-w-md mx-auto md:max-w-none w-full">
          <div
            className="absolute -inset-3 md:-inset-6 bg-gradient-to-tr
            from-emerald-200/30 to-amber-200/20
            rounded-[2rem] md:rounded-[3rem] blur-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80"
            alt="Instructor"
            loading="lazy"
            className="relative w-full h-72 sm:h-96 md:h-auto object-cover rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl
            transition-transform duration-[1200ms] ease-out
            hover:scale-[1.02] hover:-rotate-[0.5deg]"
          />

          {/* Floating quote - reposisi & dikecilin di mobile */}
          <div
            className="absolute -bottom-4 -left-1 sm:-bottom-6 sm:left-6 bg-white/95 backdrop-blur-sm
            p-3 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-xl border border-white/20
            max-w-[180px] sm:max-w-xs animate-floatSlow"
          >
            <div className="text-emerald-700 text-2xl sm:text-4xl mb-1 sm:mb-2 leading-none">
              “
            </div>
            <p className="text-stone-700 italic text-xs sm:text-sm md:text-base leading-snug">
              8 years of mindful teaching
            </p>
          </div>
        </div>

        {/* Content - muncul setelah gambar di mobile */}
        <div className="space-y-5 sm:space-y-6 md:space-y-8 order-2 md:order-1 text-center md:text-left">
          <div>
            <span
              className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100
              text-emerald-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
            >
              Lead Instructor
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif mb-3 sm:mb-6">
              Meet Your Guide
            </h2>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-stone-600 leading-relaxed max-w-md mx-auto md:mx-0">
            With over 8 years of teaching experience, our lead instructor
            focuses on sustainable movement, safe alignment, and breath-led
            awareness.
          </p>

          <div className="relative pl-5 sm:pl-8 text-left max-w-md mx-auto md:mx-0">
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5 sm:w-1
              bg-gradient-to-b from-emerald-400 to-amber-400
              rounded-full"
            />
            <p className="text-base sm:text-lg md:text-xl font-serif italic text-stone-700">
              “Yoga is a lifelong conversation with your body — not a
              destination.”
            </p>
          </div>

          <div className="pt-1 sm:pt-4">
            <button
              className="group inline-flex items-center gap-2 sm:gap-3
              text-sm sm:text-base text-emerald-700 transition-all duration-500
              hover:gap-4 hover:text-emerald-800"
            >
              <span
                className="relative after:absolute after:left-0 after:-bottom-1
                after:h-px after:w-0 after:bg-emerald-400
                after:transition-all after:duration-500
                group-hover:after:w-full"
              >
                Read full bio
              </span>
              <span
                className="transition-transform duration-500
                group-hover:translate-x-2"
              >
                ⟶
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
