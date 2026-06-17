import { motion } from "motion/react";

interface SplitHeroProps {
  onJoinClick: () => void;
  onJourneyClick: () => void;
}

export default function SplitHero({ onJoinClick, onJourneyClick }: SplitHeroProps) {
  return (
    <section className="relative min-h-screen pt-16 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-parchment" id="hero">
      
      {/* LEFT SECTION (7 COLS on lg) - Content Panel */}
      <div className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 select-none">
        
        {/* INC Congress green Ribbon Badge */}
        <div className="mb-6 flex items-center space-x-3">
          <div className="relative inline-flex items-center space-x-2 bg-congress-green text-parchment text-[10px] md:text-xs font-semibold uppercase tracking-widest px-4 py-2 shadow-sm border border-congress-green">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span>Indian National Congress</span>
            <span className="text-parchment-dark/75">| INC Leader</span>
          </div>
          
          {/* Subtle 3-color Congress tricolor bar */}
          <div className="flex w-24 h-[3px] bg-transparent overflow-hidden" style={{ minWidth: '96px' }}>
            <div className="w-1/3 bg-saffron" />
            <div className="w-1/3 bg-white border-y border-ink-50/10" />
            <div className="w-1/3 bg-congress-green" />
          </div>
        </div>

        {/* Eyebrow label */}
        <span className="text-xs md:text-sm font-semibold tracking-[0.3em] text-ink-50 uppercase mb-4 block">
          CONGRESS STATE LEADER • TELANGANA
        </span>

        {/* Large serif display name */}
        <h1 className="text-5xl md:text-6xl xl:text-7.5xl font-serif text-ink tracking-tight leading-[1.05] mb-6 font-semibold">
          Neelam <br />
          <span className="font-serif italic text-saffron font-normal">Madhu</span> <br />
          Mudiraj
        </h1>

        {/* Italic Title Accent */}
        <p className="font-serif italic text-lg md:text-xl lg:text-2xl text-ink-80 font-light mb-8 max-w-xl leading-relaxed border-l-2 border-saffron-mid/30 pl-4">
          "A self-made grassroots leader, raising the powerful voice of backward classes, marginalized youth, and regional farmers."
        </p>

        {/* Action Button Segment */}
        <div className="flex flex-wrap gap-4 mb-12">
          <button
            onClick={onJoinClick}
            className="bg-saffron text-parchment text-xs font-semibold tracking-widest uppercase px-8 py-4 border border-saffron hover:bg-parchment hover:text-saffron transition-all duration-300 shadow-md cursor-pointer"
          >
            CONNECT WITH MADHU
          </button>
          <button
            onClick={onJourneyClick}
            className="bg-transparent text-ink text-xs font-semibold tracking-widest uppercase px-8 py-4 border border-ink/20 hover:border-saffron hover:text-saffron transition-all duration-300 cursor-pointer"
            style={{ borderBottomWidth: '1.5px' }}
          >
            READ POLITICAL JOURNEY
          </button>
        </div>

        {/* Powerful quote with hair-border split-offset */}
        <div className="pt-8 border-t border-ink/10 relative" style={{ borderTopWidth: '0.5px' }}>
          <span className="absolute -top-3 left-0 bg-parchment px-3 font-serif italic text-xs text-saffron">
            The Commitment
          </span>
          <p className="font-serif italic text-xl md:text-2xl text-ink max-w-2xl leading-relaxed">
            “From the dust of Chitkul to the steps of Parliament — the people's journey is mine.”
          </p>
          <span className="block text-xs font-semibold tracking-widest text-ink-50 uppercase mt-2">
            — NEELAM MADHU MUDIRAJ
          </span>
        </div>
      </div>

      {/* RIGHT SECTION (5 COLS on lg) - Aesthetic Portal panel */}
      <div className="lg:col-span-5 bg-ink relative min-h-[450px] lg:min-h-0 flex flex-col justify-between p-8 md:p-12 lg:p-16 select-none overflow-hidden">
        
        {/* Saffron radial glow overlay */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen"
          style={{
            background: "radial-gradient(circle at 60% 40%, #C8640A 0%, rgba(15, 14, 11, 0) 65%)"
          }}
        />

        {/* Abstract structural grid behind glow */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#F0EBE0 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        {/* Top-Right Decorative Lead Ribbon */}
        <div className="absolute top-10 right-0 py-1.5 px-6 bg-saffron-light/10 border-l border-saffron text-saffron-mid text-[10px] tracking-widest font-mono uppercase">
          MEDAK 2024 CANDIDATE
        </div>

        {/* Centered Decorative Monogram Placeholder for Photo */}
        <div className="my-auto flex flex-col items-center justify-center relative py-12">
          {/* Framed Circle */}
          <div className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-saffron-mid/20 flex items-center justify-center relative p-2 shadow-2xl backdrop-blur-sm">
            {/* Spinning decorative orbit border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-saffron/30 animate-[spin_100s_linear_infinite]" />
            
            {/* Inner background container with gradient */}
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-saffron-light/5 via-saffron-light/15 to-saffron-light/5 flex flex-col items-center justify-center relative">
              <span className="font-serif text-5xl md:text-6xl font-extralight tracking-widest text-saffron-mid">
                NM
              </span>
              <div className="w-8 h-[1px] bg-saffron my-2" />
              <div className="text-[10px] tracking-widest uppercase font-mono text-[#F0EBE0]">
                Mudiraj
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs font-mono tracking-widest text-[#FAF7F2]/50 uppercase">
              REPRESENTING THE PEOPLE'S WILL
            </p>
          </div>
        </div>

        {/* Bottom Floating Stats - Grid Layout with clear fine lines */}
        <div className="relative z-10 w-full bg-[#FAF7F2] border border-ink/10 p-4 shadow-xl grid grid-cols-3 text-center" style={{ borderWidth: '0.5px' }}>
          
          <div className="border-r border-ink/15 py-1">
            <span className="block text-2xl md:text-3xl font-serif text-saffron font-bold leading-none">
              4.3L+
            </span>
            <span className="text-[9px] md:text-[10pt] font-sans font-medium tracking-wider text-ink-50 uppercase block mt-1">
              MASS VOTES
            </span>
          </div>

          <div className="border-r border-ink/15 py-1">
            <span className="block text-2xl md:text-3xl font-serif text-ink font-bold leading-none">
              2024
            </span>
            <span className="text-[9px] md:text-[10pt] font-sans font-medium tracking-wider text-ink-50 uppercase block mt-1">
              LOK SABHA
            </span>
          </div>

          <div className="py-1">
            <span className="block text-2xl md:text-3xl font-serif text-congress-green font-bold leading-none">
              Medak
            </span>
            <span className="text-[9px] md:text-[10pt] font-sans font-medium tracking-wider text-ink-50 uppercase block mt-1">
              CONSTITUENCY
            </span>
          </div>

        </div>

      </div>

    </section>
  );
}
