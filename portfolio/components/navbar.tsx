"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed w-full z-50 bg-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-white font-bold text-xl">
              {"<NishitaAmara/>"}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-rose-400 transition">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-rose-400 transition">
              About
            </Link>
            <Link href="/projects" className="text-white hover:text-rose-400 transition">
              Projects
            </Link>
            <Link href="/achievements" className="text-white hover:text-rose-400 transition">
              Achievements
            </Link>
            <Link href="/contact" className="text-white hover:text-rose-400 transition">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://www.linkedin.com/in/nishita-amara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rose-400 transition"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="https://github.com/2200032172"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-rose-400 transition"
            >
              <Github size={20} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-rose-400 transition">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md" onClick={toggleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/projects"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              href="/achievements"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={toggleMenu}
            >
              Achievements
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-white hover:bg-gray-800 rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>

            <div className="flex space-x-4 px-3 py-2">
              <Link
                href="https://www.linkedin.com/in/nishita-amara/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="https://github.com/2200032172"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-400 transition"
              >
                <Github size={20} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
