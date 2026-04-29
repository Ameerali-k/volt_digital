"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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

export default function Methodology() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  return (
    <section className="relative w-full bg-white py-24 overflow-hidden font-satoshi" ref={containerRef}>
      
      {/* Decorative Geometric Banner */}
      <div 
        className="absolute top-0 left-0 w-[80%] md:w-[45%] h-[150px] md:h-[250px] bg-[#010C19] z-0"
        style={{ clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-12">
        
        {/* Left Column (Text Content) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center pt-8 md:pt-16 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-[#0B132B] leading-tight">
              The Growth
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-[#0066FF] leading-tight mt-1">
              360 Method
            </h2>
            <p className="mt-8 text-lg md:text-xl text-[#334155] leading-relaxed">
              Getting customers is easy. Keeping them is hard. Growth360 is our proprietary framework for solving both — a 90-day operating system that joins performance marketing, operational optimization, and business strategy into a single measurable growth engine.
            </p>
          </motion.div>
        </div>

        {/* Right Column (Vertical Timeline) */}
        <div className="w-full lg:w-[60%] relative mt-12 lg:mt-0">
          
          {/* Timeline Line */}
          <motion.div 
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0066FF] md:-translate-x-1/2 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
          />

          <div className="space-y-12 md:space-y-16">
            {STEPS.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start md:items-center w-full pl-16 md:pl-0">
                
                {/* Timeline Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.2, ease: "easeOut" }}
                  className="absolute left-6 -translate-x-[7px] md:translate-x-0 md:left-1/2 md:-ml-[7px] top-6 md:top-auto w-[16px] h-[16px] bg-[#0066FF] rounded-full shadow-[0_0_0_6px_rgba(0,102,255,0.15)] z-20"
                />

                {/* Step Card (Left on Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2, ease: "easeOut" }}
                  className="w-full md:w-1/2 flex md:justify-end md:pr-12 relative z-10"
                >
                  <div className="bg-[#EBF3FF] rounded-xl p-6 w-full max-w-[320px] shadow-sm hover:shadow-md transition-shadow duration-300">
                    <span className="text-[#8BA4CA] text-sm font-bold tracking-wider">{step.num}</span>
                    <h3 className="text-[#0B132B] text-xl md:text-2xl font-bold mt-1 mb-3">{step.title}</h3>
                    <span className="text-[#4A5568] text-sm font-medium">{step.time}</span>
                  </div>
                </motion.div>

                {/* Description Text (Right on Desktop) */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2, ease: "easeOut" }}
                  className="w-full md:w-1/2 flex md:justify-start md:pl-12 mt-4 md:mt-0"
                >
                  <p className="text-[#4A5568] text-base leading-relaxed max-w-[320px]">
                    {step.desc}
                  </p>
                </motion.div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
