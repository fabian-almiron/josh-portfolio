"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "@/lib/constants";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl tracking-tight">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          {/* Timeline items */}
          <div className="space-y-12">
            {experience.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative pl-10"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-[6px] h-4 w-4 rounded-full bg-gray-900 dark:bg-gray-100 ring-4 ring-white dark:ring-gray-900" />

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <Briefcase className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.company}
                  </h3>
                  
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                    {exp.role}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="text-base text-gray-600 dark:text-gray-300 flex items-start gap-3 leading-relaxed"
                      >
                        <span className="text-gray-400 dark:text-gray-600 mt-1.5 text-xs">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

