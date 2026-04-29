"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import whoBg from "@/image/who_we_serve.png";

// Import SVGs
import profIcon from "@/image/professional.svg";
import vehicleIcon from "@/image/vehicle auto.svg";
import estateIcon from "@/image/real estate.svg";
import retailIcon from "@/image/retail.svg";
import fbIcon from "@/image/f & b.svg";
import healthIcon from "@/image/healthcare.svg";

const CATEGORIES = [
  {
    title: "Professional Services & Beyond",
    description: "Clinics, law firms, consulting practices, education, fitness, home services and other founder-led SMEs ready to professionalise growth.",
    icon: profIcon
  },
  {
    title: "Vehicle & Automotive",
    description: "Driving schools, auto service workshops, garages, rental fleets and dealerships that need consistent lead flow and sharper operational KPIs.",
    icon: vehicleIcon
  },
  {
    title: "Real Estate & Property",
    description: "Brokerages, developers, short-stay operators and property management firms that need steady qualified enquiries and professional digital presence.",
    icon: estateIcon
  },
  {
    title: "Retail & E-commerce",
    description: "Single-store retailers, multi-outlet brands and D2C e-commerce businesses that need a direct channel that isn't hostage to marketplaces.",
    icon: retailIcon
  },
  {
    title: "F&B & Restaurants",
    description: "Restaurants, cafes, cloud kitchens and QSR brands that want full tables, loyal regulars, and delivery platforms that actually pay off.",
    icon: fbIcon
  },
  {
    title: "Healthcare & Clinics",
    description: "Dental, derma, polyclinics, wellness centres, speciality clinics and diagnostic labs that need qualified patient bookings and trust-led brand positioning.",
    icon: healthIcon
  }
];

// Duplicate for infinite scroll
const INFINITE_CATEGORIES = [...CATEGORIES, ...CATEGORIES];

export default function WhoWeServe() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen bg-[#010C19] py-32 overflow-hidden flex items-center"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={whoBg} 
          alt="" 
          fill 
          className="object-cover opacity-100" 
          priority 
        />
      </div>

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center">
        
        {/* Left Column (Auto-scrolling Cards) - Bleeding to the left edge */}
        <div className="w-full lg:w-[60%] relative order-2 lg:order-1 mt-12 lg:mt-0">
          <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
            <motion.div 
              className="flex gap-8 py-10"
              animate={{
                x: [0, "-50%"],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
              style={{ width: "fit-content" }}
            >
              {INFINITE_CATEGORIES.map((cat, i) => (
                <div
                  key={i}
                  className="min-w-[320px] md:min-w-[420px] min-h-[500px] bg-white/[0.03] backdrop-blur-3xl border border-white/10 p-12 rounded-[50px] group/card hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-10 relative w-24 h-24 group-hover/card:scale-110 transition-transform duration-500">
                      <Image 
                        src={cat.icon} 
                        alt={cat.title} 
                        fill 
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-8 group-hover/card:text-[#1071FF] transition-colors duration-300 leading-tight">
                      {cat.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed text-base md:text-lg">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Strong Left Edge Feather */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#010C19] via-[#010C19]/80 to-transparent pointer-events-none z-20" />
        </div>

        {/* Right Column (Text Content) - Aligned within container constraints */}
        <div className="w-full lg:w-[40%] text-left px-6 lg:pl-24 order-1 lg:order-2">
          <div className="flex flex-col">
            <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter whitespace-nowrap flex flex-wrap gap-x-[0.3em]">
              {"Who".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                >
                  {word}
                </motion.span>
              ))}
              {"We Serve".split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
                  transition={{ duration: 0.8, delay: 0.4 + i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="bg-gradient-to-r from-[#1071FF] via-[#3B82F6] to-[#1071FF] bg-clip-text text-transparent bg-[length:200%_auto]"
                  animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(8px)" }}
              transition={{ delay: 0.7, duration: 1.0, ease: "easeOut" }}
              className="text-white/80 text-xl leading-relaxed max-w-md"
            >
              We combine marketing performance, operational efficiency, and business strategy to turn ambitious SMEs into category leaders.
            </motion.p>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
