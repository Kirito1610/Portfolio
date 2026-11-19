"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`nav-link-underline block py-2 text-sm font-semibold tracking-wide rounded md:p-0 transition-colors ${
        isActive
          ? "text-primary-600 active"
          : "text-slate-600 hover:text-primary-600"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavLink;
