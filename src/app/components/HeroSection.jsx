import Link from "next/link";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const TECH_BADGES = [
  "Next.js", "React", "TypeScript", "Django", "Tailwind CSS",
];

const HeroSection = () => {
  return (
    <section className="relative lg:py-20 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 blur-3xl opacity-50 pointer-events-none" />

      <div className="relative grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        {/* Left column */}
        <div className="animate-fade-in col-span-7 place-self-center text-center sm:text-left">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 bg-green-50 ring-1 ring-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for new opportunities
          </div>

          <p className="uppercase tracking-widest text-xs font-semibold text-primary-500 mb-3">
            Senior Software Developer
          </p>

          <h1 className="text-slate-900 mb-5 text-4xl sm:text-5xl lg:text-[3.5rem] lg:leading-tight font-extrabold">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Vishal Kundu</span>
          </h1>

          <p className="text-slate-500 text-base sm:text-lg lg:text-lg lg:pr-10 mb-8 leading-relaxed max-w-xl mx-auto sm:mx-0">
            I turn ideas into fast, polished web apps — from pixel-perfect UIs
            to AI-powered features that make products feel smarter.{" "}
            <span className="font-semibold text-slate-700">3+ years</span> shipping
            production software at{" "}
            <span className="font-semibold text-slate-700">Ken Research</span>,
            with a track record of measurable results.
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center sm:justify-start">
            {TECH_BADGES.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 ring-1 ring-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
            <Link
              href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-sm font-semibold shadow-md shadow-primary-200 hover:shadow-lg hover:shadow-primary-300 hover:-translate-y-0.5 transition-all"
            >
              Hire Me
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
            <Link
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-slate-700 text-sm font-semibold hover:border-primary-400 hover:text-primary-600 hover:-translate-y-0.5 transition-all"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download CV
            </Link>
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-slate-600 text-sm font-semibold hover:text-primary-600 transition-colors"
            >
              <CodeBracketIcon className="h-4 w-4" />
              View Work
            </Link>
          </div>
        </div>

        {/* Right column — code card */}
        <div
          className="animate-fade-in col-span-5 place-self-center mt-6 sm:mt-0"
          style={{ animationDelay: "150ms" }}
        >
          <div className="relative w-[280px] h-[280px] lg:w-[360px] lg:h-[360px] mx-auto">
            {/* Halo */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-300 to-secondary-300 blur-3xl opacity-40" />

            {/* Code card */}
            <div className="animate-float relative w-full h-full rounded-2xl bg-[#0f0f1a] ring-1 ring-white/10 shadow-2xl overflow-hidden flex flex-col">
              {/* Title bar */}
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/10">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[10px] text-slate-400 font-mono tracking-wide">
                  vishal.dev
                </span>
              </div>

              {/* Code body */}
              <div className="flex-1 p-5 font-mono text-[11.5px] leading-6 space-y-0.5 overflow-hidden">
                <p className="text-slate-500">// turning ideas into products</p>
                <p className="text-slate-500">// since 2023</p>
                <p className="mt-2">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">dev</span>{" "}
                  <span className="text-slate-400">=</span>{" "}
                  <span className="text-slate-400">{"{"}</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">name</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-green-300">&apos;Vishal Kundu&apos;</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">stack</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-slate-400">[</span>
                  <span className="text-green-300">&apos;Next.js&apos;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-green-300">&apos;React&apos;</span>
                  <span className="text-slate-400">, </span>
                  <span className="text-green-300">&apos;Django&apos;</span>
                  <span className="text-slate-400">],</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">shipped</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-orange-300">80</span>
                  <span className="text-slate-400">+</span>
                  <span className="text-slate-500"> pages</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">lighthouse</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-orange-300">90</span>
                  <span className="text-slate-400">+,</span>
                </p>
                <p className="pl-4">
                  <span className="text-sky-300">superpower</span>
                  <span className="text-slate-400">:</span>{" "}
                  <span className="text-green-300">&apos;AI + clean UI&apos;</span>
                  <span className="text-slate-400">,</span>
                </p>
                <p>
                  <span className="text-slate-400">{"}"}</span>
                </p>
                <p className="pt-3 text-primary-400 text-sm">
                  <span className="animate-pulse">▍</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
