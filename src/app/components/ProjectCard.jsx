import {
  CodeBracketIcon,
  EyeIcon,
  RocketLaunchIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, tags }) => {
  return (
    <div className="group flex flex-col h-full rounded-2xl overflow-hidden bg-white ring-1 ring-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300">
      {/* Image area */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-slate-100">
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={`${title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
            <RocketLaunchIcon className="h-14 w-14 text-white/60" />
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/70 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100">
          {gitUrl && gitUrl !== "/" && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/10 ring-1 ring-white/30 text-white text-xs font-semibold backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              <CodeBracketIcon className="h-4 w-4" />
              Code
            </Link>
          )}
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/90 text-slate-900 text-xs font-semibold hover:bg-white transition-colors"
            >
              <EyeIcon className="h-4 w-4" />
              Live Demo
            </Link>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h5 className="text-base font-bold text-slate-900 leading-snug">{title}</h5>
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 text-slate-400 hover:text-primary-500 transition-colors"
              aria-label="Open live demo"
            >
              <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </Link>
          )}
        </div>

        <p className="text-slate-500 text-sm leading-relaxed flex-1">{description}</p>

        {/* Tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-primary-50 text-primary-600 ring-1 ring-primary-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
