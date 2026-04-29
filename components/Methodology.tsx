"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

const STEPS = [
  {
    num: "01",
    title: "Strategy",
    desc: "Full business + marketing audit. Funnel, channels, CRM, ops. We find the leaks before we pour in fuel.",
  },
  {
    num: "02",
    title: "Research",
    desc: "Positioning, offer, pricing, ICP. A clear growth plan with channel mix, targets, and a 90-day roadmap.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Campaigns live. Tracking in place. Creative tested. Systems installed. First leads already in the pipeline.",
  },
  {
    num: "04",
    title: "Optimization",
    desc: "Weekly performance reviews, creative iteration, audience refinement. We decode what's working — and double down.",
  },
  {
    num: "05",
    title: "Scaling",
    desc: "Scale winning campaigns, codify SOPs, train your team. Hand you a repeatable playbook you can run with forever.",
  },
];

export default function Methodology() {
  const sectionRef = useRef<HTMLElement>(null);
  const linePathRef = useRef<SVGPathElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    let ctx = gsap.context(() => {
      // 1. Title Animation: Staggered Words
      gsap.from(".methodology-title-word", {
        scrollTrigger: {
          trigger: ".methodology-header",
          start: "top 80%",
          toggleActions: "restart none none reset"
        },
        y: 40,
        opacity: 0,
        filter: "blur(8px)",
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      });

      // 2. Line Animation: Progressive Draw Scrub
      const linePath = linePathRef.current;
      if (linePath) {
        const pathLength = linePath.getTotalLength();
        gsap.set(linePath, { strokeDasharray: pathLength, strokeDashoffset: pathLength });

        gsap.to(linePath, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 50%",
            end: "bottom 60%",
            scrub: 1.5, // smooth scrub effect
          }
        });
      }

      // 3. Boxes & Nodes Animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        
        // Card Reveal
        gsap.fromTo(card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 60%",
              toggleActions: "restart none none reset"
            }
          }
        );

        // Node Glow Reveal
        const node = nodesRef.current[i];
        if (node) {
          gsap.fromTo(node,
            { scale: 0, opacity: 0, boxShadow: "0 0 0px rgba(16, 113, 255, 0)" },
            {
              scale: 1, 
              opacity: 1, 
              boxShadow: "0 0 25px rgba(16, 113, 255, 0.9)",
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 60%",
                toggleActions: "restart none none reset"
              }
            }
          );
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Our Methodology".split(" ");

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#00040D] py-32 overflow-hidden font-satoshi"
    >
      {/* Background Subtle Gradient Animation */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#1071FF]/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="methodology-header text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-bold flex justify-center gap-[0.3em] flex-wrap tracking-tight">
            {titleText.map((word, i) => (
              <span 
                key={i} 
                className={`methodology-title-word inline-block ${
                  word === "Methodology" 
                  ? "bg-gradient-to-r from-[#1071FF] via-[#3B82F6] to-[#1071FF] bg-[length:200%_auto] bg-clip-text text-transparent animate-shimmer" 
                  : "text-white"
                }`}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="timeline-container relative w-full flex justify-center">
          
          {/* Center Line SVG */}
          <div className="absolute top-0 bottom-0 left-6 md:left-1/2 md:-translate-x-1/2 w-[4px] z-0 overflow-hidden rounded-full bg-white/5">
            <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 4 1000">
              <path 
                ref={linePathRef}
                d="M 2 0 L 2 1000" 
                stroke="url(#line-gradient)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                fill="none" 
              />
              <defs>
                <linearGradient id="line-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1071FF" stopOpacity="0" />
                  <stop offset="20%" stopColor="#1071FF" />
                  <stop offset="80%" stopColor="#1071FF" />
                  <stop offset="100%" stopColor="#1071FF" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="w-full space-y-16 md:space-y-32">
            {STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row w-full pl-16 md:pl-0 ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  
                  {/* Timeline Node */}
                  <div 
                    ref={el => {
                        if (el) {
                            nodesRef.current[index] = el;
                        }
                    }}
                    className="absolute left-6 -translate-x-[6px] md:left-1/2 md:-translate-x-1/2 top-8 md:top-1/2 md:-translate-y-1/2 w-4 h-4 rounded-full bg-[#1071FF] z-20 border-2 border-[#00040D]"
                  />

                  {/* Step Card */}
                  <div 
                    ref={el => {
                        if (el) {
                            cardsRef.current[index] = el;
                        }
                    }}
                    className={`w-full md:w-[45%] relative z-10 group perspective-1000 ${
                      isEven ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 transform-gpu hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(16,113,255,0.1)] cursor-pointer">
                      
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#1071FF] text-lg font-mono font-bold tracking-widest bg-[#1071FF]/10 px-3 py-1 rounded-full">
                          {step.num}
                        </span>
                        <h3 className="text-white text-2xl font-bold">{step.title}</h3>
                      </div>
                      
                      <p className="text-[#94A3B8] text-base leading-relaxed">
                        {step.desc}
                      </p>
                      
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite alternate;
        }
        @keyframes pulse-slow {
          0% { opacity: 0.3; transform: translateX(-50%) scale(1); }
          100% { opacity: 0.6; transform: translateX(-50%) scale(1.1); }
        }
      `}</style>
    </section>
  );
}
