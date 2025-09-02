"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex  gap-10">
        <ul className="list-disc pl-2">
          <li>React</li>
          <li>Redux</li>
          <li>Next.js</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>JavaScript</li>
        </ul>
        <ul className="list-disc pl-2">
          <li>Git</li>
          <li>Node.js </li>
          <li>Express </li>
        </ul>
        <ul className="list-disc pl-2">
          <li>MongoDB </li>
          {/* <li>MySQL</li> */}
        </ul>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 max-sm:gap-5 items-center py-8 px-4 sm:py-16 xl:px-0">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="">
            I am a software developer with 2 years of experience specializing in
            Next.js, React.js, TypeScript, and Tailwind CSS. My expertise lies
            in building scalable web applications with a strong focus on
            performance, maintainability, and user-centric design.
          </p>
          <p className=" mt-2">
            I have worked across the full development cycle—from translating
            requirements into technical solutions to delivering responsive,
            production-ready applications. I am particularly skilled at creating
            clean, reusable code and implementing modern frontend architectures
            that enhance both usability and scalability.
          </p>
          <p className="mt-2">
            I am motivated by solving complex challenges with efficient
            solutions and continuously improving my skills to stay aligned with
            evolving industry standards.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
