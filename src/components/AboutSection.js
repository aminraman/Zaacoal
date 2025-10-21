"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLeaf, FaFireAlt, FaGlobeAfrica } from "react-icons/fa";

export default function AboutSection() {
  // Animation variants
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.3 + i * 0.15, duration: 0.5 },
    }),
  };

  return (
    <section id="about" className="w-full bg-white text-gray-900 py-20 px-6 md:px-16 overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.3 }}
      >
        {/* Image */}
        <motion.div
          className="relative w-full md:w-1/2 h-80 md:h-[28rem]"
          variants={container}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent rounded-3xl" />
          <Image
            src="/images/Zaacoal1.jpg"
            alt="Eco-friendly charcoal"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover rounded-3xl shadow-lg"
          />
        </motion.div>

        {/* Text */}
        <motion.div className="w-full md:w-1/2" variants={container}>
          <motion.h2
            className="font-montserrat text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-black to-amber-700 bg-clip-text text-transparent"
            variants={container}
          >
            Sustainability at the heart of what we do
          </motion.h2>

          <motion.p
            className="font-urbanist text-lg text-gray-900 mb-8"
            variants={container}
          >
            Zaacoal produces clean, eco-friendly charcoal made from coconut waste —
            providing a smokeless, longer-lasting burn that’s better for people and
            the planet.
          </motion.p>

          <motion.ul
            className="space-y-4 text-gray-900 font-urbanist"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <FaLeaf className="text-green-600 text-xl" />,
                text: "100% natural coconut waste",
              },
              {
                icon: <FaFireAlt className="text-orange-500 text-xl" />,
                text: "Longer-lasting, cleaner burn",
              },
              {
                icon: <FaGlobeAfrica className="text-blue-700 text-xl" />,
                text: "Supporting sustainable energy in Africa",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-center gap-3"
                custom={i}
                variants={listItem}
              >
                {item.icon}
                {item.text}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
