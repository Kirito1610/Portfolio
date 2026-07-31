"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <p className="uppercase tracking-widest text-sm font-semibold text-primary-600 mb-3">
            Welcome to my portfolio
          </p>
          <h1 className="text-slate-900 mb-4 text-3xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Vishal Kundu", 1000, "Software Developer", 1000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-600 text-base sm:text-lg lg:pr-20 mb-6 lg:text-xl">
            With 3+ years&apos; experience building production web apps at{" "}
            <span className="font-semibold text-slate-800">Ken Research</span>,
            I specialize in Next.js, React, TypeScript, and Django, and I love
            pairing modern frontend craft with AI-powered features that make
            products feel smarter.
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 text-white font-medium shadow-md shadow-primary-200 hover:shadow-lg hover:shadow-primary-300 transition-shadow"
            >
              Hire Me
            </Link>
            <Link
              href="/Resume.pdf"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full border-2 border-slate-200 text-slate-700 font-medium hover:border-primary-400 hover:text-primary-600 transition-colors mt-3 sm:mt-0"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 sm:mt-0"
        >
          <div className="relative w-[260px] h-[260px] lg:w-[340px] lg:h-[340px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-200 to-secondary-200 blur-2xl opacity-60" />
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-full rounded-2xl bg-slate-900 ring-1 ring-slate-800 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-1.5 px-4 py-3 bg-slate-800/80 border-b border-slate-700">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                <span className="ml-3 text-[10px] text-slate-400 font-mono">
                  vishal-kundu.dev
                </span>
              </div>
              <div className="flex-1 p-4 font-mono text-[11px] leading-relaxed space-y-1.5">
                <p>
                  <span className="text-primary-400">const</span>{" "}
                  <span className="text-secondary-300">developer</span> = {"{"}
                </p>
                <p className="pl-4 text-slate-300">
                  name: <span className="text-green-300">&apos;Vishal Kundu&apos;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  role: <span className="text-green-300">&apos;Senior Software Developer&apos;</span>,
                </p>
                <p className="pl-4 text-slate-300">
                  stack: [<span className="text-green-300">&apos;Next.js&apos;</span>,{" "}
                  <span className="text-green-300">&apos;React&apos;</span>,{" "}
                  <span className="text-green-300">&apos;Django&apos;</span>],
                </p>
                <p className="pl-4 text-slate-300">
                  loves: <span className="text-green-300">&apos;clean UI + AI&apos;</span>,
                </p>
                <p>{"}"}</p>
                <p className="pt-2 text-primary-400">
                  <span className="animate-pulse">▍</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
