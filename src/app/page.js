"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ContactModal from "@/components/ContactModal";

import AboutSection from "@/components/AboutSection";
import ProductSection from "@/components/ProductSection";
import WhyChooseZaacoal from "@/components/WhyChooseZaacoal";
import ProcessSection from "@/components/ProcessSection";
import PartnerSection from "@/components/PartnerSection";

export default function HomePage() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <motion.section id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative -mt-16 flex flex-col md:flex-row items-center justify-between w-full min-h-[100vh] bg-white text-black overflow-hidden"
      >
        {/* Mobile Image */}
        <div className="relative w-full h-100 md:hidden">
          <Image
            src="/images/charcoal-hero-mobile1.png"
            alt="Sustainable charcoal redefined mobile"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-none"
            priority
          />
        </div>

        {/* Text Section (Left on Desktop) */}
        <div className="flex flex-col justify-center max-w-xl z-10 space-y-2 px-6 py-5 md:px-16 mt-[-5rem] md:mt-16">
          <motion.h1 variants={fadeUp} className="font-montserrat text-5xl md:text-7xl leading-tight">
            <span className="block font-light">Sustainable</span>
            <span className="block font-extrabold">charcoal</span>
            <span className="block font-light">redefined</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="font-urbanist text-sm md:text-sm text-black">
            Zaacoal produces eco-friendly charcoal briquettes made from coconut waste,
            providing a cleaner, longer-lasting burn.
          </motion.p>

          <motion.div variants={fadeUp}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 inline-flex items-center gap-2 bg-black hover:bg-orange-900 text-white font-semiold px-5 py-2.5 rounded-md transition-all duration-300 self-start"
            >
              Contact Us
              <ArrowRight size={18} />
            </button>
          </motion.div>
            {/* Modal */}
            {isModalOpen && (
            <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            )}
        </div>

        {/* Desktop Image (Right Side) */}
        <motion.div
          variants={fadeUp}
          className="relative hidden md:block w-1/2 h-[100vh] -mt-10 scale-115 -translate-x-15"
        >
          <Image
            src="/images/charcoal-hero2.png"
            alt="Sustainable charcoal redefined desktop"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-l-[2rem]"
            priority
          />
        </motion.div>
      </motion.section>

      {/* Sections */}
      <AboutSection />
      <ProductSection />
      <ProcessSection />
      <WhyChooseZaacoal />
      <PartnerSection />
    </>
  );
}
