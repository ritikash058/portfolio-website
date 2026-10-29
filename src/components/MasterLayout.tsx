"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { NavLink, MobileNavLink } from "./Navbar";
import { MenuIcon, CloseIcon } from "@/utils/icon";
import Footer from "./Footer";

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout = ({ children }: MasterLayoutProps) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 
  const pathname = usePathname();

  // detect scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll(); // run once on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Set active section based on pathname + scroll position
  useEffect(() => {
    if (pathname === "/skills") return setActiveSection("skills");
    if (pathname === "/projects") return setActiveSection("projects");

    if (pathname === "/") {
      const sections = ["home", "skills", "projects", "contact"]
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id);
          });
        },
        { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
      );

      sections.forEach((s) => observer.observe(s));
      return () => sections.forEach((s) => observer.unobserve(s));
    }
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ease-out ${
          scrolled
            ? "bg-[#EEF3FB]/70 backdrop-blur-md backdrop-saturate-150 shadow-[0_1px_0_rgba(15,23,42,0.06)]"
            : "bg-[#EEF3FB]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink
                href="/skills"
                active={activeSection === "skills"}
                onClick={(e:any) => handleAnchorClick(e, "/skills")}
              >
                Skills
              </NavLink>

              <NavLink
                href="/projects"
                active={activeSection === "projects"}
                onClick={(e:any) => handleAnchorClick(e, "/projects")}
              >
                Projects
              </NavLink>

              <NavLink href="/" active={activeSection === "home"}>
                <p className="icon">R</p>
              </NavLink>

              <NavLink
                href="#contact"
                active={activeSection === "contact"}
                onClick={(e:any) => handleAnchorClick(e, "#contact")}
              >
                Contact
              </NavLink>

              <NavLink href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center justify-between w-full">
              <NavLink href="/" active={activeSection === "home"}>
                <p className="icon">R</p>
              </NavLink>
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[#e3effa]/90 backdrop-blur-md shadow-lg px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
              Home
            </MobileNavLink>

            <MobileNavLink
              href="#skills"
              onClick={(e:any) => handleAnchorClick(e, "#skills")}
            >
              Skills
            </MobileNavLink>

            <MobileNavLink
              href="#projects"
              onClick={(e:any) => handleAnchorClick(e, "#projects")}
            >
              Projects
            </MobileNavLink>

            <MobileNavLink
              href="#contact"
              onClick={(e:any) => handleAnchorClick(e, "#contact")}
            >
              Contact
            </MobileNavLink>

            <MobileNavLink
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </MobileNavLink>
          </div>
        </div>
      </nav>

      <main className="bg min-h-screen overflow-x-hidden">{children}</main>

      <Footer />
    </>
  );
};

export default MasterLayout;