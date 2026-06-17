export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-ink border-t border-[#3d3830] py-8 select-none" style={{ borderTopWidth: '0.5px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo mark on the left */}
        <div className="flex items-center space-x-3">
          <span className="font-serif text-sm font-semibold tracking-wider text-saffron-mid">
            NEELAM MADHU MUDIRAJ
          </span>
          <span className="w-1 h-1 bg-[#7A7468] rounded-full hidden md:inline-block" />
          <span className="font-sans text-[10px] tracking-widest text-[#7A7468] uppercase hidden md:inline-block">
            CONGRESS STATE LEADER • TELANGANA
          </span>
        </div>

        {/* Copyright on the right */}
        <div className="text-right">
          <span className="font-mono text-[10px] tracking-widest text-[#7A7468] uppercase">
            © {currentYear} NEELAM MADHU. ALL RIGHTS RESERVED.
          </span>
        </div>

      </div>
    </footer>
  );
}
