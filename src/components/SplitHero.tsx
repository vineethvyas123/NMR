import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface SplitHeroProps {
  onJoinClick: () => void;
  onJourneyClick: () => void;
}

// Framer Motion Entrance Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 24,
      stiffness: 110,
    },
  },
};

const portalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      damping: 28,
      stiffness: 90,
      delay: 0.3,
    },
  },
};

const statsGridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
      delay: 0.5,
    },
  },
};

export default function SplitHero({ onJoinClick, onJourneyClick }: SplitHeroProps) {
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  // The beautiful high-resolution campaign photograph matching the attached smiling Indian man in a white shirt
  const heroImageSrc = "https://res.cloudinary.com/dqghfdklb/image/upload/v1781681541/Neelam_Madhu_e9dssy.jpg";
  const lightboxImageSrc = "https://res.cloudinary.com/dqghfdklb/image/upload/v1781681541/Neelam_Madhu_e9dssy.jpg";

  return (
    <section className="relative min-h-screen pt-20 md:pt-24 lg:pt-28 grid grid-cols-1 lg:grid-cols-12 overflow-hidden bg-parchment" id="hero">
      
      {/* LEFT SECTION (7 COLS on lg) - Content Panel */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="lg:col-span-7 flex flex-col justify-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-24 relative z-10 select-none"
      >
        
        {/* INC Congress green Ribbon Badge */}
        <motion.div variants={itemVariants} className="mb-6 flex items-center space-x-3">
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
        </motion.div>

        {/* Eyebrow label */}
        <motion.span variants={itemVariants} className="text-xs md:text-sm font-semibold tracking-[0.3em] text-ink-50 uppercase mb-4 block">
          CONGRESS STATE LEADER • TELANGANA
        </motion.span>

        {/* Large serif display name */}
        <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-6xl font-serif text-ink tracking-tight leading-none mb-6 font-semibold whitespace-nowrap">
          Neelam <span className="font-serif italic text-saffron font-normal">Madhu</span> Mudiraj
        </motion.h1>

        {/* Italic Title Accent */}
        <motion.p variants={itemVariants} className="font-serif italic text-lg md:text-xl lg:text-2xl text-ink-80 font-light mb-8 max-w-xl leading-relaxed border-l-2 border-saffron-mid/30 pl-4">
          "A self-made grassroots leader, raising the powerful voice of backward classes, marginalized youth, and regional farmers."
        </motion.p>

        {/* Action Button Segment */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
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
        </motion.div>

        {/* Powerful quote with hair-border split-offset */}
        <motion.div variants={itemVariants} className="pt-8 border-t border-ink/10 relative" style={{ borderTopWidth: '0.5px' }}>
          <span className="absolute -top-3 left-0 bg-parchment px-3 font-serif italic text-xs text-saffron">
            The Commitment
          </span>
          <p className="font-serif italic text-xl md:text-2xl text-ink max-w-2xl leading-relaxed">
            “From the dust of Chitkul to the steps of Parliament — the people's journey is mine.”
          </p>
          <span className="block text-xs font-semibold tracking-widest text-ink-50 uppercase mt-2">
            — NEELAM MADHU MUDIRAJ
          </span>
        </motion.div>
      </motion.div>

      {/* RIGHT SECTION (5 COLS on lg) - Aesthetic Portal panel */}
      <div className="lg:col-span-5 bg-ink relative min-h-[450px] lg:min-h-0 flex flex-col justify-between p-8 md:p-12 lg:p-16 select-none overflow-hidden group">
        
        {/* Background Rally Image with subtle monochrome opacity that scales on group hover */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200" 
            alt="Crowd Rally Overlay"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale opacity-[0.12] contrast-150 transition-transform duration-1000 ease-out scale-100 group-hover:scale-110"
          />
        </div>

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
        <div className="absolute top-10 right-0 py-1.5 px-6 bg-saffron-light/10 border-l border-saffron text-saffron-mid text-[10px] tracking-widest font-mono uppercase transition-colors duration-300 group-hover:bg-saffron/10">
          MEDAK 2024 CANDIDATE
        </div>

        {/* Centered Decorative Monogram Placeholder for Photo */}
        <motion.div 
          variants={portalVariants}
          initial="hidden"
          animate="visible"
          className="my-auto flex flex-col items-center justify-center relative py-12 z-10"
        >
          {/* Framed Circle */}
          <div 
            onClick={() => setIsPortfolioOpen(true)}
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border border-saffron-mid/20 flex items-center justify-center relative p-2 shadow-2xl backdrop-blur-sm transition-transform duration-500 group-hover:scale-[1.04] group-hover:border-saffron/40 cursor-zoom-in"
            title="Click to view official campaign portfolio photo"
            id="campaign-portrait-trigger"
          >
            {/* Spinning decorative orbit border */}
            <div className="absolute inset-0 rounded-full border border-dashed border-saffron/30 animate-[spin_100s_linear_infinite] group-hover:animate-[spin_40s_linear_infinite] group-hover:border-saffron/60" />
            
            {/* Inner portrait container of Neelam Madhu Mudiraj */}
            <div className="w-full h-full rounded-full overflow-hidden relative border border-saffron/20 bg-ink">
              <img 
                src={heroImageSrc}
                alt="Neelam Madhu Mudiraj dynamic campaign portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0E0B]/90 via-[#0F0E0B]/35 to-transparent flex flex-col items-center justify-end pb-5 transition-opacity duration-300">
                <span className="text-[#FAF7F2] text-[11px] font-semibold tracking-widest font-mono uppercase">
                  NEELAM MADHU
                </span>
                <span className="text-saffron-mid text-[8px] tracking-widest uppercase font-mono font-medium mt-0.5">
                  MUDIRAJ
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs font-mono tracking-widest text-[#FAF7F2]/40 uppercase transition-colors duration-300 group-hover:text-saffron-mid cursor-pointer" onClick={() => setIsPortfolioOpen(true)}>
              [ CLICK TO ENLARGE PORTRAIT ]
            </p>
          </div>
        </motion.div>

        {/* Bottom Floating Stats - Grid Layout with clear fine lines */}
        <motion.div 
          variants={statsGridVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full bg-[#FAF7F2] border border-ink/10 p-4 shadow-xl grid grid-cols-3 text-center transition-transform duration-500 group-hover:translate-y-[-4px] group-hover:shadow-2xl" 
          style={{ borderWidth: '0.5px' }}
        >
          
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

        </motion.div>

      </div>

      {/* PORTFOLIO LIGHTBOX VIEW */}
      <AnimatePresence>
        {isPortfolioOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/90 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6"
            onClick={() => setIsPortfolioOpen(false)}
            id="portfolio-lightbox"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-parchment max-w-4xl w-full border border-saffron-mid/20 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 text-ink"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Column */}
              <div className="relative h-72 md:h-[500px] bg-ink">
                <img 
                  src={lightboxImageSrc}
                  alt="Neelam Madhu Mudiraj Close Up Portfolio Photograph"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-6">
                  <div>
                    <span className="text-saffron font-semibold tracking-widest text-xs uppercase block">
                      OFFICIAL CAMPAIGN COVER
                    </span>
                    <h4 className="text-parchment font-serif text-2xl font-bold mt-1">
                      Neelam Madhu Mudiraj
                    </h4>
                  </div>
                </div>
              </div>

              {/* Text / Stats Details Column */}
              <div className="p-6 md:p-10 flex flex-col justify-between relative bg-parchment">
                
                {/* Close Button */}
                <button 
                  onClick={() => setIsPortfolioOpen(false)}
                  className="absolute top-4 right-4 text-ink/40 hover:text-saffron hover:rotate-90 transition-all duration-300 p-2"
                  aria-label="Close portfolio view"
                  id="close-lightbox"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-saffron uppercase block">
                      INDIAN NATIONAL CONGRESS
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif text-ink font-bold tracking-tight mt-1">
                      Campaign Portrait Dossier
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-ink-80 leading-relaxed font-sans">
                    Captured during his active constituency outreach program across Medak, Telangana. 
                    This official campaign cover highlights his warm accessibility, deep integrity, 
                    and persistent grassroots commitment to public representation.
                  </p>

                  <div className="border-t border-b border-ink/10 py-4 my-2 grid grid-cols-2 gap-4" style={{ borderWidth: '0.5px 0' }}>
                    <div>
                      <span className="block text-[10px] tracking-widest text-ink-50 uppercase font-mono">
                        POLITICAL PARTY
                      </span>
                      <span className="block text-sm font-serif font-bold text-ink mt-0.5">
                        Congress (INC)
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-widest text-ink-50 uppercase font-mono">
                        NATIVE DISTRICT
                      </span>
                      <span className="block text-sm font-serif font-bold text-ink mt-0.5">
                        Sangareddy, TS
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-widest text-ink-50 uppercase font-mono">
                        KEY CONSTITUENCY
                      </span>
                      <span className="block text-sm font-serif font-bold text-ink mt-0.5">
                        Patancheru / Medak
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] tracking-widest text-ink-50 uppercase font-mono">
                        DEMOCRATIC RUN
                      </span>
                      <span className="block text-sm font-serif font-bold text-ink mt-0.5">
                        Lok Sabha 2024
                      </span>
                    </div>
                  </div>

                  {/* Social Handles */}
                  <div className="space-y-2">
                    <span className="block text-[10px] tracking-widest text-ink-50 uppercase font-mono">
                      OFFICIAL SOCIAL HUBS
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs text-ink-80">
                      <span className="bg-ink/5 px-2.5 py-1 border border-ink/10 text-[10px] tracking-wider font-mono">
                        FB: /neelammadhu
                      </span>
                      <span className="bg-ink/5 px-2.5 py-1 border border-ink/10 text-[10px] tracking-wider font-mono">
                        X: @neelammadhu
                      </span>
                      <span className="bg-ink/5 px-2.5 py-1 border border-ink/10 text-[10px] tracking-wider font-mono">
                        IG: @neelammadhumudiraj
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <button 
                    onClick={() => setIsPortfolioOpen(false)}
                    className="w-full bg-saffron text-parchment text-xs font-semibold tracking-widest uppercase py-3 border border-saffron hover:bg-transparent hover:text-saffron transition-all duration-300"
                  >
                    RETURN TO OVERVIEW
                  </button>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
