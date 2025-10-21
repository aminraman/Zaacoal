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
      icon: <FaLeaf className="text-green-500 text-5xl" />,
    },
    {
      title: "Smokeless and Odourless",
      text: "Our charcoal has clean burning, safe for homes and restaurants.",
      icon: <FaWind className="text-white text-6xl" />,
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

  return (
    <section className="relative bg-gray-50 py-24 px-6 md:px-16 text-white overflow-hidden">
      {/* Ambient Background*/}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,200,100,0.05),_transparent_70%)] pointer-events-none"></div>
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative max-w-6xl mx-auto text-center mb-16"
      >
        <h2 className="font-montserrat text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
          Why Choose Zaacoal?
        </h2>
        <p className="font-urbanist text-lg text-gray-300 max-w-3xl mx-auto">
          We are more than just charcoal - we are powering a cleaner, greener future for Ghana and the world.
        </p>
      </motion.div>

      {/* Features Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: index * 0.15,
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(255,193,7,0.3)",
            }}
            className="p-8 bg-black backdrop-blur rounded-3xl border text-center shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: 6 }}
              className="flex justify-center mb-6"
            >
              {item.icon}
            </motion.div>
            <h3 className="text-2xl font-semibold mb-3 text-amber-400">
              {item.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Divider accent */}
      <div className="relative mt-24 flex justify-center">
        <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
      </div>
    </section>
  );
}
