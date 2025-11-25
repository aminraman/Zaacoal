"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";

import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import ProcessSection from "@/components/ProcessSection";
import WhyChooseZaacoal from "@/components/WhyChooseZaacoal";
import PartnerSection from "@/components/PartnerSection";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, when: "beforeChildren" } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* HERO */}
      <motion.header
        id ="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="relative w-full min-h-screen flex items-center bg-white text-black overflow-hidden"
        aria-label="Zaacoal hero"
      >
        {/* Desktop background */}
        <div className="absolute inset-0 hidden md:block pointer-events-none">
          <Image
            src="/images/charcoal-hero2.png"
            alt="Zaacoal sustainable charcoal"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white/90 to-transparent" />
        </div>

        {/* Mobile Hero Section (left-aligned, side-by-side buttons) */}
        <motion.section
          className="absolute inset-0 md:hidden flex flex-col justify-start items-start"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
          }}
        >
          {/* Mobile Image */}
          <div className="relative w-full h-100">
            <Image
              src="/images/charcoal-hero-mobile1.png"
              alt="Sustainable charcoal redefined mobile"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover rounded-none"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center max-w-xl z-10 space-y-4 px-6 py-5 mt-[-5rem]">
            <motion.h1
              variants={fadeUp}
              className="font-montserrat text-5xl leading-tight text-left"
            >
              <span className="block font-light">Sustainable</span>
              <span className="block font-extrabold">charcoal</span>
              <span className="block font-light">redefined</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-urbanist text-sm text-black text-left"
            >
              Zaacoal produces eco-friendly charcoal briquettes made from coconut waste,
              providing a cleaner, longer-lasting burn.
            </motion.p>

            {/* Buttons side by side like desktop */}
            <motion.div variants={fadeUp} className="flex flex-row gap-4 mt-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:scale-[1.03] active:scale-[0.99] transition-transform duration-250 shadow-md"
              >
                Contact Us <ArrowRight size={18} />
              </button>
              <a
                href="#products"
                className="inline-flex items-center gap-2 border border-black/10 px-6 py-3 rounded-full text-sm hover:shadow-sm transition"
              >
                Explore Products
              </a>
            </motion.div>
          </div>
        </motion.section>

        {/* Desktop Content container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-20 flex items-center">
          <motion.div
            variants={fadeUp}
            className="max-w-2xl space-y-6 md:space-y-8 hidden md:block"
            role="region"
            aria-labelledby="hero-heading"
          >
            <motion.h1
              id="hero-heading"
              variants={fadeUp}
              className="font-montserrat text-4xl md:text-6xl leading-tight"
            >
              <span className="block font-light">Sustainable</span>
              <span className="block font-extrabold">Charcoal</span>
              <span className="block font-light">Redefined</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="font-urbanist text-base md:text-lg text-black max-w-xl"
            >
              Zaacoal produces eco-friendly charcoal briquettes made from coconut waste —
              providing cleaner combustion, higher heat, and longer burn times for homes and businesses.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full font-medium hover:scale-[1.03] active:scale-[0.99] transition-transform duration-250 shadow-md"
              >
                Contact Us <ArrowRight size={18} />
              </button>

              <a
                href="#products"
                className="inline-flex items-center gap-2 border border-black/10 px-5 py-3 rounded-full text-sm hover:shadow-sm transition"
              >
                Explore Products
              </a>
            </motion.div>
          </motion.div>

          <div className="hidden md:block flex-1" aria-hidden="true" />
        </div>
      </motion.header>

      {/* Contact Modal mounted at page root */}
      {isModalOpen && <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

      {/* PAGE SECTIONS */}
      <main className="bg-white">
        <AboutSection />
        <ProductSection />
        <ProcessSection />
        <WhyChooseZaacoal />
        <PartnerSection />
      </main>
    </>
  );
}
