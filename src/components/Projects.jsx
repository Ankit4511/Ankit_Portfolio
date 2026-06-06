import { useState } from "react";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";
import MobileProjectCard from "./MobileProjectCard";
import projects from "../data/projects";

import { SiPolymerproject } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
import { Link } from "react-router-dom";

function Projects() {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const normalProjects = projects.filter(
    (project) =>
      project.homepage &&
      !project.featured
  );

  const [activeDot, setActiveDot] = useState(0);

  return (
    <section
      id="projects"
      className="px-6 md:px-10 py-0"
    >
      <div className="max-w-7xl mx-auto">

        {/* Featured Project Heading */}

        <div className="flex items-center gap-3 mb-8">
          <SiPolymerproject className="text-blue-400 text-3xl" />

          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
        </div>

        {/* Featured Project */}

        {featuredProject ? (
          <FeaturedProject
            project={featuredProject}
          />
        ) : (
          <div className="text-red-400 text-xl">
            Featured Project Not Found
          </div>
        )}

        {/* Projects Heading */}

        <div className="flex justify-between items-center mt-14 mb-8">

          <h3 className="text-3xl font-bold flex items-center gap-3">
            <AiFillProject className="text-blue-400 text-2xl" />
            Projects
          </h3>

          <Link
            to="/projects"
            className="
              hidden md:block
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

        {/* Projects Container */}

        <div
          className="
          bg-gradient-to-r
          from-blue-500/10
          to-purple-500/10
          border
          border-white/10
          rounded-3xl
          p-4 md:p-8
          backdrop-blur-md
          hover:border-blue-500/20
          transition-all
          duration-500
        "
        >

          {/* Desktop Grid */}

          <div className="hidden md:grid md:grid-cols-2 gap-8">

            {normalProjects.map((project) => (

              <ProjectCard
                key={project.id}
                project={project}
              />

            ))}

          </div>

          {/* Mobile Slider */}

          <div
            className="
            md:hidden
            flex
            gap-4
            overflow-x-auto
            snap-x
            snap-mandatory
            scrollbar-hide
            pb-4
          "
            onScroll={(e) => {

              const cardWidth =
                window.innerWidth * 0.9;

              const index = Math.round(
                e.target.scrollLeft / cardWidth
              );

              setActiveDot(index);
            }}
          >

            {normalProjects.map((project) => (

              <div
                key={project.id}
                className="
                min-w-[90%]
                snap-center
                shrink-0
              "
              >

                <MobileProjectCard
                  project={project}
                />

              </div>

            ))}

          </div>

        </div>

        {/* Mobile Dots */}

        <div className="md:hidden flex justify-center gap-2 mt-5">

          {normalProjects.map((_, index) => (

            <div
              key={index}
              className={`
                transition-all
                duration-300
                rounded-full

                ${
                  activeDot === index
                    ? "w-6 h-2.5 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"
                    : "w-2.5 h-2.5 bg-white/20"
                }
              `}
            />

          ))}

        </div>

        {/* Mobile View All */}

        <div className="md:hidden mt-6">

          <Link
            to="/projects"
            className="
            block
            text-center
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

      </div>
    </section>
  );
}

export default Projects;