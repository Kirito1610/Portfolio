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
<li>TypeScript</li>
<li>Tailwind CSS</li>
<li>JavaScript</li>
      </ul>
      <ul className="list-disc pl-2">
        <li>Git</li>
<li>Node.js </li>
<li>Express </li>
<li>MongoDB </li>
<li>MySQL</li>
      </ul>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Full-Stack Web Development with React Specialization</li>
        <li>Graduation – Maharshi Dayanand University, Rohtak, Haryana</li>
      </ul>
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="">
            I'm a Software Developer with experience in building modern, responsive, and high-performance web applications. I specialize in React, Redux, Next.js, Tailwind CSS, and TypeScript, and use Git for version control and collaboration.</p>
<p className=" mt-2">
I also have a solid understanding of backend technologies like Node.js, Express, MongoDB, and MySQL, and I’m continuously expanding my skills to become a more versatile full-stack developer. I'm a quick learner and a collaborative team player, passionate about writing clean code and creating seamless user experiences.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
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
