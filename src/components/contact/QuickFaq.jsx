// src/components/yoga/contact/QuickFaq.jsx
import { quickFaqs } from "./contactData";

export default function QuickFaq() {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {quickFaqs.map((faq) => (
        <div
          key={faq.q}
          className="p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-stone-100 hover:border-emerald-200 transition-colors duration-300"
        >
          <p className="font-medium text-stone-900 mb-2 text-sm">{faq.q}</p>
          <p className="text-sm text-stone-600 leading-relaxed">{faq.a}</p>
        </div>
      ))}
    </div>
  );
}
