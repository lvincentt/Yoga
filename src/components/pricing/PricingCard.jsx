// src/components/yoga/pricing/PricingCard.jsx
import { formatPrice } from "./pricingData";

export default function PricingCard({ plan }) {
  return (
    <div
      className={`group relative rounded-3xl transition-all duration-500 ${
        plan.highlighted
          ? "bg-gradient-to-br from-emerald-900 via-emerald-800 to-stone-900 text-white shadow-2xl shadow-emerald-900/20 lg:-translate-y-4 lg:scale-[1.03]"
          : "bg-white/80 backdrop-blur-sm border border-stone-100 text-stone-800 hover:border-emerald-200 hover:shadow-xl"
      } p-8 hover:-translate-y-1`}
    >
      {/* Highlighted glow */}
      {plan.highlighted && (
        <>
          <div className="absolute top-0 left-0 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
          <div className="relative">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-200 text-[11px] tracking-widest font-medium mb-4">
              ★ MOST POPULAR
            </span>
          </div>
        </>
      )}

      <div className="relative">
        {!plan.highlighted && (
          <span className="inline-block text-[11px] tracking-widest text-emerald-700 font-medium mb-4 uppercase">
            {plan.tagline}
          </span>
        )}

        <h3
          className={`font-serif text-2xl mb-1 ${
            plan.highlighted ? "text-white" : "text-stone-900"
          }`}
        >
          {plan.name}
        </h3>
        <p
          className={`text-sm mb-6 ${
            plan.highlighted ? "text-emerald-100/70" : "text-stone-500"
          }`}
        >
          {plan.description}
        </p>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span
              className={`font-serif text-4xl ${
                plan.highlighted ? "text-white" : "text-emerald-700"
              }`}
            >
              {formatPrice(plan.price)}
            </span>
          </div>
          <p
            className={`text-sm mt-1 ${
              plan.highlighted ? "text-emerald-200/70" : "text-stone-500"
            }`}
          >
            {plan.period}
            {plan.pricePerClass && (
              <span className="ml-2 text-xs">
                · {formatPrice(plan.pricePerClass)}/class
              </span>
            )}
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <svg
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  plan.highlighted ? "text-emerald-300" : "text-emerald-600"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span
                className={
                  plan.highlighted ? "text-emerald-100/90" : "text-stone-600"
                }
              >
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-3.5 rounded-full font-medium transition-all duration-300 ${
            plan.highlighted
              ? "bg-white text-emerald-900 hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5"
              : "bg-emerald-700 text-white hover:bg-emerald-800 hover:shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5"
          }`}
        >
          {plan.cta}
        </button>
      </div>
    </div>
  );
}
