// src/components/yoga/BenefitsSection.jsx
import { benefits } from "./yogaData";

export default function BenefitsSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-serif mb-6 text-stone-900">
            A Practice That <span className="text-emerald-700">Nurtures</span>
          </h2>
          <p className="text-stone-600 text-lg">
            Our approach blends traditional wisdom with modern understanding of
            movement and mindfulness.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((item) => (
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
  );
}
