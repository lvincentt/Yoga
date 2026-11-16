// src/components/yoga/InstructorSection.jsx

export default function InstructorSection() {
  return (
    <section className="py-28 px-6 bg-white/50 relative overflow-hidden animate-fadeUp">
      {/* Background shape */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3
        bg-gradient-to-b from-emerald-50/50 to-amber-50/30
        rounded-[4rem] rotate-12 animate-gradientDrift"
      ></div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div className="relative">
          <div
            className="absolute -inset-6 bg-gradient-to-tr
            from-emerald-200/30 to-amber-200/20
            rounded-[3rem] blur-2xl"
          ></div>

          <img
            src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=1200&q=80"
            alt="Instructor"
            className="relative rounded-[2.5rem] shadow-2xl
            transition-transform duration-[1200ms] ease-out
            hover:scale-[1.02] hover:-rotate-[0.5deg]"
          />

          {/* Floating quote */}
          <div
            className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-sm
            p-6 rounded-2xl shadow-xl border border-white/20
            max-w-xs animate-floatSlow"
          >
            <div className="text-emerald-700 text-4xl mb-2">“</div>
            <p className="text-stone-700 italic">8 years of mindful teaching</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <div>
            <span
              className="inline-block px-4 py-2 bg-emerald-100
              text-emerald-700 rounded-full text-sm font-medium mb-4"
            >
              Lead Instructor
            </span>
            <h2 className="text-4xl font-serif mb-6">Meet Your Guide</h2>
          </div>

          <p className="text-lg text-stone-600 leading-relaxed">
            With over 8 years of teaching experience, our lead instructor
            focuses on sustainable movement, safe alignment, and breath-led
            awareness.
          </p>

          <div className="relative pl-8">
            <div
              className="absolute left-0 top-0 bottom-0 w-1
              bg-gradient-to-b from-emerald-400 to-amber-400
              rounded-full"
            ></div>
            <p className="text-xl font-serif italic text-stone-700">
              “Yoga is a lifelong conversation with your body — not a
              destination.”
            </p>
          </div>

          <div className="pt-4">
            <button
              className="group inline-flex items-center gap-3
              text-emerald-700 transition-all duration-500
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
