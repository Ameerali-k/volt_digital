"use client";

import React, { useRef } from "react";
import { motion, useScroll, useInView } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Diagnose",
    time: "Weeks 1—2",
    desc: "Full business + marketing audit. Funnel, channels, CRM, ops. We find the leaks before we pour in fuel.",
  },
  {
    num: "02",
    title: "Design",
    time: "Weeks 2—3",
    desc: "Positioning, offer, pricing, ICP. A clear growth plan with channel mix, targets, and a 90-day roadmap you can hold us to.",
  },
  {
    num: "03",
    title: "Deploy",
    time: "Weeks 3—6",
    desc: "Campaigns live. Tracking in place. Creative tested. Systems installed. First leads already in the pipeline.",
  },
  {
    num: "04",
    title: "Decode",
    time: "Weeks 6—10",
    desc: "Weekly performance reviews, creative iteration, audience refinement. We decode what's working — and double down.",
  },
  {
    num: "05",
    title: "Double-Down",
    time: "Weeks 10—12+",
    desc: "Scale winning campaigns, codify SOPs, train your team. Hand you a repeatable playbook you can run with forever.",
  },
];

function StepItem({ step, index }: { step: any; index: number }) {
  const ref = useRef(null);
  // Triggers when the item comes into the middle of the viewport
  const isInView = useInView(ref, { once: true, margin: "-40% 0px -40% 0px" });
  
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center w-full rounded-2xl transition-all duration-500 py-6 md:p-6 cursor-default hover:shadow-lg hover:scale-[1.01] ${
        isInView ? "bg-blue-50/60" : "bg-transparent"
      }`}
    >
      {/* Timeline Node */}
      <div 
        className={`absolute left-8 md:left-1/2 -translate-x-[8px] top-10 md:top-1/2 md:-translate-y-1/2 w-[16px] h-[16px] rounded-full z-20 transition-all duration-500 ${
          isInView ? "bg-[#0066FF] shadow-[0_0_0_6px_rgba(0,102,255,0.2)] scale-100" : "bg-gray-300 scale-75"
        }`}
      />

      {/* Step Card (Left side of node on desktop, top on mobile) */}
      <div className="w-full md:w-1/2 flex md:justify-end md:pr-16 relative z-10 pl-20 md:pl-0">
        <div className="w-full max-w-[280px]">
          <span className="text-[#8BA4CA] text-sm font-bold tracking-wider">{step.num}</span>
          <h3 className="text-[#0B132B] text-xl md:text-2xl font-bold mt-1 mb-2">{step.title}</h3>
          <span className="text-[#4A5568] text-sm font-medium">{step.time}</span>
        </div>
      </div>

      {/* Description Text (Right side of node on desktop, bottom on mobile) */}
      <div className="w-full md:w-1/2 flex md:justify-start md:pl-16 mt-2 md:mt-0 pl-20 md:pl-0">
        <p className="text-[#4A5568] text-base leading-relaxed max-w-[320px]">
          {step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Methodology() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  // Scrub effect for the central animated line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const titleWords = "The Growth 360 Method".split(" ");

  return (
    <section className="relative w-full bg-white py-32 overflow-hidden font-satoshi" ref={containerRef}>
      
      {/* Decorative Geometric Banner */}
      <div 
        className="absolute top-0 left-0 w-[80%] md:w-[40%] h-[150px] md:h-[250px] bg-[#010C19] z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-12">
        
        {/* Left Column (Text Content) */}
        <div className="w-full lg:w-[40%] flex flex-col pt-12 md:pt-20 lg:pt-0 lg:sticky lg:top-40 h-fit">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight text-[#0B132B] flex gap-x-[0.3em] flex-wrap">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 20, filter: "blur(10px)" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                className={i === 1 || i === 2 ? "bg-gradient-to-r from-[#1071FF] via-[#3B82F6] to-[#1071FF] bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer" : ""}
                style={i === 1 || i === 2 ? { animation: "shimmer 5s linear infinite" } : {}}
              >
                {word}
              </motion.span>
            ))}
            <style jsx>{`
              @keyframes shimmer {
                0% { background-position: 0% 50%; }
                100% { background-position: 200% 50%; }
              }
            `}</style>
          </h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(8px)" }}
            transition={{ delay: 0.6, duration: 1.0, ease: "easeOut" }}
            className="text-[#334155] text-lg leading-relaxed font-normal"
          >
            Getting customers is easy. Keeping them is hard. Growth360 is our proprietary framework for solving both — a 90-day operating system that joins performance marketing, operational optimization, and business strategy into a single measurable growth engine.
          </motion.p>
        </div>

        {/* Right Column (Vertical Timeline) */}
        <div className="w-full lg:w-[60%] relative mt-16 lg:mt-0 py-10">
          
          {/* Timeline Background Line (Faded) */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 md:-translate-x-1/2" />
          
          {/* Active Glowing Line (Scrubbed on scroll) */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0066FF] md:-translate-x-1/2 origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-6 md:space-y-12">
            {STEPS.map((step, index) => (
              <StepItem key={index} step={step} index={index} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
