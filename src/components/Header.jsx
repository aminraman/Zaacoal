"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "@/components/ContactModal";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-white/50 backdrop-blur-sm z-50"
      >
        {/* Main container */}
        <div className="w-full flex items-center justify-between py-4 px-8 md:px-12 lg:px-16">
          {/* Left: Logo */}
          <Link href="/" onClick={() => window.location.reload()} className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Zaacoal Logo"
              width={45}
              height={45}
              className="object-contain w-auto h-auto"
            />
          </Link>

          {/* Center: Nav menu items */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10 text-base font-semibold text-black">
            <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-orange-900 transition">
              Home
            </a>
            <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-orange-900 transition">
              About Us
            </a>
            <a href="#products" onClick={(e) => handleScroll(e, "#products")} className="hover:text-orange-900 transition">
              Products
            </a>
            <a href="#process" onClick={(e) => handleScroll(e, "#process")} className="hover:text-orange-900 transition">
              Our Processes
            </a>
          </nav>

          {/* Right: Contact Us button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-amber-600 text-white px-5 py-2.5 rounded-md hover:bg-orange-900 transition"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none"
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
              className="md:hidden bg-white/70 backdrop-blur-sm flex justify-center"
            >
              <nav className="flex flex-col items-center justify-center px-8 py-4 space-y-4 text-black font-semibold">
                <a href="#home" onClick={(e) => handleScroll(e, "#home")} className="hover:text-gray-600">
                  Home
                </a>
                <a href="#about" onClick={(e) => handleScroll(e, "#about")} className="hover:text-gray-600">
                  About
                </a>
                <a href="#products" onClick={(e) => handleScroll(e, "#products")} className="hover:text-gray-600">
                  Products
                </a>
                <a href="#process" onClick={(e) => handleScroll(e, "#process")} className="hover:text-gray-600">
                  Processes
                </a>
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsOpen(false);
                  }}
                  className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-gray-800 text-center transition"
                >
                  Contact Us
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
