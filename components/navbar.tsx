"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show navbar when scrolling up or at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);

      // Determine active section based on scroll position
      const sections = ["about", "projects", "experiences", "contact"];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 50 && rect.bottom >= 50) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="backdrop-blur-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              <NavLink href="#about" isActive={activeSection === "about"}>
                About
              </NavLink>
              <NavLink
                href="#projects"
                isActive={activeSection === "projects"}
              >
                Projects
              </NavLink>
              <NavLink
                href="#experiences"
                isActive={activeSection === "experiences"}
              >
                Experiences
              </NavLink>
              <NavLink href="#contact" isActive={activeSection === "contact"}>
                Contact Me
              </NavLink>
              
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-textDark p-2"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4">
              <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
                <MobileNavLink
                  href="#about"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </MobileNavLink>
                <MobileNavLink
                  href="#projects"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </MobileNavLink>
                <MobileNavLink href="#experiences" onClick={() => setIsOpen(false)}>
                  Experiences
                </MobileNavLink>
                <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>
                  Contact Me
                </MobileNavLink>
                </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`
        px-4 py-2 rounded-full text-[#2d3748] font-medium transition-all
        ${isActive ? "bg-white shadow-sm" : "hover:bg-white/50"}
      `}
    >
      {children}
    </Link>
  );
}

interface MobileNavLinkProps {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}

function MobileNavLink({ href, onClick, children }: MobileNavLinkProps) {
  return (
    <Link
      href={href}
      className="block px-4 py-2 text-textDark hover:bg-white/50 rounded-md transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
