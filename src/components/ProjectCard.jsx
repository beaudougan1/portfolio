import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ project, featured = false }) {
  const hasLinks = project.github || project.demo;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition duration-200 hover:-translate-y-1 hover:border-blue-500/50 ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <Link
        to={`/projects/${project.slug}`}
        className={`block overflow-hidden bg-slate-800 ${
          featured ? "min-h-[320px]" : "aspect-video"
        }`}
      >
        {project.video ? (
          <video
            src={project.video}
            controls
            className="h-full w-full object-cover"
          />
        ) : project.image ? (
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex h-full min-h-[240px] items-center justify-center text-slate-500">
            Project media coming soon
          </div>
        )}
      </Link>

      <div className={featured ? "p-8 lg:p-10" : "p-6"}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-sm text-blue-400">
            {project.type}
          </span>

          {project.category && (
            <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-400">
              {project.category}
            </span>
          )}
        </div>

        <Link to={`/projects/${project.slug}`}>
          <h3
            className={
              featured
                ? "text-3xl font-semibold text-white transition group-hover:text-blue-300"
                : "text-2xl font-semibold text-white transition group-hover:text-blue-300"
            }
          >
            {project.title}
          </h3>
        </Link>

        <p className="mt-4 text-slate-300">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2 text-sm text-slate-300">
          {project.achievements.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/projects/${project.slug}`}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium transition hover:bg-blue-500"
          >
            View Details
          </Link>

          {hasLinks && (
            <>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-blue-400"
                >
                  GitHub
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-slate-700 px-4 py-2 text-sm transition hover:border-blue-400"
                >
                  Live Demo
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;