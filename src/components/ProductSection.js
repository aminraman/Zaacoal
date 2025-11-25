"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductSection() {
  const fade = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const products = [
    {
      id: 1,
      title: "Zaacoal Original",
      description:
        "High-performance charcoal engineered for grills and restaurants. Strong heat, minimal smoke.",
      image: "/images/Zaacoal-Original1.jpg",
    },
    {
      id: 2,
      title: "Zaacoal Quicklight",
      description:
        "Effortless ignition for home use and outdoor cooking. Clean burn, steady flame.",
      image: "/images/Zaacoal-Quicklight.webp",
    },
    {
      id: 3,
      title: "Zaacoal Export Quality",
      description:
        "Premium-grade charcoal crafted for international markets, consistent quality every batch.",
      image: "/images/zaa1.jpg",
    },
    {
      id: 4,
      title: "Zaacoal Hookah/Shisha",
      description:
        "Slow-burning shisha charcoal with clean flavor and consistent heat output.",
      image: "/images/Hookah.jpg",
    },
  ];

  return (
    <section
      id="products"
      className="bg-white text-black py-24 md:py-32 px-6 md:px-16"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fade}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-20"
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-semibold">
          Our Products
        </h2>
        <p className="font-urbanist text-lg text-black/60 mt-4 max-w-2xl mx-auto">
          Explore our range of sustainable, high-performance charcoal engineered
          for homes, restaurants, and global distribution.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 hover:shadow-xl transition-all duration-300 bg-white"
          >
            {/* Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="p-6 space-y-3 flex flex-col flex-grow">
              <h3 className="font-montserrat text-xl font-semibold">
                {product.title}
              </h3>
              <p className="font-urbanist text-black/70 text-sm leading-relaxed">
                {product.description}
              </p>

              <button className="mt-auto w-max px-5 py-2 bg-black text-white rounded-full text-sm font-medium hover:bg-black/80 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
