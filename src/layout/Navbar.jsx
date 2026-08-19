import { Button } from "@/components/Button";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "../data";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY < 100) {
        setActiveLink("#home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "projects", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink("#" + entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2, 
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  useEffect(() => {
    const setFromHash = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveLink(hash);
      }
    };
    setFromHash();
    window.addEventListener("hashchange", setFromHash);
    return () => window.removeEventListener("hashchange", setFromHash);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass border-0 py-3" : "bg-transparent py-5"
      } z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a className="text-xl font-bold tracking-tight hover:text-primary">
          MS<span className="text-primary">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  if (link.href === "#home")
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  else {
                    const el = document.querySelector(link.href);
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                  setActiveLink(link.href);
                  history.replaceState(null, "", link.href);
                }}
                className={`px-4 py-2 text-sm rounded-full hover:bg-surface transition-colors ${
                  activeLink === link.href
                    ? "text-foreground bg-surface"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Safian62"
              target="_blank"
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/m-safian-aa9619386/"
              target="_blank"
              className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="hidden md:block">
            <a href="/resume.pdf" download="MuhammadSafian">
              <Button size="sm">Resume</Button>
            </a>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in mt-1">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMobileMenuOpen(false);
                  if (link.href === "#home") {
                    setActiveLink("#home");
                    history.replaceState(null, "", "#home");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    return;
                  }
                  const el = document.getElementById(link.href.slice(1));
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    history.replaceState(null, "", link.href);
                    setActiveLink(link.href);
                  }
                }}
                className={`text-lg py-2 transition-colors ${
                  activeLink === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)}>
              {" "}
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
