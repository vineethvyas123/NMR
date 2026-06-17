import { useState } from "react";

interface MomentItem {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string;
  aspectClass: string; // Tailwind aspect ratios or custom height
}

export default function MomentsSection() {
  const [activeMoment, setActiveMoment] = useState<MomentItem | null>(null);

  const moments: MomentItem[] = [
    {
      id: "moment-1",
      title: "Chitkul Townhall Dialogue",
      category: "COMMUNITY ENGAGEMENT",
      date: "January 14, 2024",
      location: "Chitkul Gram Panchayat",
      imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
      description: "Engaging directly with over four hundred local residents and farming representatives of Chitkul to understand primary water sanitation and localized crop storage infrastructure requests.",
      aspectClass: "aspect-[3/4]"
    },
    {
      id: "moment-2",
      title: "Grassroots Farmers' Assembly",
      category: "PUBLIC ADVOCACY",
      date: "February 22, 2024",
      location: "Patancheru Rural Outskirts",
      imageUrl: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
      description: "A deep discussion with smallholder farmers from Patancheru concerning chemical run-offs from adjacent industrial units and advocating for immediate compensation protocols.",
      aspectClass: "aspect-[4/3]"
    },
    {
      id: "moment-3",
      title: "Historic Medak Public Address",
      category: "LOK SABHA CAMPAIGN",
      date: "April 18, 2024",
      location: "Medak Assembly Ground",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
      description: "Addressing the massive general election rally in Medak. Outlining the secular developmental agenda and pledging key protective systems for women-led village cooperative groups.",
      aspectClass: "aspect-[16/9]"
    },
    {
      id: "moment-4",
      title: "INC State Leaders' Session",
      category: "CONGRESS STRATEGY",
      date: "November 28, 2023",
      location: "Gandhi Bhavan, Hyderabad",
      imageUrl: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
      description: "Coordinating strategic backward class mobilization schemas alongside senior Congress high-command ministers to ensure equitable poll allocations across Telangana.",
      aspectClass: "aspect-[1/1]"
    },
    {
      id: "moment-5",
      title: "Constituent Grievance Desk",
      category: "ACCESSIBLE OFFICE",
      date: "Weekly Consultation",
      location: "Patancheru Main Office",
      imageUrl: "https://images.unsplash.com/photo-1521791136364-7221fdb3d95f?auto=format&fit=crop&q=80&w=800",
      description: "A weekly interactive consultation setup where common citizens present family welfare, educational subsidy, and pension grievances directly without any proxy barriers.",
      aspectClass: "aspect-[3/4]"
    },
    {
      id: "moment-6",
      title: "SC/ST Alliance Roundtable",
      category: "SOCIAL INTEGRATION",
      date: "March 05, 2024",
      location: "Sangareddy District Centre",
      imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800",
      description: "Building an unwavering electoral and social coalition with scheduled caste community representatives to defend basic tenancy rights and equal developmental benefits.",
      aspectClass: "aspect-[4/3]"
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-b border-ink/5" id="moments">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Editorial Section Header */}
        <div className="mb-16 md:mb-20 grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-semibold tracking-[0.3em] text-saffron uppercase block mb-3">
              CANDID ENCOUNTERS
            </span>
            <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-ink font-semibold">
              Public Life in Moments
            </h2>
            <p className="mt-4 text-sm md:text-base text-ink-50 max-w-xl">
              Candid glimpses of interactive consultation, mass assemblies, and strategic state collaborations across Patancheru, Chitkul, and the Medak constituency.
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right hidden lg:block">
            <span className="font-mono text-xs text-ink-50 uppercase tracking-wider">
              DOCUMENTARY PHOTOGRAPHY ARCHIVE
            </span>
          </div>
        </div>

        {/* 3-Column Masonry Grid utilizing CSS Column Count (Best for fluid heights) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {moments.map((moment) => (
            <div 
              key={moment.id}
              onClick={() => setActiveMoment(moment)}
              className="break-inside-avoid bg-[#ffffff] border border-ink/10 p-4 transition-all duration-300 hover:border-saffron/40 hover:-translate-y-1 cursor-pointer group"
              style={{ borderWidth: "0.5px" }}
            >
              {/* Image Frame */}
              <div className={`overflow-hidden bg-[#FAF7F2] relative ${moment.aspectClass} border-b border-ink/5 mb-4`} style={{ borderBottomWidth: "0.5px" }}>
                <img 
                  src={moment.imageUrl} 
                  alt={moment.title} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Floating Category Tag inside image */}
                <div className="absolute top-3 left-3 bg-[#FAF7F2] border border-ink/10 px-2.5 py-1 text-[8px] font-mono tracking-widest uppercase text-ink-80" style={{ borderWidth: "0.5px" }}>
                  {moment.category}
                </div>
              </div>

              {/* Title & Coordinates */}
              <div className="space-y-2">
                <div className="flex justify-between items-baseline gap-2">
                  <span className="font-sans text-[9px] tracking-widest text-saffron uppercase font-bold">
                    {moment.date}
                  </span>
                  <span className="font-mono text-[9px] text-ink-50 tracking-wider">
                    {moment.location}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-ink leading-snug group-hover:text-saffron-mid transition-colors duration-200">
                  {moment.title}
                </h3>
                <p className="font-sans text-xs text-ink-50 leading-relaxed line-clamp-2 mt-1">
                  {moment.description}
                </p>
                
                {/* Visual Accent indicator */}
                <div className="pt-2 flex justify-between items-center text-[10px] font-sans tracking-widest uppercase text-ink-50 group-hover:text-saffron transition-colors duration-200">
                  <span>EXPAND MOMENT</span>
                  <svg className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {activeMoment && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-md p-4 select-none animate-fadeIn transition-opacity duration-300"
          onClick={() => setActiveMoment(null)}
          aria-modal="true"
          role="dialog"
        >
          {/* Inner Card Container */}
          <div 
            className="bg-[#FAF7F2] border border-saffron/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col md:grid md:grid-cols-12 relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
            style={{ borderWidth: "0.5px" }}
          >
            {/* Direct Close Button in corner */}
            <button 
              onClick={() => setActiveMoment(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-ink text-parchment hover:bg-saffron flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Left Col (Image): 7cols */}
            <div className="md:col-span-7 bg-ink min-h-[250px] md:min-h-0 relative flex items-center justify-center">
              <img 
                src={activeMoment.imageUrl} 
                alt={activeMoment.title} 
                referrerPolicy="no-referrer"
                className="max-h-[60vh] md:max-h-[85vh] w-full object-contain"
              />
            </div>

            {/* Right Col (Dossier detail text): 5cols */}
            <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-between bg-[#FAF7F2]">
              <div className="space-y-4">
                <div className="inline-block bg-saffron-light border border-saffron-mid/20 px-3 py-1 text-[9px] font-mono tracking-widest text-saffron uppercase" style={{ borderWidth: "0.5px" }}>
                  {activeMoment.category}
                </div>
                
                <h3 className="font-serif text-2xl md:text-3.5xl font-extrabold text-ink leading-tight">
                  {activeMoment.title}
                </h3>
                
                {/* Specific stats and dates with hairlines */}
                <div className="border-y border-ink/10 py-3 space-y-1" style={{ borderTopWidth: "0.5px", borderBottomWidth: "0.5px" }}>
                  <div className="flex justify-between text-xs font-mono text-ink-50">
                    <span>DATE OCCURRED</span>
                    <span className="font-sans font-bold text-ink-80">{activeMoment.date}</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono text-ink-50">
                    <span>LOCATION</span>
                    <span className="font-sans font-bold text-ink-80">{activeMoment.location}</span>
                  </div>
                </div>

                <p className="font-sans text-sm md:text-base text-ink-80 leading-relaxed pt-2">
                  {activeMoment.description}
                </p>
              </div>

              {/* Direct signature watermark */}
              <div className="pt-8 border-t border-ink/10 flex items-center justify-between" style={{ borderTopWidth: "0.5px" }}>
                <div>
                  <p className="font-serif text-sm font-bold text-ink">Peoples Narrative</p>
                  <p className="text-[9px] font-mono tracking-wider text-ink-50">MEDAK DEMOCRACY ARCHIVE</p>
                </div>
                <button 
                  onClick={() => setActiveMoment(null)}
                  className="border border-ink/20 text-[10px] tracking-widest uppercase font-semibold px-4 py-2 hover:bg-saffron hover:text-white transition-all duration-300"
                >
                  CLOSE PICTURE
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
