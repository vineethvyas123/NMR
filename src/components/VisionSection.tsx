import { motion } from "motion/react";
import { VISION_CARDS } from "../data";

export default function VisionSection() {
  
  // Custom hand-drawn SVGs corresponding to priorities (IDs: 'obc-sc', 'rural', 'people', 'gov', 'econ', 'const')
  const renderIcon = (id: string) => {
    switch (id) {
      case "obc-sc":
        return (
          // Scales / Balance / Shield representing OBC & SC Rights
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 2v20M5 7h14M5 7l3 6M19 7l-3 6M5 22h14" />
          </svg>
        );
      case "rural":
        return (
          // Village / Home representing Rural Development
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M3 10l9-7 9 7v11H3V10zM12 21V11M9 14h6" />
          </svg>
        );
      case "people":
        return (
          // Key/Gateway / Hand representing Access
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M12 22a5 5 0 100-10 5 5 0 000 10zM12 12V2M12 5h4M12 8h3" />
          </svg>
        );
      case "gov":
        return (
          // Columns / Integrity / Building representing Governance
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M3 21h18M3 10h18M3 6h18M6 10v11M12 10v11M18 10v11" />
          </svg>
        );
      case "econ":
        return (
          // Sowing Crop / Growth Chart representing Empowerment
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M3 3v18h18M18 9l-5 5-3-3-4 4M18 6v3h-3" />
          </svg>
        );
      case "const":
        return (
          // Open Book / Preamble representing Constitution
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20M4 19.5A2.5 2.5 0 006.5 22H20M4 19.5V3.5A2.5 2.5 0 016.5 1M20 1v21" />
            <path d="M9 6h6M9 10h6" />
          </svg>
        );
      default:
        return (
          <svg className="w-6 h-6 text-saffron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
          </svg>
        );
    }
  };

  return (
    <section className="py-20 md:py-28 bg-theme-white border-b border-ink/5" id="priorities">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-xs font-semibold tracking-[0.3em] text-saffron uppercase block mb-3">
            VISION & POLITICAL BLUEPRINT
          </span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ink font-semibold">
            Six Priorities for Medak
          </h2>
          <p className="mt-4 text-sm md:text-base text-ink-50 font-sans leading-relaxed">
            Our constitutional fight centers on resolving the core disparities holding our villages and communities back. From healthcare allocation to backward representation, these six core values drive our legislative approach.
          </p>
        </div>

        {/* 3x2 Grid of Sharp Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10" style={{ borderWidth: '0.5px' }}>
          
          {VISION_CARDS.map((card) => (
            <motion.div 
              key={card.id} 
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-theme-white p-8 md:p-10 transition-colors duration-300 hover:bg-gradient-to-br hover:from-theme-white hover:to-parchment hover:shadow-[0_12px_30px_rgba(40,30,20,0.08)] hover:z-10 relative overflow-hidden group border-b border-r border-[#FAF7F2]/10 cursor-pointer"
            >
              {/* Elegant hover top hairline accent */}
              <div className="absolute top-0 left-0 h-[2.5px] w-0 bg-saffron transition-all duration-500 ease-out group-hover:w-full" />

              {/* Saffron-light icon box */}
              <div className="w-12 h-12 bg-parchment flex items-center justify-center mb-6 border border-saffron-mid/10 transition-all duration-300 group-hover:bg-saffron group-hover:text-parchment group-hover:rotate-[3deg]">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {renderIcon(card.id)}
                </div>
              </div>

              {/* Card Title - Cormorant */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink transition-colors duration-200 group-hover:text-saffron">
                  {card.title}
                </h3>
                {/* Micro-interaction sliding arrow */}
                <span className="text-saffron opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 font-mono text-sm">
                  →
                </span>
              </div>

              {/* Card Body - DM Sans */}
              <p className="font-sans text-sm md:text-base text-ink-50 leading-relaxed group-hover:text-ink-80 transition-colors duration-200">
                {card.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
