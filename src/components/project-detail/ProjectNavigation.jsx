import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ProjectNavigation({ previousProject, nextProject }) {
  if (!previousProject && !nextProject) {
    return null;
  }

  return (
    <section className="mt-20 border-t border-slate-800 pt-10">
      <div className="grid gap-6 md:grid-cols-2">
        {previousProject ? (
          <Link
            to={`/projects/${previousProject.slug}`}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500/50"
          >
            <div className="mb-3 flex items-center gap-2 text-sm text-blue-400">
              <ArrowLeft size={16} />
              Previous Project
            </div>

            <h3 className="text-2xl font-semibold text-white">
              {previousProject.title}
            </h3>

            <p className="mt-2 text-slate-400">{previousProject.type}</p>
          </Link>
        ) : (
          <div />
        )}

        {nextProject ? (
          <Link
            to={`/projects/${nextProject.slug}`}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-right transition hover:-translate-y-1 hover:border-blue-500/50"
          >
            <div className="mb-3 flex items-center justify-end gap-2 text-sm text-blue-400">
              Next Project
              <ArrowRight size={16} />
            </div>

            <h3 className="text-2xl font-semibold text-white">
              {nextProject.title}
            </h3>

            <p className="mt-2 text-slate-400">{nextProject.type}</p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </section>
  );
}

export default ProjectNavigation;