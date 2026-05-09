"use client";

import { ThemeToggle } from "./ThemeToggle";
import { Code2 } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md shadow-sm"
          : ""
      }`}
      style={{ backgroundColor: isScrolled ? 'var(--background)' : 'transparent' }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("hero")}>
          <Code2 className="w-8 h-8 animate-float animate-glow hover:rotate-12 hover:scale-110 transition-all duration-300" style={{ color: 'var(--accent)' }} />
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: 'var(--foreground)' }}
            >
              Contact
            </button>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
