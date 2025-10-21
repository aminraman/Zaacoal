import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {Montserrat,Urbanist} from "next/font/google";

//load fonts
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });

export const metadata = {
  title: "Zaacoal — Sustainable Charcoal Redefined",
  description:
    "Eco-friendly charcoal made from coconut waste for a cleaner, longer-lasting burn."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className = '${montserrat.variable},${urbanist.variable}'>
      <body>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
