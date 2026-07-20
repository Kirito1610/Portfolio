"use client";
import React from "react";
import Image from "next/image";
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
              sequence={["Vishal Kundu", 1000, "Software Engineer ", 1000]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-slate-600 text-base sm:text-lg lg:pr-20 mb-6 lg:text-xl">
            With 2 years’ experience in Next.js, React, TypeScript, and
            Tailwind, I build scalable web apps and create intuitive user
            experiences.
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
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 ring-1 ring-slate-200 shadow-xl w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
            <Image
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg?t=st=1749494745~exp=1749498345~hmac=27edc1392b56e7e4868acd695527d0b55125edc6c88cbe1a1d2123c27ac50621&w=1380"
              alt="hero image"
              className="absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
