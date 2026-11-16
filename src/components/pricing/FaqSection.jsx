// src/components/pricing/FaqSection.jsx
import { useState } from "react";
import { faqs } from "./pricingData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {faqs.map((faq, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={faq.q}
            className="bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-100 overflow-hidden transition-all duration-300"
          >
            <button
              onClick={() => setOpenIndex(open ? -1 : idx)}
              className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-stone-50/50 transition-colors"
              aria-expanded={open}
            >
              <span className="font-medium text-stone-900">{faq.q}</span>
              <span
                className={`w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  open ? "rotate-45 bg-emerald-100" : ""
                }`}
              >
                <svg
                  className={`w-4 h-4 transition-colors ${
                    open ? "text-emerald-700" : "text-stone-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="px-5 pb-5 text-stone-600 leading-relaxed text-sm">
                {faq.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
