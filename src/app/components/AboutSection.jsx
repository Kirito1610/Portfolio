"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    skills: [
      "Next.js",
      "React.js",
      "Redux",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "TanStack Query",
      "ShadCN UI",
      "Material-UI",
      "Formik & Yup",
      "Axios",
    ],
  },
  {
    label: "Backend",
    skills: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  {
    label: "Tools & Platforms",
    skills: [
      "Git & GitHub",
      "GitHub Actions",
      "Postman",
      "Jira",
      "VS Code",
      "Webpack",
      "Turbopack",
    ],
  },
  {
    label: "AI Tools",
    skills: ["Cursor AI", "Claude", "GitHub Copilot", "Codex"],
  },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-5">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label}>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-sm text-slate-600 bg-slate-100 ring-1 ring-slate-200 rounded-full px-3 py-1"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
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
    <section className="text-slate-900 scroll-mt-24" id="about">
      <div className="md:grid md:grid-cols-2 max-sm:gap-5 items-center py-8 px-4 sm:py-16 xl:px-0">
        <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-sm">
          <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="Illustration of a developer workspace"
          />
        </div>
        <div className="mt-4 md:mt-0 md:pl-10 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-600 leading-relaxed">
            I&apos;m a Senior Software Developer at Ken Research with 3+ years
            of experience across Next.js, React, TypeScript, Tailwind CSS,
            Python, and Django. I build scalable, SEO-friendly web
            applications with a strong focus on performance, maintainability,
            and user-centric design.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            I&apos;ve worked across the full development cycle — from
            translating requirements into technical solutions to shipping
            80+ responsive, production-ready pages, optimizing Core Web
            Vitals, and building AI-powered features like prompt-engineered
            form auto-filling and voice-enabled smart search.
          </p>
          <p className="text-slate-600 leading-relaxed mt-3">
            I&apos;m motivated by solving complex problems with efficient
            solutions, and I actively use AI development tools like Cursor
            AI, Claude, and GitHub Copilot to work faster without cutting
            corners on quality.
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
