// src/components/yoga/contact/MapEmbed.jsx
import { studioInfo } from "./contactData";

export default function MapEmbed() {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
      <div className="relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[21/9]">
        <iframe
          title="Studio Location"
          src={studioInfo.mapsEmbed}
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        {/* Floating "Open in Maps" */}
        <a
          href={studioInfo.mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 px-3 sm:px-5 py-1.5 sm:py-2.5 bg-white rounded-full shadow-lg text-xs sm:text-sm font-medium text-stone-800 hover:text-emerald-700 hover:shadow-xl transition-all duration-300 flex items-center gap-1.5 sm:gap-2"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4"
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
          <span className="hidden sm:inline">Open in Maps</span>
          <span className="sm:hidden">Maps</span>
        </a>
      </div>
    </div>
  );
}
