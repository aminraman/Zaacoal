"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Collecting Coconut Husks",
      description:
        "We source discarded coconut husks from local markets and communities — reducing waste while empowering local livelihoods.",
      media: "/images/collecting.jpg",
    },
    {
      id: 2,
      title: "Drying & Preparation",
      description:
        "Sun-dried naturally to remove moisture, preparing husks for efficient, smoke-free carbonization.",
      media: "/images/drying.jpg",
    },
    {
      id: 3,
      title: "Carbonization",
      description:
        "Modern kilns convert the dried husks into high-quality charcoal with minimal emissions.",
      media: "/images/carbonization.jpg",
    },
    {
      id: 4,
      title: "Crushing & Screening",
      description:
        "Charcoal is crushed and screened to ensure consistent size and quality for all markets.",
      media: "/images/screening.jpeg",
    },
    {
      id: 5,
      title: "Packaging & Distribution",
      description:
        "Eco-friendly bags and smart logistics deliver our charcoal locally and globally.",
      media: "/images/packaging1.jpg",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      id="process"
      className="relative bg-white text-black py-32 px-6 md:px-16 overflow-hidden"
    >
      {/* Cinematic Gradient Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-amber-200/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-amber-100/10 rounded-full filter blur-3xl"></div>
      </div>

      {/* Section Header */}
      <motion.div
        className="max-w-5xl mx-auto text-center mb-24 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-semibold mb-4">
          Our Process
        </h2>
        <p className="font-urbanist text-lg md:text-xl text-black/70 max-w-3xl mx-auto leading-relaxed">
          From coconut husks to clean energy — here’s how <span className="font-semibold text-amber-600">Zaacoal</span> transforms waste into premium charcoal.
        </p>
      </motion.div>

      {/* Steps Grid */}
      <div className="relative max-w-6xl mx-auto space-y-28 z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: index * 0.15 }}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Media Card */}
            <div className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl group hover:shadow-[0_40px_60px_-20px_rgba(0,0,0,0.25)] transition-shadow duration-500">
              <Image
                src={step.media}
                alt={step.title}
                width={600}
                height={400}
                className="w-full h-[340px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-5 py-2 rounded-full font-semibold shadow-lg">
                Step {step.id}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="font-montserrat text-3xl md:text-4xl font-semibold leading-tight">
                {step.title}
              </h3>
              <p className="font-urbanist text-black/70 text-lg leading-relaxed">
                {step.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:bg-amber-700 transition-colors duration-300 mt-2"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12l-7.5 7.5M21 12H3"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Divider */}
      <div className="relative mt-32 flex justify-center z-10">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </div>
    </section>
  );
}
