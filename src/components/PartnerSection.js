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

  const partners = [
    "/images/Partner1.png",
    "/images/partner2.png",
  ];

  return (
    <section id="partner" className="relative py-24 overflow-hidden bg-gray-50 text-gray-900">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center mb-20 px-6"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
          What People Say About Zaacoal
        </h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Trusted by homes, chefs, and businesses across Africa and beyond.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 md:px-12 mb-20">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
              delay: i * 0.15,
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative bg-gray-950 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl transition-all duration-500 group"
          >
            <div className="relative mb-4">
              <Image
                src={t.image}
                alt={t.name}
                width={90}
                height={90}
                className="w-24 h-24 rounded-full object-cover border-4 border-amber-500 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-gray-700 italic mb-4 leading-relaxed">“{t.text}”</p>
            <h3 className="font-bold text-lg text-gray-600">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.role}</p>
          </motion.div>
        ))}
      </div>

      {/* Partners Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto text-center px-6"
      >
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-black">
          Our Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 opacity-80 hover:opacity-100 transition-opacity duration-500">
          {partners.map((logo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Image
                src={logo}
                alt={`Partner ${i + 1}`}
                width={120}
                height={60}
                sizes="(max-width: 768px) 100vw, 120px"
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-500"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Decorative divider */}
      <div className="relative mt-32 flex justify-center">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </div>
    </section>
  );
}
