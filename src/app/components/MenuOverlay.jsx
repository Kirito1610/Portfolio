import NavLink from "./NavLink";
import Link from "next/link";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md px-6 py-4 shadow-lg">
      <ul className="flex flex-col gap-1">
        {links.map((link, index) => (
          <li key={index} onClick={onClose}>
            <NavLink href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
      <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
        <Link
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-semibold py-2.5 rounded-full border-2 border-primary-400 text-primary-600 hover:bg-primary-50 transition-colors"
        >
          Resume
        </Link>
        <Link
          href="https://www.linkedin.com/in/vishal-kundu-a974112ba/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center text-sm font-semibold py-2.5 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-sm"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default MenuOverlay;
