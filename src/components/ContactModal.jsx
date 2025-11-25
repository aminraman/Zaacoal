"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
  const contentVariants = {
    hidden: { opacity: 0, y: -40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -40, scale: 0.95, transition: { duration: 0.2 } },
  };

  const contacts = [
    { icon: <Phone className="w-6 h-6 text-orange-800" />, title: "Call Us", detail: "+233 26 582 4555", action: "tel:+233265824555" },
    { icon: <Mail className="w-6 h-6 text-orange-800" />, title: "Email Us", detail: "info@zaacoal.com", action: "mailto:info@zaacoal.com" },
    { icon: <MessageSquare className="w-6 h-6 text-orange-800" />, title: "WhatsApp", detail: "+233 50 700 5551", action: "https://wa.me/233507005551?text=Hello%20Zaacoal%20team,%20I%20would%20like%20to%20make%20an%20inquiry." },
    { icon: <MapPin className="w-6 h-6 text-orange-800" />, title: "Visit Us", detail: "Fadama, Greater Accra, Ghana", action: "https://maps.google.com/?q=Zaacoal+Limited+Accra+Ghana" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal-overlay"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[999] flex justify-center items-start sm:items-center p-4 pt-20 sm:pt-0"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-xl w-full max-w-[90%] sm:max-w-lg relative p-4 sm:p-6"
            variants={contentVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black transition">
              <X size={22} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Get in Touch</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {contacts.map((item, i) => (
                <a
                  key={i}
                  href={item.action}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 border rounded-xl p-4 sm:p-5 hover:shadow-md hover:border-orange-800 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-600"
                >
                  {item.icon}
                  <h3 className="font-semibold text-black">{item.title}</h3>
                  <p className="text-sm text-gray-500 text-center">{item.detail}</p>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
