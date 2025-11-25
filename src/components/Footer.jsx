"use client";
import { FaInstagram, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-100  text-black dark:text-black py-10 flex flex-col items-center space-y-4 transition-colors duration-300">
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com/zaacoal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-colors"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.facebook.com/zaacoal"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition-colors"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://twitter.com/zaacoalenergy"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition-colors"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://wa.me/233507005551"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transition-colors"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="mailto:info@zaacoal.com"
          className="hover:text-red-500 transition-colors"
        >
          <MdEmail size={24} />
        </a>
      </div>

      <p className="text-sm text-center">
        © {new Date().getFullYear()} Zaacoal. All rights reserved.
      </p>
    </footer>
  );
}
