import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container text-center mx-auto px-6">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Muhammad Safian. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Building useful web applications with clean code and care.{" "}
        </p>
      </div>

      <button
        onClick={scrollToTop}
        className={`fixed right-10 bottom-10 h-10 w-10 rounded-full glass flex items-center justify-center z-[100] transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ArrowUp width={20} height={20} />
      </button>
    </footer>
  );
};