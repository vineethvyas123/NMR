import { TIMELINE_DATA } from "../data";

export default function TimelineSection() {
  return (
    <section className="py-20 md:py-28 bg-parchment border-b border-ink/5" id="journey" style={{ borderBottomWidth: '0.5px' }}>
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
              className="relative mb-12 md:mb-16 last:mb-0"
            >
              
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1 w-4 h-4 rounded-full border border-saffron bg-[#FAF7F2] flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-saffron rounded-full" />
              </div>

              {/* Year/Period Indicator */}
              <span className="font-mono text-[10px] md:text-xs font-semibold tracking-widest text-saffron uppercase block mb-1">
                {item.period}
              </span>

              {/* Title Header with beautiful serif styling */}
              <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 mb-3">
                <h3 className="font-serif text-xl md:text-2.5xl font-semibold text-ink leading-tight">
                  {item.title}
                </h3>
                <span className="text-xs md:text-sm font-sans tracking-wide text-ink-50 font-medium">
                  {item.subtitle}
                </span>
              </div>

              {/* Description Body text */}
              <p className="font-sans text-sm md:text-base text-ink-80 leading-relaxed max-w-2xl">
                {item.description}
              </p>

              {/* Separator Accent - Optional elegant detail */}
              {index < TIMELINE_DATA.length - 1 && (
                <div className="mt-6 w-16 h-[0.5px] bg-ink/5" />
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
