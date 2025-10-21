"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      id: 1,
      title: "Collecting Coconut Husks",
      description:
        "We source discarded coconut husks from local markets and communities - reducing waste and supporting local livelihoods.",
      media: "/images/collecting.jpg",
    },
    {
      id: 2,
      title: "Drying & Preparation",
      description:
        "The husks are sun-dried naturally to remove moisture, ensuring an efficient and smoke-free carbonization process.",
      media: "/images/drying.jpg",
    },
    {
      id: 3,
      title: "Carbonization",
      description:
        "Using modern kilns, the dried husks are carbonized in a controlled environment - producing high-quality charcoal with minimal emissions.",
      media: "/images/carbonization.jpg",
    },
    {
      id: 4,
      title: "Crushing & Screening",
      description:
        "The charcoal is crushed and screened to achieve consistent size and quality standards suitable for different markets.",
      media: "/images/screening.jpeg",
    },
    {
      id: 5,
      title: "Packaging & Distribution",
      description:
        "Finally, our charcoal is packed in eco-friendly bags and distributed locally and internationally.",
      media: "/images/packaging1.jpg",
    },
  ];

  return (
    <section id="process"className="relative py-24 overflow-hidden bg-gradient-to-b from-amber-50 via-white to-gray-50 text-gray-900">
    
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center mb-20 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
          Our Process
        </h2>
        <p className="text-lg md:text-xl text-black leading-relaxed">
          From coconut husks to clean energy — here’s how <span className="font-semibold text-amber-700">Zaacoal</span> transforms waste into sustainable charcoal.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative max-w-6xl mx-auto space-y-24 px-6 md:px-12">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className={`flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-10 md:gap-16`}
          >
            {/* Media Section */}
            <div className="w-full md:w-1/2 relative group rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              {step.media.endsWith(".mp4") ? (
                <video
                  src={step.media}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-[340px] object-cover transform group-hover:scale-105 transition-all duration-700"
                />
              ) : (
                <Image
                  src={step.media}
                  alt={step.title}
                  width={600}
                  height={400}
                  className="w-full h-[340px] object-cover transform group-hover:scale-105 transition-all duration-700"
                />
              )}
              {/* Step Badge */}
              <div className="absolute top-4 left-4 bg-amber-600 text-white px-5 py-2 rounded-full font-semibold shadow-md">
                Step {step.id}
              </div>
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                {step.title}
              </h3>
              <p className="text-shadow-black-700 leading-relaxed text-lg mb-6">
                {step.description}
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <span className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:bg-amber-700 transition-colors duration-300">
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
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="relative mt-32 flex justify-center">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </div>
    </section>
  );
}
