import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 8,
    title: "Employee Survey Page",
    description:
      "Interactive engagement survey page deployed to production at Ken Research, with a clean, accessible UI.",
    image: "/surey.png",
    previewUrl: "https://www.kenresearch.com/employee-engagement-survey",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 9,
    title: "Media vault",
    description:
      "A vault between friends, completed secured with encyrepted media. Share media with just your closest friends.",
    image: "/media-valut.png",
    previewUrl: "https://my-gallery-three-pi.vercel.app/login",
    tags: ["Next.js", "TypeScript", "Tailwind CSS","PostgreSQL","Cloudinary","Node.js","Express " ],
  },
  {
    id: 1,
    title: "E-commerce Application",
    description:
      "Full-stack storefront built with Next.js and a Node.js backend, featuring product search, shopping cart, Stripe payments, and order tracking.",
    image: "/ecommerce.png",
    previewUrl: "https://e-comm-blue.vercel.app/",
    tags: ["Next.js", "Node.js", "Stripe", "MongoDB"],
  },
  {
    id: 3,
    title: "GenZee Therapist Website",
    description:
      "Freelance project — 4-page responsive website with smooth scroll animations and optimized performance.",
    image: "/genzee.png",
    previewUrl: "https://genzee.vercel.app/",
    tags: ["React", "CSS3", "Responsive Design"],
  },
  {
    id: 4,
    title: "Interactive Dashboard",
    description:
      "Data visualization dashboard built with Highcharts, featuring animated charts and real-time data integration.",
    image: "/dashboard.png",
    gitUrl: "/",
    previewUrl: "https://dashboard-mu-gray.vercel.app/",
    tags: ["React", "Highcharts", "Data Viz"],
  },
  {
    id: 5,
    title: "Todo Web App",
    description:
      "Feature-rich task manager with creation, editing, deletion, search, filtering, and sorting capabilities.",
    image: "/todo.png",
    gitUrl: "https://github.com/Kirito1610/Todo-App",
    previewUrl: "https://todo-pink-ten.vercel.app/",
    tags: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 6,
    title: "Blog Website",
    description:
      "3-page blog with a listing page, full article view, and a contact form — built with clean typography.",
    image: "/blog.png",
    gitUrl: "https://github.com/Kirito1610/BlogPage",
    previewUrl: "https://blog-page-kappa.vercel.app/blog",
    tags: ["Next.js", "TypeScript"],
  },
  {
    id: 7,
    title: "Live Chat App",
    description:
      "Real-time chat with authenticated login, messaging, emoji reactions, unread badges, and responsive group chats.",
    image: "/liveChat.png",
    previewUrl: "https://message-friend.vercel.app/",
    tags: ["React", "Socket.io", "Node.js", "Auth"],
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <div className="section-divider my-4" />

      <div className="py-12 sm:py-16">
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs font-semibold text-primary-500 mb-2">
            What I&apos;ve built
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <li
              key={project.id}
              className="animate-fade-in-up flex"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tags={project.tags}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
