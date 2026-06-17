import { useEffect } from "react";
import Navigation from "./components/Navigation";
import SplitHero from "./components/SplitHero";
import AboutSection from "./components/AboutSection";
import TimelineSection from "./components/TimelineSection";
import StatsSection from "./components/StatsSection";
import VisionSection from "./components/VisionSection";
import MomentsSection from "./components/MomentsSection";
import CommunitySection from "./components/CommunitySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function App() {
  
  // Smooth scroll handler for anchor navigation links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const navHeight = document.getElementById("main-nav")?.offsetHeight || 70;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - navHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const navHeight = document.getElementById("main-nav")?.offsetHeight || 70;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleScrollToJourney = () => {
    const journeySection = document.getElementById("journey");
    if (journeySection) {
      const navHeight = document.getElementById("main-nav")?.offsetHeight || 70;
      const elementPosition = journeySection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-parchment font-sans text-ink-80 antialiased selection:bg-saffron-light selection:text-saffron">
      
      {/* 1. FIXED TOP NAVIGATION */}
      <Navigation onContactClick={handleScrollToContact} />

      {/* 2. SPLIT-SCREEN HERO SECTION */}
      <SplitHero 
        onJoinClick={handleScrollToContact} 
        onJourneyClick={handleScrollToJourney} 
      />

      {/* 3. ABOUT (GRASSROOTS LEADERSHIP) */}
      <ScrollReveal>
        <AboutSection />
      </ScrollReveal>

      {/* 4. POLITICAL JOURNEY TIMELINE */}
      <ScrollReveal>
        <TimelineSection />
      </ScrollReveal>

      {/* 5. ELECTION STATS (TOTAL VOTES, MARGIN, CONSTITUENCY) */}
      <ScrollReveal>
        <StatsSection />
      </ScrollReveal>

      {/* 6. VISION & CORE PRIORITIES GRID */}
      <ScrollReveal>
        <VisionSection />
      </ScrollReveal>

      {/* NEW: PUBLIC LIFE IN MOMENTS (MASONRY & LIGHTBOX) */}
      <ScrollReveal>
        <MomentsSection />
      </ScrollReveal>

      {/* 7. COMMUNITY CONNECT ALLIANCE PROFILE */}
      <ScrollReveal>
        <CommunitySection />
      </ScrollReveal>

      {/* 8. MEDIA & REFINED CONTACT OUTREACH */}
      <ScrollReveal>
        <ContactSection />
      </ScrollReveal>

      {/* 9. PREMIUM SINGLE LINE FOOTER */}
      <Footer />

    </div>
  );
}
