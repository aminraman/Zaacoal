"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function PartnerSection() {
  const testimonials = [
    {
      name: "Chef Khulsum",
      role: "Restaurant Owner, Accra",
      text: "Zaacoal charcoal burns clean and lasts much longer than anything else we’ve used - perfect for our busy kitchen.",
      image: "/images/image1.jpg",
    },
    {
      name: "Lea. M",
      role: "Eco Retailer",
      text: "Customers love the smoke-free quality and the story behind Zaacoal. It’s a product we’re proud to stock.",
      image: "/images/image2.jpg",
    },
    {
      name: "Jeffery T.",
      role: "Exporter, UK Market",
      text: "Quality packaging and consistent burn rate - Zaacoal is export-ready and always on time.",
      image: "/images/image3.jpg",
    },
  ];

  const partners = ["/images/Partner1.png", "/images/partner2.png"];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-gray-50 py-32 px-6 md:px-16 overflow-hidden">
      {/* Gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative max-w-5xl mx-auto text-center mb-24 z-10"
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-semibold mb-4 text-amber-700">
          What People Say About Zaacoal
        </h2>
        <p className="font-urbanist text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Trusted by homes, chefs, and businesses across Africa and beyond.
        </p>
      </motion.div>

      {/* Testimonials */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 z-10">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255,193,7,0.2)" }}
            className="flex flex-col items-center text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 min-h-[320px] transition-all duration-300"
          >
            <div className="relative mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={90}
                height={90}
                className="w-24 h-24 rounded-full object-cover ring-2 ring-amber-500 shadow-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">“{t.text}”</p>
            <h3 className="font-semibold text-lg text-amber-700">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Partners */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative max-w-5xl mx-auto text-center mt-24 z-10"
      >
        <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-amber-700">
          Our Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-12">
          {partners.map((logo, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,193,7,0.15)" }}
              className="transition-transform duration-300"
            >
              <Image
                src={logo}
                alt={`Partner ${i + 1}`}
                width={120}
                height={60}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Divider */}
      <div className="relative mt-32 flex justify-center z-10">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </section>
  );
}
