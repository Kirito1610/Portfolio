import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-slate-600 sm:text-lg font-medium rounded md:p-0 hover:text-primary-600 transition-colors"
    >
      {title}
    </Link>
  );
};

export default NavLink;
