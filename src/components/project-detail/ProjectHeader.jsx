import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectHeader({ project }) {
  return (
    <section className="mt-12 max-w-4xl">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <p className="text-blue-400">{project.type}</p>

        {project.category && (
          <span className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-400">
            {project.category}
          </span>
        )}
      </div>

      <h1 className="text-5xl font-bold leading-tight md:text-7xl">
        {project.title}
      </h1>

      <p className="mt-6 text-xl leading-8 text-slate-300">
        {project.description}
      </p>

      {(project.github || project.demo) && (
        <div className="mt-8 flex flex-wrap gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 transition hover:border-blue-400"
            >
              <FaGithub />
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 font-medium transition hover:bg-blue-500"
            >
              <ExternalLink size={18} />
              Watch Demo
            </a>
          )}
        </div>
      )}
    </section>
  );
}

export default ProjectHeader;