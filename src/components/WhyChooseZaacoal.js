"use client";

import { WiSmoke } from "react-icons/wi";
import { FaLeaf, FaFireAlt, FaHandshake, FaWind } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { motion } from "framer-motion";

export default function WhyChooseZaacoal() {
  const features = [
    {
      title: "Eco-Friendly Production",
      text: "Our charcoal is made from sustainable coconut shells and agricultural waste, helping reduce deforestation.",
      icon: <FaLeaf className="text-green-600 text-5xl" />,
    },
    {
      title: "Smokeless and Odourless",
      text: "Our charcoal has clean burning, safe for homes and restaurants.",
      icon: <FaWind className="text-amber-600 text-5xl" />,
    },
    {
      title: "Long-Lasting Heat",
      text: "Each batch is engineered for high performance - burns hotter and longer for restaurants and homes.",
      icon: <FaFireAlt className="text-orange-500 text-5xl" />,
    },
    {
      title: "Ghanaian Quality",
      text: "Proudly produced in Ghana with strict quality control and export-grade packaging.",
      icon: (
        <ReactCountryFlag
          countryCode="GH"
          svg
          style={{
            width: "2.5em",
            height: "2.5em",
            borderRadius: "0.4rem",
            boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
          }}
          title="Ghana"
        />
      ),
    },
    {
      title: "Trusted by Many",
      text: "Zaacoal is trusted by chefs, retailers, and households across Africa and beyond.",
      icon: <FaHandshake className="text-amber-500 text-5xl" />,
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Ambient Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-10%] right-[-20%] w-[600px] h-[600px] bg-orange-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative max-w-6xl mx-auto text-center mb-16 z-10"
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-4 text-amber-700">
          Why Choose Zaacoal?
        </h2>
        <p className="font-urbanist text-lg text-gray-700 max-w-3xl mx-auto">
          We are more than just charcoal — we are powering a cleaner, greener future for Ghana and the world.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto z-10">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(255,193,7,0.2)" }}
            className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border border-gray-200 text-center shadow-lg transition-all duration-300"
          >
            <div className="flex justify-center mb-6">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-amber-700">{item.title}</h3>
            <p className="text-gray-700 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Divider */}
      <div className="relative mt-24 flex justify-center z-10">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
      </div>
    </section>
  );
}
