import { TIMELINE_DATA } from "../data";

export default function TimelineSection() {
  return (
    <section className="pt-8 md:pt-12 pb-20 md:pb-28 bg-parchment border-b border-ink/5" id="journey" style={{ borderBottomWidth: '0.5px' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-semibold tracking-[0.3em] text-saffron uppercase block mb-3">
            CHRONOLOGY OF LEADERSHIP
          </span>
          <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ink font-semibold">
            Rising From the Grassroots
          </h2>
          <p className="mt-4 font-serif italic text-lg text-ink-50 max-w-xl mx-auto">
            A linear progression of public devotion, starting from ward assembly meetings to the highest echelons of federal campaign circles.
          </p>
        </div>

        {/* Timeline Component - Standard 1px Left Rule */}
        <div className="relative pl-6 md:pl-10 ml-2 md:ml-6 border-l border-saffron-mid/20">
          
          {TIMELINE_DATA.map((item, index) => (
            <div 
              key={item.title} 
              className="relative mb-12 md:mb-16 last:mb-0 group cursor-default transition-all duration-300"
            >
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full border border-saffron bg-[#FAF7F2] flex items-center justify-center transition-all duration-300 group-hover:scale-135 group-hover:bg-saffron group-hover:shadow-[0_0_10px_rgba(200,100,10,0.4)]">
                <div className="w-1.5 h-1.5 bg-saffron rounded-full transition-transform duration-300 group-hover:scale-0" />
              </div>

              {/* Year/Period Indicator */}
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest text-[#7A7468] uppercase block mb-1 transition-colors duration-300 group-hover:text-saffron">
                {item.period}
              </span>

              {/* Title Header with beautiful serif styling */}
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-3 transition-transform duration-300 group-hover:translate-x-1">
                <h3 className="font-serif text-xl md:text-2.5xl font-semibold text-ink leading-tight transition-colors duration-300 group-hover:text-saffron">
                  {item.title}
                </h3>
                <span className="text-xs md:text-sm font-sans tracking-wide text-ink-50 font-medium transition-colors duration-300 group-hover:text-ink-80">
                  {item.subtitle}
                </span>
              </div>

              {/* Description Body text */}
              <p className="font-sans text-sm md:text-base text-ink-50 leading-relaxed max-w-2xl transition-colors duration-300 group-hover:text-ink-80 group-hover:translate-x-1">
                {item.description}
              </p>

              {/* Separator Accent - Optional elegant detail */}
              {index < TIMELINE_DATA.length - 1 && (
                <div className="mt-6 w-16 h-[0.5px] bg-ink/5 transition-all duration-300 group-hover:w-24 group-hover:bg-saffron/20" />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
