import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const navLinks = [
  { title: "About",      path: "#about" },
  { title: "Experience", path: "#experience" },
  { title: "Projects",   path: "#projects" },
  { title: "Contact",    path: "#contact" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-10">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
          {/* Brand */}
          <div>
            <p className="text-base font-bold text-slate-900">Vishal Kundu</p>
            <p className="text-xs text-slate-400 mt-0.5">Senior Software Developer</p>
          </div>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className="text-sm text-slate-500 hover:text-primary-600 font-medium transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social icons */}
          <div className="flex gap-3">
            <Link
              href="https://github.com/Kirito1610"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="h-9 w-9 rounded-lg bg-slate-800 flex items-center justify-center transition-colors group"
            >
              <Image
                src={GithubIcon}
                alt="GitHub"
                width={18}
                height={18}
                className="opacity-100 group-hover:opacity-60 transition-all"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="h-9 w-9 rounded-lg bg-sky-600 flex items-center justify-center transition-colors group"
            >
              <Image
                src={LinkedinIcon}
                alt="LinkedIn"
                width={18}
                height={18}
                className="  opacity-100 group-hover:opacity-60 group-hover:invert transition-all"
              />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
          <p>© {year} Vishal Kundu. All rights reserved.</p>
          <Link
            href="#"
            className="hover:text-primary-500 transition-colors"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
