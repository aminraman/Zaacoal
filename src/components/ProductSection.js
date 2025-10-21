"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProductSection() {
  const products = [
    {
      id: 1,
      title: "Zaacoal Original",
      description:
        "Perfect for restaurants and grills — produces strong heat and burns longer with minimal smoke.",
      image: "/images/Zaacoal-Original1.jpg",
    },
    {
      id: 2,
      title: "Zaacoal Quicklight",
      description:
        "Ideal for homes and outdoor events — easy to light, steady flame, and clean burn.",
      image: "/images/Zaacoal-Quicklight.webp",
    },
    {
      id: 3,
      title: "Zaacoal Export Quality",
      description:
        "High-quality, export-ready charcoal packed for international clients and distributors.",
      image: "/images/zaa1.jpg",
    },
    {
      id: 4,
      title: "Zaacoal Hookah/Shisha",
      description:
        "Specially designed for hookah lovers — produces consistent heat, pure flavor, and no odor.",
      image: "/images/hookah.jpg",
    },
  ];

  return (
    <section 
    id= "products"
    className="relative bg-gradient-to-b from-white via-gray-50 to-amber-50 py-24 px-6 md:px-16 text-gray-900 overflow-hidden scroll-mt-24">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.jpg')] bg-no-repeat bg-center bg-cover"></div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-black to-amber-700 bg-clip-text text-transparent">
          Our Products
        </h2>
        <p className="font-urbanist text-lg text-gray-600 max-w-3xl mx-auto">
          Explore Zaacoal’s range of sustainable charcoal products crafted for homes, restaurants, and international exports — now including our premium Hookah/Shisha charcoal.
        </p>
      </motion.div>

      {/* Product Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="relative group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
          >
            {/* Product Image */}
            <div className="overflow-hidden relative">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={300}
                className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>

            {/* Product Text */}
            <div className="p-6 md:p-8 text-left">
              <h3 className="font-montserrat text-2xl font-semibold mb-3 text-black">
                {product.title}
              </h3>
              <p className="font-urbanist text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-5 py-2.5 bg-amber-600 text-white rounded-full font-semibold shadow-md hover:bg-amber-700 transition-colors duration-300"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Divider accent */}
      <div className="relative mt-24 flex justify-center">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-600 to-transparent"></div>
      </div>
    </section>
  );
}
