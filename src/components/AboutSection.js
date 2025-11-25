"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Flame, Globe2 } from "lucide-react";

export default function AboutSection() {
  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="about"
      className="bg-white text-black py-24 md:py-32 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fade}
          className="relative w-full h-[28rem] rounded-3xl overflow-hidden shadow-lg"
        >
          <Image
            src="/images/Zaacoal1.jpg"
            alt="Eco-friendly charcoal"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="space-y-6"
        >
          <h2 className="font-montserrat text-4xl md:text-5xl font-semibold leading-tight">
            Sustainability at the heart of everything we do
          </h2>

          <p className="font-urbanist text-lg text-black/70 max-w-lg">
            Our charcoal briquettes are crafted from 100% recycled coconut waste —
            producing a cleaner, hotter, and longer-lasting burn that’s better for
            homes, businesses, and the environment.
          </p>

          <ul className="space-y-4 pt-4 font-urbanist">
            {[
              {
                icon: <Leaf size={24} className="text-black" />,
                text: "100% natural coconut waste",
              },
              {
                icon: <Flame size={24} className="text-black" />,
                text: "Longer-lasting, cleaner combustion",
              },
              {
                icon: <Globe2 size={24} className="text-black" />,
                text: "Supporting sustainable energy in Africa",
              },
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={fade}
                custom={i}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5">
                  {item.icon}
                </div>
                <span className="text-black/80">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
