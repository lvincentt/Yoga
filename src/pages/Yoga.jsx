export default function Yoga() {
  return (
    <div className="w-full bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans">
      {/* HERO */}
      <section className="relative min-h-[95vh] flex items-center px-6 overflow-hidden">
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

      {/* BENEFITS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-serif mb-6 text-stone-900">
              A Practice That <span className="text-emerald-700">Nurtures</span>
            </h2>
            <p className="text-stone-600 text-lg">
              Our approach blends traditional wisdom with modern understanding
              of movement and mindfulness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌿",
                title: "Mindful Guidance",
                desc: "Experience personalized attention in our intimate classes, where each movement is intentional.",
                color: "from-emerald-50 to-emerald-100/30",
              },
              {
                icon: "🌀",
                title: "Holistic Integration",
                desc: "Movement, breathwork, and meditation woven together for complete mind-body harmony.",
                color: "from-amber-50 to-amber-100/30",
              },
              {
                icon: "🕊️",
                title: "Sacred Space",
                desc: "A tranquil environment designed to help you disconnect from noise and reconnect with self.",
                color: "from-stone-50 to-stone-100/30",
              },
            ].map((item, index) => (
              <div key={item.title} className="group relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                <div className="relative p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-stone-100 group-hover:border-emerald-200 transition-all duration-300 group-hover:shadow-xl hover:-translate-y-2">
                  <div className="text-3xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-stone-900">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                  <div className="mt-6 pt-6 border-t border-stone-100">
                    <span className="text-xs text-emerald-700 font-medium tracking-widest">
                      LEARN MORE →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLASS SCHEDULE */}
      <section className="py-28 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-50/20 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <h2 className="text-4xl font-serif mb-4">Weekly Classes</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
            </div>
            <p className="text-stone-600 max-w-md mt-6 md:mt-0">
              Each class is designed to support different energies and
              intentions.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "Morning Flow",
                time: "07.00 – 08.00",
                level: "Energizing · All Levels",
                color: "from-amber-50 to-orange-50",
                spots: "5 spots left",
              },
              {
                name: "Slow Hatha",
                time: "17.00 – 18.15",
                level: "Grounding · Beginner Friendly",
                color: "from-emerald-50 to-teal-50",
                spots: "3 spots left",
              },
              {
                name: "Yin & Restore",
                time: "19.00 – 20.00",
                level: "Deeply Relaxing",
                color: "from-violet-50 to-indigo-50",
                spots: "Fully booked",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="group flex justify-between items-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-white shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-8">
                  <div
                    className={`w-4 h-24 bg-gradient-to-b ${c.color} rounded-full group-hover:scale-105 transition-transform`}
                  ></div>
                  <div>
                    <h3 className="font-serif text-2xl mb-2">{c.name}</h3>
                    <div className="flex items-center gap-4">
                      <p className="text-stone-500">
                        {c.time} · {c.level}
                      </p>
                      <span className="text-xs px-3 py-1 rounded-full bg-stone-100 text-stone-600">
                        {c.spots}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-serif text-emerald-700">
                    IDR 150K
                  </div>
                  <button className="mt-2 text-sm text-stone-500 hover:text-emerald-700 transition-colors opacity-0 group-hover:opacity-100">
                    Book now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
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
              <p className="text-stone-700 italic">
                8 years of mindful teaching
              </p>
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

      {/* TESTIMONIAL */}
      <section className="py-32 px-6 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif mb-4 text-stone-900">
              Voices from Our{" "}
              <span className="text-emerald-700">Sanctuary</span>
            </h2>
            <p className="text-stone-600">What our community members say</p>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -left-6 text-6xl text-emerald-200">
              "
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-stone-100">
              <blockquote className="text-2xl font-serif italic text-stone-700 leading-relaxed mb-8">
                This studio has become my weekly reset button. Sarah's guidance
                has helped me find stillness in motion and peace in the pause. I
                leave every class feeling both grounded and renewed.
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center text-emerald-700 text-xl">
                  M
                </div>
                <div>
                  <p className="font-semibold text-stone-900">Maya, Jakarta</p>
                  <p className="text-sm text-stone-500">
                    Practicing for 2 years
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-emerald-200">
              "
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-emerald-300 tracking-widest text-sm">
              BEGIN YOUR JOURNEY
            </span>
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-5xl font-serif text-white mb-6 leading-tight">
            Your First Step <br />
            <span className="text-emerald-300">Towards Balance</span>
          </h2>

          <p className="text-emerald-100/80 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Take a deep breath and begin. Your mat awaits in our peaceful
            studio, where every journey starts with a single moment of
            intention.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-10 py-5 bg-white text-emerald-900 rounded-full font-semibold shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3">
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
            <button className="px-10 py-5 bg-transparent border-2 border-emerald-300/30 text-white rounded-full font-medium hover:bg-emerald-300/10 hover:border-emerald-300/50 transition-all duration-300">
              Schedule a Tour
            </button>
          </div>

          <p className="mt-8 text-sm text-emerald-200/60">
            First-time guests enjoy 20% off
          </p>
        </div>
      </section>
    </div>
  );
}
