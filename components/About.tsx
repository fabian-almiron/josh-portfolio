"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/Card";
import { personalInfo } from "@/lib/constants";
import { Code2, Rocket, Zap } from "lucide-react";
import Image from "next/image";

const highlights = [
  {
    icon: Code2,
    label: "Modern Stack",
    value: "React, Next.js, WordPress",
  },
  {
    icon: Rocket,
    label: "Scalable Solutions",
    value: "E-commerce & Web Apps",
  },
  {
    icon: Zap,
    label: "Performance Focused",
    value: "SEO & Accessibility",
  },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl tracking-tight">
            About Me
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          {/* Circular Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Decorative Rings */}
                <div className="absolute inset-0 rounded-full border border-gray-100 scale-110" />
                <div className="absolute inset-0 rounded-full border border-gray-100 scale-125 opacity-50" />
                
                {/* Image Wrapper */}
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-2xl shadow-gray-200/50 bg-gray-50">
                   {/* Placeholder until real image is provided */}
                   <div className="flex h-full w-full items-center justify-center bg-gray-50 text-gray-400">
                      <div className="flex flex-col items-center gap-2">
                        <Code2 size={48} className="text-gray-300" />
                        <span className="text-sm font-medium">Headshot</span>
                      </div>
                   </div>
                   {/* Once you have the image, use Next.js Image component here: */}
                   {/* <Image src="/path/to/round-image.jpg" alt="Joshua Tesch" fill className="object-cover" /> */}
                </div>

                {/* Floating Badge */}
                 <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-4 -right-4 bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 hidden sm:block"
                 >
                    <span className="text-sm font-medium text-gray-900">Web Developer</span>
                 </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
               <p>
                 Website Engineer with hands-on experience building and maintaining modern web applications across WordPress, headless CMS, and eCommerce platforms.
               </p>
               <p>
                 Skilled in <strong className="font-semibold text-gray-900 dark:text-white">Next.js, React, Headless WordPress, PHP, and JavaScript</strong>, with a strong focus on UX/UI, performance optimization, and maintainable code.
               </p>
               <p>
                 Regularly contributes recommendations around layout, content structure, and technical improvements to support usability, page speed, and conversion goals while collaborating with cross-functional teams.
               </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
               <p className="text-base font-medium text-gray-500 dark:text-gray-400 mb-6 uppercase tracking-wider text-sm">
                  Highlights
               </p>
               <div className="grid gap-4 sm:grid-cols-3">
                  {highlights.map((highlight) => (
                    <div key={highlight.label} className="group">
                       <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 group-hover:bg-gray-100 dark:group-hover:bg-gray-700 transition-colors">
                             <highlight.icon size={20} />
                          </div>
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">{highlight.label}</span>
                       </div>
                       <p className="text-sm text-gray-500 dark:text-gray-400 pl-[44px]">{highlight.value}</p>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
