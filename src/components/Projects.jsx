import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const inboxPilot = projects.find(
    (project) => project.slug === "inbox-pilot"
  );

  const robotProject = projects.find(
    (project) => project.slug === "qualcomm-robot"
  );

  const remainingProjects = projects.filter(
    (project) =>
      project.slug !== "inbox-pilot" &&
      project.slug !== "qualcomm-robot"
  );

  const categories = [
    "All",
    ...new Set(
      remainingProjects
        .map((project) => project.category)
        .filter(Boolean)
    ),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? remainingProjects
      : remainingProjects.filter(
          (project) => project.category === selectedCategory
        );

  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="mb-16">
        <p className="mb-3 text-blue-400">
          Selected Work
        </p>

        <h2 className="text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-slate-300">
          Projects focused on artificial intelligence,
          machine learning, robotics, and full-stack
          software engineering.
        </p>
      </div>

      <div className="space-y-10">
        {inboxPilot && (
          <ProjectCard
            project={inboxPilot}
            featured
          />
        )}

        {robotProject && (
          <ProjectCard
            project={robotProject}
            featured
          />
        )}
      </div>

      <div className="mt-24">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">
              Additional Projects
            </h2>

            <p className="mt-3 text-slate-400">
              Filter projects by category.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAllProjects(false);
                }}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selectedCategory === category
                    ? "border-blue-400 bg-blue-500/10 text-blue-300"
                    : "border-slate-700 text-slate-300 hover:border-blue-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="mt-8 text-slate-400">
            No projects found in this category.
          </p>
        )}

        {filteredProjects.length > 3 && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() =>
                setShowAllProjects(!showAllProjects)
              }
              className="rounded-lg border border-slate-700 px-6 py-3 transition hover:border-blue-400"
            >
              {showAllProjects
                ? "Show Less"
                : "View More Projects"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;