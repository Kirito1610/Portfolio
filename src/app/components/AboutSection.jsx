import Image from "next/image";

const SKILL_GROUPS = [
  {
    label: "Frontend",
    color: "text-purple-600 bg-purple-50 ring-purple-100",
    skills: [
      "Next.js", "React.js", "Redux", "TypeScript", "JavaScript",
      "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "TanStack Query",
      "ShadCN UI", "Material-UI", "Formik & Yup", "Axios",
    ],
  },
  {
    label: "Backend",
    color: "text-sky-600 bg-sky-50 ring-sky-100",
    skills: ["Python", "Django", "Django REST Framework", "Node.js", "Express.js"],
  },
  {
    label: "Tools & Platforms",
    color: "text-emerald-600 bg-emerald-50 ring-emerald-100",
    skills: [
      "Git & GitHub", "GitHub Actions", "Postman", "Jira",
      "VS Code", "Webpack", "Turbopack",
    ],
  },
  {
    label: "AI Tools",
    color: "text-orange-600 bg-orange-50 ring-orange-100",
    skills: ["Cursor AI", "Claude", "GitHub Copilot", "Codex"],
  },
];

const AboutSection = () => {
  return (
    <section className="scroll-mt-24" id="about">
      <div className="section-divider my-4" />

      <div className="py-12 sm:py-16">
        <div className="md:grid md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="relative animate-fade-in">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-primary-100 to-secondary-100 blur-xl opacity-60" />
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-md">
              <Image
                src="/images/about-image.png"
                width={500}
                height={500}
                alt="Vishal Kundu developer workspace"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Text */}
          <div className="mt-8 md:mt-0 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <p className="uppercase tracking-widest text-xs font-semibold text-primary-500 mb-2">
              Get to know me
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">About Me</h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-[15px]">
              <p>
                I&apos;m a <span className="font-semibold text-slate-800">Senior Software Developer</span> at{" "}
                <span className="font-semibold text-slate-800">Ken Research</span> with 3+ years of experience across
                Next.js, React, TypeScript, Tailwind CSS, Python, and Django. I build scalable, SEO-friendly
                applications with a strong focus on performance, maintainability, and user-centric design.
              </p>
              <p>
                I&apos;ve owned the full development cycle — translating requirements into technical solutions,
                shipping 80+ production-ready pages, optimizing Core Web Vitals (Lighthouse 60 → 90+), and building
                AI-powered features like LLM-based form auto-filling and voice-enabled smart search.
              </p>
              <p>
                I actively leverage AI dev tools — Cursor AI, Claude, and GitHub Copilot — to move faster without
                sacrificing quality, cutting implementation time by roughly 60%.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8 space-y-5">
              {SKILL_GROUPS.map((group) => (
                <div key={group.label}>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs font-medium px-3 py-1 rounded-full ring-1 ${group.color}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
