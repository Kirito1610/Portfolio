"use client";
import React from "react";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const EXPERIENCE = [
  {
    role: "Senior Software Developer",
    company: "Ken Research",
    period: "Nov 2023 — Present",
    highlights: [
      "Built and maintained 80+ responsive, SEO-friendly pages with Next.js, React, TypeScript, and Tailwind CSS, using SSR/SSG for 2× faster page loads.",
      "Developed AI-powered features — LLM-based form auto-filling, intelligent requirement generation, and voice-enabled smart search — cutting manual effort by 40%.",
      "Optimized Core Web Vitals (LCP, INP, CLS), improving Lighthouse scores from 60 to 90+ while reducing bounce rate by 10%.",
      "Built interactive Highcharts dashboards across 10,000+ dynamic product pages, increasing engagement by 40%.",
      "Integrated Stripe payments and JWT auth with email/mobile OTP verification, plus Microsoft Graph API for automated meeting scheduling.",
      "Adopted AI dev tools (Cursor AI, Claude, GitHub Copilot) to cut implementation time by roughly 60%.",
    ],
  },
  {
    role: "Software Developer, Intern",
    company: "Ken Research",
    period: "Aug 2023 — Oct 2023",
    highlights: [
      "Built 10+ responsive web pages using HTML, CSS, JavaScript, and Bootstrap.",
      "Assisted with a PHP-to-Next.js migration, reducing server load by 35%.",
      "Optimized robots.txt, sitemaps, and meta directives to improve search engine crawlability and indexing.",
      "Collaborated on frontend development, API integrations, testing, and Agile delivery.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-24 py-8 sm:py-16">
      <h2 className="text-center text-4xl font-bold text-slate-900 mb-12">
        Experience
      </h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-slate-200 sm:left-6" />
        <div className="space-y-10">
          {EXPERIENCE.map((job, index) => (
            <motion.div
              key={job.role + job.period}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              className="relative pl-14 sm:pl-16"
            >
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 shadow-md sm:h-12 sm:w-12">
                <BriefcaseIcon className="h-5 w-5 text-white sm:h-6 sm:w-6" />
              </span>
              <div className="rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm p-6">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-slate-900">
                    {job.role}
                  </h3>
                  <span className="text-xs font-medium text-primary-600 bg-primary-50 ring-1 ring-primary-100 rounded-full px-3 py-1">
                    {job.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-500 mb-4">
                  {job.company}
                </p>
                <ul className="space-y-2">
                  {job.highlights.map((point) => (
                    <li
                      key={point}
                      className="text-slate-600 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-primary-400 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
