
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Get current scroll position
      const currentPos = window.scrollY + 100;
      
      // Find which section is in view
      const sections = navigation.map(nav => {
        const section = document.querySelector(nav.href);
        if (!section) return { id: nav.href, top: 0, bottom: 0 };
        const rect = section.getBoundingClientRect();
        return {
          id: nav.href,
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      });
      
      const current = sections.find(section => currentPos >= section.top && currentPos <= section.bottom);
      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navigation]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "py-4 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-lg md:text-xl font-semibold tracking-tight"
        >
          Quang Chuc
        </a>
        
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="p-2 rounded-md">
            <span className="sr-only">Open menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
