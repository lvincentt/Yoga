// src/components/yoga/BenefitsSection.jsx
import { benefits } from "./yogaData";

export default function BenefitsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4 sm:mb-6 text-stone-900">
            A Practice That <span className="text-emerald-700">Nurtures</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Our approach blends traditional wisdom with modern understanding of
            movement and mindfulness.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {benefits.map((item) => (
            <div key={item.title} className="group relative">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/80 backdrop-blur-sm border border-stone-100 group-hover:border-emerald-200 transition-all duration-300 group-hover:shadow-xl hover:-translate-y-2 h-full flex flex-col">
                <div className="text-2xl sm:text-3xl mb-3 sm:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-stone-900">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 leading-relaxed flex-1">
                  {item.desc}
                </p>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-stone-100">
                  <span className="text-[10px] sm:text-xs text-emerald-700 font-medium tracking-widest">
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
