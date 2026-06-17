import { FACT_ROWS } from "../data";

export default function AboutSection() {
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
            <span className="font-mono text-xs text-ink-50 uppercase tracking-wider">
              PROFILE & CONSTITUENCY FACT SHEET
            </span>
          </div>
        </div>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-start">
          
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
              As a champion of the <strong>Mudiraj community (OBC)</strong> and other backward classes, Madhu expanded his horizon to lead mass movements across Patancheru and Sangareddy. Joining the Indian National Congress (INC) in 2023, he alignment with high command values culminated in his selection as the 2024 Lok Sabha Candidate for Medak. There, he won the trust of <strong>4,32,078 citizens</strong>, cementing his status as a permanent, indispensable pillar of hope and public service in Telangana.
            </p>
          </div>

          {/* RIGHT COLUMN: Highly Refined Borderless Profile Fact Table */}
          <div className="lg:col-span-5 bg-parchment-dark/40 border border-ink/5 p-6 md:p-8" style={{ borderWidth: '0.5px' }}>
            <h3 className="font-serif text-lg tracking-wider text-ink font-semibold uppercase mb-6 border-b border-ink/10 pb-3" style={{ borderBottomWidth: '0.5px' }}>
              OFFICIAL LEADERSHIP DOSSIER
            </h3>
            
            <div className="divide-y divide-ink/10" style={{ contentVisibility: 'auto' }}>
              {FACT_ROWS.map((row) => (
                <div key={row.label} className="py-3 flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <span className="font-sans text-[10px] tracking-widest text-ink-50 uppercase font-medium">
                    {row.label}
                  </span>
                  <span className="font-serif text-sm md:text-base text-ink-80 font-semibold text-right max-w-[280px]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-ink/10 text-center" style={{ borderTopWidth: '0.5px' }}>
              <div className="inline-flex items-center space-x-2 text-[10px] tracking-widest text-saffron uppercase font-semibold">
                <span>CERTIFIED BY LOK SABHA ELECTION COMMISSION</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
