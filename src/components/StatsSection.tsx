export default function StatsSection() {
  return (
    <section className="bg-ink text-parchment py-16 md:py-24 relative overflow-hidden" id="stats">
      {/* Background aesthetics */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-color-dodge">
        <div className="absolute top-10 right-20 w-96 h-96 bg-saffron rounded-full filter blur-[100px]" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-congress-green rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 select-none">
        
        {/* Intro descriptor block */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold tracking-[0.3em] text-saffron-mid uppercase block mb-3">
            MASSIVE ELECTORAL MANDATE
          </span>
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight text-white font-semibold">
            The Metric of Public Trust
          </h2>
          <p className="mt-3 text-sm md:text-base text-parchment-dark/70 font-sans leading-relaxed">
            The 2024 general election votes in Medak represent more than mere statistics—they stand as a testament to the broad-based love, hope, and aspirations of over four-hundred thousand citizens.
          </p>
        </div>

        {/* 3-Cell Grid Layout with fine hairline border separators */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-y border-[#3d3830]" style={{ borderTopWidth: '0.5px', borderBottomWidth: '0.5px' }}>
          
          {/* Cell 1: Total Votes */}
          <div className="px-6 py-10 md:py-14 text-center border-b md:border-b-0 md:border-r border-[#3d3830] transition-all duration-300 hover:bg-[#151411] cursor-default group" style={{ borderRightWidth: '0.5px', borderBottomWidth: '0.5px' }}>
            <span className="text-xs font-sans tracking-[0.2em] text-[#7A7468] uppercase block mb-4 transition-colors duration-300 group-hover:text-saffron-mid">
              PEOPLE'S TRUST VOTES
            </span>
            <span className="font-serif text-5xl lg:text-7xl font-semibold text-saffron-mid leading-none tracking-tight block transition-transform duration-500 group-hover:scale-[1.03] group-hover:text-saffron">
              4,32,078
            </span>
            <span className="text-[11px] font-sans tracking-widest text-[#FAF7F2]/50 block mt-4 uppercase transition-colors duration-300 group-hover:text-white/80">
              ACTUAL MANDATE POLL COUNT
            </span>
          </div>

          {/* Cell 2: Margin Gap */}
          <div className="px-6 py-10 md:py-14 text-center border-b md:border-b-0 md:border-r border-[#3d3830] transition-all duration-300 hover:bg-[#151411] cursor-default group" style={{ borderRightWidth: '0.5px', borderBottomWidth: '0.5px' }}>
            <span className="text-xs font-sans tracking-[0.2em] text-[#7A7468] uppercase block mb-4 transition-colors duration-300 group-hover:text-white">
              COMPETITIVE MARGIN GAP
            </span>
            <span className="font-serif text-5xl lg:text-7xl font-semibold text-white leading-none tracking-tight block transition-transform duration-500 group-hover:scale-[1.03] group-hover:text-saffron-mid">
              39,139
            </span>
            <span className="text-[11px] font-sans tracking-widest text-[#FAF7F2]/50 block mt-4 uppercase transition-colors duration-300 group-hover:text-white/80">
              CLOSEST RUNNER THRESHOLD
            </span>
          </div>

          {/* Cell 3: Constituency Seat */}
          <div className="px-6 py-10 md:py-14 text-center transition-all duration-300 hover:bg-[#151411] cursor-default group">
            <span className="text-xs font-sans tracking-[0.2em] text-[#7A7468] uppercase block mb-4 transition-colors duration-300 group-hover:text-congress-green">
              HISTORIC CONSTITUENCY
            </span>
            <span className="font-serif text-5xl lg:text-7xl font-semibold text-congress-green leading-none tracking-tight block transition-transform duration-500 group-hover:scale-[1.03] group-hover:text-saffron">
              Medak
            </span>
            <span className="text-[11px] font-sans tracking-widest text-[#FAF7F2]/50 block mt-4 uppercase transition-colors duration-300 group-hover:text-white/80">
              TELANGANA GENERAL ASSEMBLY SEAT
            </span>
          </div>

        </div>

        {/* Footnote quote */}
        <div className="mt-12 text-center max-w-lg mx-auto select-none">
          <p className="font-serif italic text-sm text-[#7A7468] leading-relaxed">
            "Every single vote cast is a direct oath of trust. I carry these names in my daily mission to bring equitable resources, clean pipelines, and reservation protective policies to our people."
          </p>
        </div>

      </div>
    </section>
  );
}
