import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import { SiPolymerproject } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
import { Link } from "react-router-dom";


function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const normalProjects = projects.filter(
  project => project.homepage
); // Show only first 2 normal projects

console.log("All Projects:", projects);
console.log("Normal Projects:", normalProjects);

  console.log(projects);
  console.log(featuredProject);

  return (
    <section id="projects" className="px-6 md:px-10 py-0">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-8">
  <SiPolymerproject className="text-blue-400 text-3xl" />

  <h2 className="text-3xl md:text-4xl font-bold">
    Featured Projects
  </h2>
</div>

        {/* FEATURED PROJECT */}

        {featuredProject ? (
          <FeaturedProject
            project={featuredProject}
          />
        ) : (
          <div className="text-red-400 text-xl">
            Featured Project Not Found
          </div>
        )}

        {/* PROJECTS HEADER */}

        <div className="flex justify-between items-center mt-14 mb-8">

          <div className="flex items-center gap-3">

  <div className="w-2 h-2 "></div>

  <h3 className="text-3xl font-bold flex items-center gap-3">

    <AiFillProject className="text-blue-400 text-2xl" />

    Projects

  </h3>

</div>

          <Link
          to="/projects"
            className="
              px-5
              py-3
              rounded-xl
              border
              border-purple-500/20
              text-purple-300
              hover:bg-purple-500/10
              transition
            "
          >
            View All Projects →
          </Link>

        </div>

        {/* NORMAL PROJECTS */}
<div
      className="
      bg-gradient-to-r
      from-blue-500/10
      to-purple-500/10
      border
      border-white/10
      rounded-3xl
      p-8
      backdrop-blur-md
      hover:border-blue-500/20
      transition-all
      duration-500
    "
    >
      <div className="grid md:grid-cols-2 gap-8">

          {normalProjects.map((project, index) => (

            <ProjectCard
              key={index}
              project={project}
            />

          ))}

        </div>
    </div>
        

      </div>

    </section>
  );
}

export default Projects;