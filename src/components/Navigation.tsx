import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

interface NavigationProps {
  onContactClick: () => void;
}

export default function Navigation({ onContactClick }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("nmm-theme");
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("nmm-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "ABOUT", href: "#about" },
    { label: "JOURNEY", href: "#journey" },
    { label: "STATS", href: "#stats" },
    { label: "PRIORITIES", href: "#priorities" },
    { label: "MOMENTS", href: "#moments" },
    { label: "COMMUNITY", href: "#community" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-parchment/80 backdrop-blur-md border-b border-ink/10 py-3 shadow-[0_2px_15px_-3px_rgba(15,14,11,0.05)]"
          : "bg-transparent border-b border-ink/5 py-5"
      }`}
      style={{ borderBottomWidth: "0.5px" }}
      id="main-nav"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo - Classy Serif */}
        <a href="#" className="flex items-center space-x-3.5 group">
          <div className="h-8 md:h-9 px-2 md:px-2.5 border border-saffron flex items-center justify-center font-serif text-xs md:text-sm font-bold tracking-wider text-saffron bg-saffron-light shadow-[inset_0_0_8px_rgba(200,100,10,0.05)] rounded-sm group-hover:bg-saffron group-hover:text-parchment transition-all duration-300">
            NMR
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-wide text-sm md:text-base font-bold uppercase text-ink group-hover:text-saffron transition-colors duration-300 leading-snug">
              Neelam Madhu <span className="text-saffron">Mudiraj</span>
            </span>
            <span className="text-[9px] md:text-[10px] tracking-[0.18em] text-ink-50 uppercase mt-0.5 font-sans font-semibold flex items-center gap-1.5 transition-colors duration-300 group-hover:text-ink-80">
              <span className="w-1 h-1 rounded-full bg-saffron animate-pulse" />
              PEOPLE'S LEADER • MEDAK
            </span>
          </div>
        </a>

        {/* Desktop Links - Spaced, Uppercase DM Sans */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs font-medium tracking-widest text-ink-80 hover:text-saffron transition-colors relative py-1 group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-saffron transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          {/* Elegant Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-ink-80 hover:text-saffron p-2 transition-colors duration-300 rounded-full hover:bg-ink-50/10 focus:outline-none flex items-center justify-center cursor-pointer"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            id="theme-toggle-desktop"
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" strokeWidth={1.8} />
            ) : (
              <Sun className="w-4 h-4 text-saffron-mid animate-pulse" strokeWidth={1.8} />
            )}
          </button>

          <button
            onClick={onContactClick}
            className="border border-saffron text-[11px] font-medium tracking-widest uppercase px-4 py-2 hover:bg-saffron hover:text-parchment transition-all duration-300"
            style={{ borderWidth: "1px" }}
          >
            CONNECT NOW
          </button>
        </div>

        {/* Mobile Theme Toggle & Menu Hamburger Controls */}
        <div className="flex items-center space-x-4 lg:hidden">
          <button
            onClick={toggleTheme}
            className="text-ink-80 hover:text-saffron p-2 transition-colors duration-300 rounded-full hover:bg-ink-50/10 focus:outline-none flex items-center justify-center cursor-pointer"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            id="theme-toggle-mobile"
          >
            {theme === "light" ? (
              <Moon className="w-5 h-5" strokeWidth={1.8} />
            ) : (
              <Sun className="w-5 h-5 text-saffron-mid animate-pulse" strokeWidth={1.8} />
            )}
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-ink p-1 focus:outline-none"
            aria-label="Toggle Menu"
          >
          {isMobileMenuOpen ? (
            // Close icon path
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // Menu hamburger path
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
              strokeLinejoin="miter"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-parchment border-b border-ink/10 px-6 py-6 flex flex-col space-y-4 shadow-xl z-40 transition-all duration-300">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-semibold tracking-widest text-ink-80 hover:text-saffron transition-colors border-b border-ink/5 pb-2"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onContactClick();
            }}
            className="w-full border border-saffron text-xs font-semibold tracking-widest uppercase py-3 text-center bg-saffron text-parchment hover:bg-saffron/90 transition-all duration-300"
          >
            CONNECT NOW
          </button>
        </div>
      )}
    </nav>
  );
}
