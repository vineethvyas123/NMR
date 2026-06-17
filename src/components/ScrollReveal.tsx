import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number; // millisecond delay
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => {
              setIsIntersecting(true);
            }, delay);
          } else {
            setIsIntersecting(true);
          }
          // Once it has been revealed, keep it visible
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05, // trigger when at least 5% is visible
        rootMargin: "0px 0px -40px 0px", // triggers slightly before entering view fully
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isIntersecting 
          ? "opacity-100 translate-y-0 filter-none" 
          : "opacity-0 translate-y-12 blur-[1px]"
      } ${className}`}
    >
      {children}
    </div>
  );
}
