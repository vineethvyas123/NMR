import { COMMUNITY_POINTS } from "../data";

export default function CommunitySection() {
  return (
    <section className="py-20 md:py-28 bg-parchment-dark border-b border-ink/5" id="community" style={{ borderBottomWidth: '0.5px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.3em] text-saffron uppercase block mb-3">
              FORWARD TOGETHER
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ink font-semibold">
              The Community Coalition
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <span className="font-mono text-xs text-ink-50 uppercase tracking-wider">
              INCLUSIVE CONSTITUTIONAL COCKTAIL
            </span>
          </div>
        </div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* LEFT COLUMN: 3 paragraphs of bios prose on community connection */}
          <div className="lg:col-span-6 space-y-6 text-sm md:text-base leading-relaxed text-ink-80">
            <h3 className="font-serif text-2xl font-semibold text-ink mb-2">
              Strength Through Alliance
            </h3>
            
            <p>
              Under the democratic design of the Indian National Congress, Neelam Madhu Mudiraj advocates for a unified social structure in Medak. His vision holds that representation must be direct, not symbolic. By championing backward caste rights and Scheduled Caste (SC) alliances, he has unified fragmented rural demographics into a cohesive progressive network.
            </p>

            <p>
              In his native Patancheru and Chitkul, he has historically hosted localized roundtables, bringing village elders, community representatives, and youthful labor organizers directly to the bargaining table. This ensures that government schemas and corporate job quotas are allocated transparently, bypassing bureaucratic bottlenecks and local middlemen.
            </p>

            <p>
              His community work is characterized by profound respect for traditional leaders and local artisans. Rather than imposing top-down dictates, he acts as an echo chamber for underrepresented voices, making local concerns about environment, housing, and reservation protections heard at the highest policy levels of the Telangana government.
            </p>

            {/* Custom Graphic Stamp */}
            <div className="pt-6 border-t border-ink/10 flex items-center space-x-4 mt-8" style={{ borderTopWidth: '0.5px' }}>
              <div className="w-10 h-10 rounded-full border border-saffron flex items-center justify-center font-serif text-xs text-saffron bg-[#FAF7F2]">
                INC
              </div>
              <div className="text-xs">
                <p className="font-bold text-ink uppercase tracking-wider">Social Alignment Initiative</p>
                <p className="text-ink-50 font-mono">Defending Decentralized Power and Dignity</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Numbered list (01-04) formatted with large numbers */}
          <div className="lg:col-span-6 space-y-8">
            {COMMUNITY_POINTS.map((point) => (
              <div 
                key={point.num} 
                className="flex items-start space-x-6 border-b border-ink/5 pb-6 last:border-b-0 last:pb-0"
              >
                {/* Large Number index in Saffron Serif */}
                <span className="font-serif text-4xl md:text-5xl font-extralight text-saffron leading-none select-none">
                  {point.num}
                </span>

                <div className="space-y-2">
                  <h4 className="font-serif text-lg md:text-xl font-bold text-ink hover:text-saffron-mid transition-colors duration-200">
                    {point.title}
                  </h4>
                  <p className="font-sans text-sm md:text-base text-ink-50 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
