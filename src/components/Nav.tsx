"use client";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto nav-container relative flex items-center justify-between">
        <a href="/" className="nav-logo font-bold">My Portfolio</a>
        <button
          aria-label="Toggle menu"
          className="hamburger md:hidden"
          onClick={() => setIsMenuOpen((v) => !v)}
        >
          ☰
        </button>
        <ul className={`nav-menu md:flex md:static md:gap-4 ${isMenuOpen ? "open" : ""}`}>
          <li className="py-1 md:py-0"><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li className="py-1 md:py-0"><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
          <li className="py-1 md:py-0"><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
          <li className="py-1 md:py-0"><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li className="py-1 md:py-0"><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
        </ul>
      </div>
    </nav>
  );
}


