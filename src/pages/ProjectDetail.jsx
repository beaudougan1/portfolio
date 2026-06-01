import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";
import ProjectHeader from "../components/project-detail/ProjectHeader";
import ProjectMedia from "../components/project-detail/ProjectMedia";
import DetailList from "../components/project-detail/DetailList";
import ProjectNavigation from "../components/project-detail/ProjectNavigation";

function ProjectDetail() {
  const { slug } = useParams();
  const projectIndex = projects.findIndex((project) => project.slug === slug);
  const project = projects[projectIndex];

  const previousProject = projectIndex > 0 ? projects[projectIndex - 1] : null;

  const nextProject =
    projectIndex >= 0 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <Link to="/" className="inline-flex items-center gap-2 text-blue-400">
            <ArrowLeft size={18} />
            Back to Home
          </Link>

          <h1 className="mt-8 text-5xl font-bold">Project Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-20">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>

        <ProjectHeader project={project} />

        <ProjectMedia project={project} />

        <section className="mt-20 grid gap-10 lg:grid-cols-[1.5fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold">Project Overview</h2>

            <p className="mt-5 max-w-3xl leading-8 text-slate-300">
              {project.overview}
            </p>
          </div>

          <aside className="h-fit rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h3 className="text-xl font-semibold">Technologies</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-slate-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <DetailList title="Key Accomplishments" items={project.achievements} />
          <DetailList title="Technical Challenges" items={project.challenges} />
          <DetailList title="What I Learned" items={project.lessons} />
          <DetailList
            title="Future Improvements"
            items={project.futureImprovements}
          />
        </section>

        <ProjectNavigation
          previousProject={previousProject}
          nextProject={nextProject}
        />
      </main>
    </div>
  );
}

export default ProjectDetail;