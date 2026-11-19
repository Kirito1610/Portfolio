"use client";
import { useState } from "react";
import { MapPinIcon, CalendarIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const EXPERIENCE = [
  {
    role: "Senior Software Developer",
    company: "Ken Research",
    companyUrl: "https://www.kenresearch.com",
    type: "Full-time",
    location: "Gurugram, India",
    period: "Nov 2023 — Present",
    duration: "2 yrs+",
    current: true,
    tags: ["Next.js", "React", "TypeScript", "Django", "Tailwind CSS", "AI/LLM", "Highcharts", "Stripe"],
    highlights: [
      { text: "Built and maintained 80+ responsive, SEO-friendly pages with Next.js, React, TypeScript, and Tailwind CSS, leveraging SSR/SSG for 2× faster page loads and 40% better scalability.", metric: "2× faster loads" },
      { text: "Developed AI-powered solutions — LLM-based prompt-engineered form auto-filling, intelligent requirement generation, and voice-enabled smart search — reducing manual user effort by 40%.", metric: "40% less effort" },
      { text: "Optimized Core Web Vitals (LCP, INP, CLS), improving Lighthouse scores from 60 to 90+ while reducing bounce rate by 10%.", metric: "90+ Lighthouse" },
      { text: "Built interactive Highcharts dashboards across 10,000+ dynamic product pages, increasing user engagement and page interaction by 40%.", metric: "+40% engagement" },
      { text: "Integrated Microsoft Graph API to automate meeting scheduling, generating 2,000+ additional customer interactions every month.", metric: "2,000+ interactions/mo" },
      { text: "Implemented an AI-powered Microsoft Teams/Zoom assistant, reducing support queries while increasing qualified leads by 20%.", metric: "+20% leads" },
      { text: "Integrated Stripe payment gateway and implemented JWT authentication with email/mobile OTP verification for secure user onboarding and payments.", metric: null },
      { text: "Developed and maintained RESTful APIs ensuring secure, scalable, and maintainable backend services, with pagination, filtering, sorting, and search for large datasets.", metric: null },
      { text: "Developed responsive HTML templates using Django Template Language (DTL) with reusable layouts and template inheritance.", metric: null },
      { text: "Optimized database operations through indexing, query tuning, and efficient data modeling to reduce response times.", metric: null },
      { text: "Developed role-based dashboards for project tracking, client management, payments, and workflow transparency.", metric: null },
      { text: "Automated PR validation with GitHub Actions for code formatting, build verification, and conflict detection, improving deployment safety.", metric: null },
      { text: "Adopted AI development tools (Cursor AI, Claude, GitHub Copilot) to enhance development efficiency, reducing implementation time by approximately 60%.", metric: "60% faster" },
    ],
  },
  {
    role: "Software Developer, Intern",
    company: "Ken Research",
    companyUrl: "https://www.kenresearch.com",
    type: "Internship",
    location: "Gurugram, India",
    period: "Aug 2023 — Oct 2023",
    duration: "3 mos",
    current: false,
    tags: ["HTML/CSS", "JavaScript", "Bootstrap", "Next.js", "PHP", "SEO"],
    highlights: [
      { text: "Built 10+ responsive web pages using HTML, CSS, JavaScript, and Bootstrap.", metric: "10+ pages" },
      { text: "Assisted with a PHP-to-Next.js migration, reducing server load by 35%.", metric: "35% less load" },
      { text: "Configured and optimized robots.txt, .md files, AI sitemap, and meta directives to improve crawlability and indexing by search engines.", metric: null },
      { text: "Collaborated on frontend development, API integrations, testing, and Agile delivery.", metric: null },
    ],
  },
];

const ExperienceSection = () => {
  const [active, setActive] = useState(0);
  const job = EXPERIENCE[active];

  return (
    <section id="experience" className="scroll-mt-24">
      <div className="section-divider my-4" />

      <div className="py-12 sm:py-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary-500 mb-2">
            Work history
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Experience</h2>
          <p className="mt-3 text-slate-500 text-sm max-w-sm mx-auto">
            3+ years building and shipping production web applications.
          </p>
        </div>

        {/* Horizontal tab layout */}
        <div className="flex flex-col md:flex-row gap-0 bg-white ring-1 ring-slate-200 rounded-2xl shadow-sm overflow-hidden max-w-5xl mx-auto">

          {/* ── Left: job selector tabs ── */}
          <div className="md:w-56 flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-100 flex md:flex-col overflow-x-auto md:overflow-visible">
            {EXPERIENCE.map((j, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`group relative flex-shrink-0 text-left w-full px-5 py-4 transition-all duration-200 focus:outline-none
                  ${active === i
                    ? "bg-primary-50 text-primary-700"
                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  }`}
              >
                {/* Active indicator */}
                <span
                  className={`absolute left-0 top-0 h-full w-0.5 md:w-0.5 md:h-full bg-gradient-to-b from-primary-500 to-secondary-500 transition-all duration-200
                    ${active === i ? "opacity-100" : "opacity-0"}`}
                />
                {/* On mobile: bottom border indicator */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 md:hidden bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-200
                    ${active === i ? "opacity-100" : "opacity-0"}`}
                />

                <p className={`text-xs font-bold leading-snug ${active === i ? "text-primary-700" : "text-slate-700"}`}>
                  {j.role.replace(", Intern", "")}
                </p>
                <p className={`text-[11px] mt-0.5 ${active === i ? "text-primary-500" : "text-slate-400"}`}>
                  {j.type}
                </p>
                <p className={`text-[10px] mt-1 font-medium ${active === i ? "text-primary-400" : "text-slate-400"}`}>
                  {j.duration}
                </p>
                {j.current && (
                  <span className="inline-flex items-center gap-1 mt-1.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wide text-green-600">Current</span>
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Right: detail panel ── */}
          <div className="flex-1 p-6 sm:p-8 min-w-0">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-bold text-slate-900">{job.role}</h3>
                  {job.current && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-green-50 text-green-600 ring-1 ring-green-200">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1.5">
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    {job.company}
                    <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                  </a>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <CalendarIcon className="h-3.5 w-3.5" />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPinIcon className="h-3.5 w-3.5" />
                    {job.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-slate-50 text-slate-500 ring-1 ring-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="h-px bg-slate-100 mb-5" />

            {/* Highlights */}
            <ul className="space-y-3.5">
              {job.highlights.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <div className="mt-1.5 flex-shrink-0 h-5 w-5 rounded-full bg-primary-50 ring-1 ring-primary-100 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                    {item.metric && (
                      <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wide text-secondary-600 bg-secondary-50 ring-1 ring-secondary-100 px-2 py-0.5 rounded-full">
                        {item.metric}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-400 mt-6">
          Full details in my{" "}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline font-medium"
          >
            resume →
          </a>
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;
