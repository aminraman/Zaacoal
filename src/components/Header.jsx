"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      const offset = 80; // header height
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, header");
    const onScroll = () => {
      const scrollPos = window.scrollY + 90;
      sections.forEach((sec) => {
        if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActiveSection(`#${sec.id}`);
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "#home" },
    { label: "About Us", id: "#about" },
    { label: "Products", id: "#products" },
    { label: "Our Process", id: "#process" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Zaacoal Logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-8 text-base font-semibold text-black">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={(e) => handleScroll(e, item.id)}
                className={`hover:text-amber-600 transition ${
                  activeSection === item.id ? "text-amber-600" : ""
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Contact */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full font-medium
                         hover:scale-[1.03] active:scale-[0.99] transition-transform duration-250 shadow-md"
            >
              Contact Us <ArrowRight size={18} />
            </button>
          </div>

          {/* Mobile toggle (hamburger / X) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none z-50 relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              className="md:hidden bg-white h-screen w-full fixed top-0 left-0 z-40 flex flex-col items-center justify-center space-y-6"
            >
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.id}
                  onClick={(e) => handleScroll(e, item.id)}
                  className={`text-2xl font-semibold hover:text-amber-600 transition ${
                    activeSection === item.id ? "text-amber-600" : "text-black"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsOpen(false);
                }}
                className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full font-medium
                           hover:scale-[1.03] active:scale-[0.99] transition-transform duration-250 shadow-md"
              >
                Contact Us <ArrowRight size={18} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
