// src/pages/Pricing.jsx
import { plans } from "../components/pricing/pricingData";
import PricingCard from "../components/pricing/PricingCard";
import ComparisonTable from "../components/pricing/ComparisonTable";
import FaqSection from "../components/pricing/FaqSection";

export default function Pricing() {
  return (
    <div className="w-full bg-gradient-to-b from-stone-50 to-stone-100 text-stone-800 font-sans">
      {/* HERO */}
      <section className="relative pt-20 sm:pt-24 md:pt-32 pb-10 sm:pb-14 md:pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 via-stone-50/30 to-amber-50/20" />
        <div className="absolute top-1/3 -left-20 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-200/20 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-0 -right-20 w-56 sm:w-80 h-56 sm:h-80 bg-amber-200/15 rounded-full blur-3xl hidden sm:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs md:text-sm tracking-[0.15em] md:tracking-[0.2em] text-emerald-700 font-medium">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-500 rounded-full animate-pulse" />
            PRICING & MEMBERSHIP
          </span>
          <h1 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight tracking-tight text-stone-900">
            Invest in Your <span className="text-emerald-700">Practice</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing. No hidden fees, no lock-in contracts.
            Choose what supports your rhythm — whether you're dropping in or
            committing to a daily practice.
          </p>

          {/* Promo banner */}
          <div className="mt-6 sm:mt-8 inline-flex items-start sm:items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-emerald-50 border border-emerald-200 rounded-2xl sm:rounded-full text-xs sm:text-sm max-w-md mx-auto text-left">
            <span className="text-base sm:text-lg shrink-0">🎉</span>
            <span className="text-emerald-800 leading-relaxed">
              <span className="font-semibold">New here?</span> Enjoy 20% off
              your first class with code{" "}
              <span className="font-mono font-semibold bg-white px-1.5 sm:px-2 py-0.5 rounded border border-emerald-200 whitespace-nowrap">
                WELCOME20
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* PRICING CARDS */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 items-start">
            {plans.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
          <p className="text-center text-xs sm:text-sm text-stone-500 mt-6 sm:mt-10">
            All prices are in IDR. Class packs include mat and props rental.
          </p>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4 text-stone-900">
              Compare <span className="text-emerald-700">Plans</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              See what's included in each option at a glance.
            </p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-stone-100 shadow-sm overflow-hidden">
            <ComparisonTable />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4 text-stone-900">
              How It <span className="text-emerald-700">Works</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              Getting started is easy — three simple steps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Choose your plan",
                desc: "Pick a drop-in, class pack, or unlimited membership — whatever supports your lifestyle.",
                icon: "🌱",
              },
              {
                step: "02",
                title: "Book your class",
                desc: "Browse the schedule and reserve your spot in seconds. You'll receive a confirmation instantly.",
                icon: "📅",
              },
              {
                step: "03",
                title: "Show up & breathe",
                desc: "Arrive 10 minutes early, roll out your mat, and let everything else fall away.",
                icon: "🧘",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative p-5 sm:p-6 md:p-8 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-stone-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="absolute top-4 sm:top-6 right-4 sm:right-6 font-serif text-4xl sm:text-5xl text-emerald-100 leading-none">
                  {item.step}
                </span>
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 sm:mb-3 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-stone-600 leading-relaxed text-xs sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4 text-stone-900">
              Questions? <span className="text-emerald-700">Answered.</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 max-w-xl mx-auto">
              Everything you need to know before you begin.
            </p>
          </div>
          <FaqSection />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-18 md:py-24 px-4 sm:px-6 overflow-hidden bg-gradient-to-b from-stone-100 to-stone-200">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-emerald-200/30 rounded-full blur-3xl hidden sm:block" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-amber-200/20 rounded-full blur-3xl hidden sm:block" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-stone-900 mb-4 sm:mb-6 leading-tight">
            Still deciding? <br className="hidden sm:block" />
            <span className="text-emerald-700">Try your first class.</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-7 sm:mb-10 max-w-xl mx-auto leading-relaxed">
            Come experience the space before you commit. Your first class is 20%
            off — no strings attached.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <button className="group w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-sm sm:text-base rounded-full font-semibold shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 sm:gap-3">
              <span>Claim 20% Off</span>
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
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
