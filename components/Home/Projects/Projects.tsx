import { projectsData } from "@/constant/consant";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="px-4 py-20">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="theme-accent text-sm font-semibold uppercase tracking-[0.2em]">Projects</p>
          <h2 className="theme-text mt-3 text-3xl font-bold sm:text-4xl">Selected Work</h2>
          <p className="theme-text-muted mt-4">
            A few projects that highlight my approach to product design and engineering delivery.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
