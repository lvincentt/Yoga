// src/components/yoga/contact/ContactInfo.jsx
import { studioInfo, openingHours, contactMethods } from "./contactData";

export default function ContactInfo() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Contact methods */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-100 shadow-sm">
        <h3 className="font-serif text-lg sm:text-xl text-stone-900 mb-4 sm:mb-6">
          Reach us directly
        </h3>
        <div className="space-y-2 sm:space-y-3">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={
                method.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl hover:bg-stone-50 active:bg-stone-100 transition-colors duration-300"
            >
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-lg sm:rounded-xl flex items-center justify-center text-base sm:text-lg shrink-0">
                {method.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
                  <p className="text-[10px] sm:text-xs tracking-widest text-stone-500 font-medium">
                    {method.label.toUpperCase()}
                  </p>
                  <span className="text-[9px] sm:text-[10px] text-emerald-700 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-full whitespace-nowrap">
                    {method.note}
                  </span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-stone-900 truncate group-hover:text-emerald-700 transition-colors">
                  {method.value}
                </p>
              </div>
              <svg
                className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-stone-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all shrink-0"
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
            </a>
          ))}
        </div>
      </div>

      {/* Address */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-5 sm:p-8 border border-stone-100 shadow-sm">
        <h3 className="font-serif text-lg sm:text-xl text-stone-900 mb-3 sm:mb-4">
          Visit the studio
        </h3>
        <div className="flex items-start gap-2.5 sm:gap-3 text-stone-600 mb-4">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 text-emerald-600 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="text-xs sm:text-sm leading-relaxed">
            {studioInfo.address}
          </p>
        </div>

        {/* Opening hours */}
        <div className="border-t border-stone-100 pt-3 sm:pt-4 space-y-1.5 sm:space-y-2">
          <p className="text-[10px] sm:text-xs tracking-widest text-stone-500 font-medium mb-2 sm:mb-3">
            OPENING HOURS
          </p>
          {openingHours.map((h) => (
            <div
              key={h.day}
              className="flex items-center justify-between text-xs sm:text-sm"
            >
              <span className="text-stone-600">{h.day}</span>
              <span className="font-medium text-stone-800">{h.hours}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <a
        href={`https://wa.me/${studioInfo.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20classes`}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-700 to-emerald-600 text-white shadow-lg hover:shadow-xl hover:shadow-emerald-200 transition-all duration-300 hover:-translate-y-0.5"
      >
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-xl sm:text-2xl shrink-0">
            💬
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-medium text-sm sm:text-base">
              Chat with us on WhatsApp
            </p>
            <p className="text-xs sm:text-sm text-emerald-100/80">
              Usually replies within minutes
            </p>
          </div>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform shrink-0"
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
        </div>
      </a>
    </div>
  );
}
