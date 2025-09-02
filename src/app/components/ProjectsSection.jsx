"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 3,
    title: "GenZee Therapist Website",
    description:
      "A freelance project featuring a 4-page responsive website with smooth navigation and animations.",
    image: "/genzee.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kirito1610/GenZee-website",
    previewUrl: "https://genzee-therapist.com/",
  },
  {
    id: 4,
    title: "Interactive Dashboard",
    description:
      "Built with Highcharts and animations, integrated with real-time data for dynamic visualization.",
    image: "/dashboard.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://dashboard-mu-gray.vercel.app/",
  },
  {
    id: 5,
    title: "Todo Web App",
    description:
      "A frontend application with features like task creation, editing, deleting, searching, filtering, and sorting.",
    image: "/todo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kirito1610/Todo-App",
    previewUrl: "https://todo-pink-ten.vercel.app/",
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "A 3-page blog application including a listing page, detailed blog page, and a contact form.",
    image: "/blog.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Kirito1610/BlogPage",
    previewUrl: "https://blog-page-kappa.vercel.app/blog",
  },
  {
    id: 7,
    title: "Live Chat App",
    description:
      "A real-time chat application built with Stream Chat SDK, featuring user authentication (login/signup), chat rooms, and database integration.",
    image: "/liveChat.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/yourusername/live-chat-app",
    previewUrl: "https://message-friend.vercel.app/",
  },
  {
    id: 8,
    title: "Survey Page",
    description:
      "An interactive employee engagement survey page with a clean and user-friendly interface.",
    image: "/surey.png",
    tag: ["All", "Web"],
    previewUrl: "https://www.kenresearch.com/employee-engagement-survey",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div> */}
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
