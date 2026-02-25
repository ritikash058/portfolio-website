import React, { useState, useEffect } from "react";
import { NavLink } from "./Navbar";
import { MobileNavLink } from "./Navbar";
import { MenuIcon, CloseIcon } from "@/utils/icon";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

const MasterLayout = ({ children }: any) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Set active section based on current pathname
  useEffect(() => {
    if (pathname === "/skills") {
      setActiveSection("skills");
    } else if (pathname === "/projects") {
      setActiveSection("projects");
    } else if (pathname === "/") {
      setActiveSection("home");
    }
  }, [pathname]);

  return (
    <>
      <nav className="bg-[#e3effa] shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="/skills" active={activeSection === "skills"}>
                Skills
              </NavLink>
              <NavLink href="/projects" active={activeSection === "projects"}>
                Projects
              </NavLink>
              <NavLink href="/" active={activeSection === "home"}>
                <p className="icon">R</p>
              </NavLink>
              <NavLink href="#contact" active={activeSection === "contact"}>
                Contact
              </NavLink>
              <NavLink href="/Resume.pdf" target="_blank">
                Resume
              </NavLink>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavLink href="/" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>

              <MobileNavLink
                href="#skills"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </MobileNavLink>
              <MobileNavLink
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </MobileNavLink>
              <MobileNavLink
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </MobileNavLink>
              <MobileNavLink href="/Resume.pdf" target="_blank">
                Resume
              </MobileNavLink>
            </div>
          </div>
        )}
      </nav>
      <main className="bg">{children}</main>
      <Footer />
    </>
  );
};

export default MasterLayout;
