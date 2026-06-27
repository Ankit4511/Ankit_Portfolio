import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  return (
    <section className="px-6 py-20">

      <h1 className="text-5xl font-bold mb-12">
        All Projects
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {projects.map((project,index) => (

          <ProjectCard
            key={index}
            project={project}
          />

        ))}

      </div>

    </section>
  );
}

export default ProjectsPage;