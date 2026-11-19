"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";
import logo from "../../../public/107.jpg";

const navLinks = [
  { title: "About",      path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects",   path: "#projects" },
  { title: "Contact",    path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-white/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src={logo.src}
            width={500}
            height={500}
            alt="Vishal Kundu"
            className="w-10 h-10 object-cover rounded-full ring-2 ring-primary-200 group-hover:ring-primary-400 transition-all"
          />
          <span className="hidden sm:block text-sm font-bold text-slate-800 group-hover:text-primary-600 transition-colors">
            Vishal Kundu
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink key={link.path} href={link.path} title={link.title} />
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full border-2 border-primary-400 text-primary-600 hover:bg-primary-50 transition-colors"
          >
            Resume
          </Link>
          <Link
            href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-sm hover:shadow-md hover:shadow-primary-200 transition-all"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors"
          aria-label="Toggle menu"
        >
          {navbarOpen ? (
            <XMarkIcon className="h-5 w-5" />
          ) : (
            <Bars3Icon className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {navbarOpen && <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />}
    </nav>
  );
};

export default Navbar;
