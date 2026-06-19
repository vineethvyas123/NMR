import { Facebook, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-ink border-t border-[#3d3830] py-8 select-none" style={{ borderTopWidth: '0.5px' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Logo mark on the left */}
        <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
          <span className="font-serif text-sm font-semibold tracking-wider text-saffron-mid">
            NEELAM MADHU MUDIRAJ
          </span>
          <span className="w-1 h-1 bg-[#7A7468] rounded-full hidden md:inline-block" />
          <span className="font-sans text-[10px] tracking-widest text-[#7A7468] uppercase">
            CONGRESS STATE LEADER • TELANGANA
          </span>
        </div>

        {/* Social Links in the middle */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/nmmfollowers/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A7468] hover:text-saffron-mid hover:scale-110 transition-all duration-300 p-1.5 rounded-full hover:bg-ink-50/10"
            aria-label="Facebook"
            id="footer-facebook"
          >
            <Facebook className="w-4.5 h-4.5" strokeWidth={1.8} />
          </a>
          <a
            href="https://x.com/NMRPTC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7A7468] hover:text-saffron-mid hover:scale-110 transition-all duration-300 p-1.5 rounded-full hover:bg-ink-50/10"
            aria-label="X (formerly Twitter)"
            id="footer-x"
          >
            <Twitter className="w-4.5 h-4.5" strokeWidth={1.8} />
          </a>
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
