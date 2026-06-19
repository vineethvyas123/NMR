import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Users, 
  Coins, 
  Landmark, 
  Map, 
  Milestone,
  CheckCircle2
} from "lucide-react";

interface FactItemProps {
  icon: any;
  label: string;
  value: string;
  subtitle?: string;
  highlight?: string;
  color?: string;
}

function FactItem({ icon: Icon, label, value, subtitle, highlight, color = "" }: FactItemProps) {
  return (
    <motion.div 
      whileHover={{ y: -3, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 350, damping: 20 }}
      className={`bg-theme-white border border-ink/5 p-4 md:p-5 rounded-2xl shadow-[0_2px_10px_rgba(40,30,20,0.01)] hover:shadow-[0_12px_24px_rgba(40,30,20,0.04)] hover:border-saffron/30 transition-all duration-300 flex items-start space-x-3.5 cursor-pointer md:cursor-default select-none ${color}`}
      style={{ borderWidth: '0.5px' }}
    >
      <div className="p-3 rounded-xl bg-parchment-dark/70 text-ink-80 mt-0.5 group-hover:bg-saffron-light/50 group-hover:text-saffron-mid transition-colors duration-300">
        <Icon className="w-5 h-5 stroke-[1.5]" />
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[9px] font-mono tracking-widest text-[#7A7468]/95 uppercase font-semibold block">
          {label}
        </span>
        <span className="font-serif text-sm md:text-base text-ink font-bold mt-1.5 block leading-snug">
          {value}
        </span>
        {subtitle && (
          <span className="text-xs text-[#7D7667] mt-0.5 block font-sans">
            {subtitle}
          </span>
        )}
        {highlight && (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mt-2 rounded-full bg-saffron-light/50 text-[10px] text-saffron-mid font-semibold font-sans">
            <span className="w-1.5 h-1.5 rounded-full bg-saffron animate-pulse" />
            {highlight}
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"political" | "personal">("political");

  return (
    <section className="py-20 md:py-28 bg-parchment border-b border-ink/5" id="about" style={{ borderBottomWidth: '0.5px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.3em] text-saffron uppercase block mb-3">
              THE MAN & THE MISSION
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ink font-semibold">
              The Journey of a Grassroots Leader
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <span className="font-mono text-xs text-ink-50 uppercase tracking-widest">
              PROFILE & CONSTITUENCY FACT SHEET
            </span>
          </div>
        </div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-start">
          
          {/* LEFT COLUMN: Editorial Bio Prose */}
          <div className="lg:col-span-7 space-y-6 text-sm md:text-base leading-relaxed text-ink-80">
            <div className="border-l-2 border-saffron pl-6 py-1 select-none">
              <p className="font-serif italic text-xl md:text-2xl text-ink leading-normal">
                "Leadership is not a title bestowed in hallways of privilege. It is earned step-by-step on the dry soil of our fields, listening to the heartbeat of every family."
              </p>
            </div>

            <p className="pt-4">
              Born in the historic, quiet village of <strong className="font-semibold text-ink">Chitkul</strong> in Patancheru, Neelam Madhu Mudiraj's political origins are pure grassroots. Without any hereditary lineage or corporate backing, his political career began simply as an active, responsive member of his immediate local community. In the early stages, he was elected as a <strong>Ward Member</strong>, where he dedicated his energy to resolving water distribution crises, securing power grids, and negotiating disputes for daily workers.
            </p>

            <p>
              His work resonated deeply, leading to his subsequent election as the village <strong>Sarpanch of Chitkul</strong>. Under his stewardship, the local gram panchayat became a beacon of development in Telangana. He oversaw major infrastructure overhauls—including durable village layouts, upgraded secondary school classrooms, and accessible public healthcare links. His performance proved that true governance resides in proximity to the people.
            </p>

            <p>
              As a champion of the <strong>Mudiraj community (OBC)</strong> and other backward classes, Madhu expanded his horizon to lead mass movements across Patancheru and Sangareddy. Joining the Indian National Congress (INC) in 2023, his alignment with high command values culminated in his selection as the 2024 Lok Sabha Candidate for Medak. There, he won the trust of <strong>4,32,078 citizens</strong>, cementing his status as a permanent, indispensable pillar of hope and public service in Telangana.
            </p>
          </div>

          {/* RIGHT COLUMN: Catchy visual profile dossier and metrics cards */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#FAF7F2] to-[#F3EEE4] border border-ink/10 p-6 md:p-8 rounded-2xl shadow-[0_12px_45px_rgba(40,30,20,0.06)] relative overflow-hidden">
            
            {/* Subtle visual watermark container */}
            <div className="absolute -bottom-8 -right-8 text-[120px] font-bold text-ink/2 font-serif pointer-events-none select-none">
              NMM
            </div>

            <div className="flex items-center justify-between border-b border-ink/10 pb-5 mb-6">
              <div>
                <h3 className="font-serif text-[15px] md:text-lg tracking-wide text-ink font-semibold uppercase">
                  LEADERSHIP DOSSIER
                </h3>
                <p className="text-[10px] text-ink-50 font-mono tracking-widest mt-0.5 uppercase">
                  Patancheru & Medak Constituency
                </p>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-widest bg-emerald-500/10 text-emerald-700 uppercase border border-emerald-500/20">
                <CheckCircle2 className="w-3 h-3" />
                Verified
              </span>
            </div>

            {/* Micro Highlight Statistics Row */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-theme-white border border-ink/5 p-3 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-saffron to-amber-500" />
                <Users className="w-4 h-4 mx-auto text-saffron mb-1.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-serif text-base md:text-lg font-bold text-ink block leading-none">
                  4.32L+
                </span>
                <span className="font-sans text-[8px] tracking-wider text-[#7A7468] uppercase font-semibold block mt-1.5 leading-tight">
                  Election Votes
                </span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-theme-white border border-ink/5 p-3 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
                <Coins className="w-4 h-4 mx-auto text-[#138808] mb-1.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-serif text-base md:text-lg font-bold text-ink block leading-none">
                  ₹15.4Cr
                </span>
                <span className="font-sans text-[8px] tracking-wider text-[#7A7468] uppercase font-semibold block mt-1.5 leading-tight">
                  Declared Assets
                </span>
              </motion.div>

              <motion.div 
                whileHover={{ y: -4 }}
                className="bg-theme-white border border-ink/5 p-3 rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.015)] text-center relative overflow-hidden group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />
                <Milestone className="w-4 h-4 mx-auto text-blue-600 mb-1.5 transition-transform duration-300 group-hover:scale-110" />
                <span className="font-serif text-base md:text-lg font-bold text-ink block leading-none">
                  100%
                </span>
                <span className="font-sans text-[8px] tracking-wider text-[#7A7468] uppercase font-semibold block mt-1.5 leading-tight">
                  Grassroots
                </span>
              </motion.div>
            </div>

            {/* Tab Selector */}
            <div className="flex bg-ink/5 p-1 rounded-xl mb-6 border border-ink/5">
              <button
                onClick={() => setActiveTab("political")}
                className={`flex-1 py-2 rounded-lg font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === "political"
                    ? "bg-theme-white text-ink shadow-[0_2px_8px_rgba(40,30,20,0.08)]"
                    : "text-[#7A7468] hover:text-ink hover:bg-theme-white/30"
                }`}
              >
                🗺️ Constituency Impact
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`flex-1 py-2 rounded-lg font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  activeTab === "personal"
                    ? "bg-theme-white text-ink shadow-[0_2px_8px_rgba(40,30,20,0.08)]"
                    : "text-[#7A7468] hover:text-ink hover:bg-theme-white/30"
                }`}
              >
                🪪 Personal Dossier
              </button>
            </div>

            {/* Animated Table Fields */}
            <div className="min-h-[290px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: activeTab === "political" ? -15 : 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: activeTab === "political" ? 15 : -15 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="space-y-3"
                >
                  {activeTab === "political" ? (
                    <>
                      <FactItem 
                        icon={Landmark} 
                        label="POLITICAL PARTY" 
                        value="Indian National Congress (INC)" 
                        highlight="State Congress Leader" 
                        color="border-l-[3px] border-[#138808]" 
                      />
                      <FactItem 
                        icon={Map} 
                        label="PRIMARY CONSTITUENCY" 
                        value="Medak Parliamentary Constituency" 
                        subtitle="Key political and cultural belt of Telangana" 
                        color="border-l-[3px] border-saffron" 
                      />
                      <FactItem 
                        icon={MapPin} 
                        label="NATIVE ROOTS" 
                        value="Chitkul, Patancheru" 
                        subtitle="Native village of political origin and public rise" 
                        color="border-l-[3px] border-blue-500" 
                      />
                      <FactItem 
                        icon={Briefcase} 
                        label="CURRENT PROFESSION" 
                        value="Publicist, Social Advocate & Agriculturist" 
                        color="border-l-[3px] border-emerald-500" 
                      />
                    </>
                  ) : (
                    <>
                      <FactItem 
                        icon={User} 
                        label="FULL NAME" 
                        value="Neelam Madhu Mudiraj" 
                        color="border-l-[3px] border-slate-500" 
                      />
                      <FactItem 
                        icon={User} 
                        label="FATHER" 
                        value="Neelam Nirmal" 
                        color="border-l-[3px] border-amber-500" 
                      />
                      <FactItem 
                        icon={Calendar} 
                        label="AGE" 
                        value="43 Years" 
                        subtitle="Two decades of active regional social service" 
                        color="border-l-[3px] border-rose-500" 
                      />
                      <FactItem 
                        icon={Users} 
                        label="COMMUNITY VOICE" 
                        value="Mudiraj (OBC Category)" 
                        highlight="Backward Class & SC Welfare Leader" 
                        color="border-l-[3px] border-purple-500" 
                      />
                      <FactItem 
                        icon={Coins} 
                        label="DECLARED ASSETS" 
                        value="₹15.4 Crore Value Filed" 
                        subtitle="Complete transparency via 2024 Lok Sabha declaration" 
                        color="border-l-[3px] border-teal-500" 
                      />
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 pt-5 border-t border-ink/10 text-center" style={{ borderTopWidth: '0.5px' }}>
              <span className="font-mono text-[9px] tracking-[0.2em] text-[#7A7468] uppercase font-bold">
                Certified Election Commission Archives
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
