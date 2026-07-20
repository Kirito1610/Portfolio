import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="rounded-xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div
        className="h-52 md:h-72 relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-70 transition-all duration-500 ">
          {gitUrl && (
            <Link
              href={gitUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-white/70 hover:border-white group/link"
            >
              <CodeBracketIcon className="h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-white/70 hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-white/70 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>
      <div className="text-slate-900 py-6 px-5">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
