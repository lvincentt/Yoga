// src/components/yoga/contact/QuickFaq.jsx
import { quickFaqs } from "./contactData";

export default function QuickFaq() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {quickFaqs.map((faq) => (
        <div
          key={faq.q}
          className="p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-stone-100 hover:border-emerald-200 transition-colors duration-300"
        >
          <p className="font-medium text-stone-900 mb-1.5 sm:mb-2 text-sm">
            {faq.q}
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            {faq.a}
          </p>
        </div>
      ))}
    </div>
  );
}
