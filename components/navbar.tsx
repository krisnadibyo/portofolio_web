"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY

      // Show navbar when scrolling up or at the top
      // Hide navbar when scrolling down and not at the top
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10)

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0 text-textDark">
            
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="text-textDark hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link href="#projects" className="text-textDark hover:text-primary transition-colors font-medium">
              Projects
            </Link>
            <Link href="#experiences" className="text-textDark hover:text-primary transition-colors font-medium">
              Experiences
            </Link>
            <Link href="#contact" className="text-textDark hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-textDark p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 px-2 pt-2 pb-4">
              <Link
                href="#about"
                className="text-textDark hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="#projects"
                className="text-textDark hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#experiences"
                className="text-textDark hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Experiences
              </Link>
              <Link
                href="#contact"
                className="text-textDark hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

