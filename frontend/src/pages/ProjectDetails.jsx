import { useParams } from "react-router-dom";
import projects from "../data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === id
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-4xl text-red-400">
        Project Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen pt-32 pb-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}

        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          {project.title}
        </h1>

        {/* IMAGE */}

        <img
          src={project.image}
          alt={project.title}
          className="
            w-full
            rounded-3xl
            border
            border-white/10
            mb-10
          "
        />

        {/* OVERVIEW */}

        {project.overview && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Overview
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg">
              {project.overview}
            </p>
          </div>
        )}

        {/* FULL DESCRIPTION */}

        {project.fullDescription && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Project Details
            </h2>

            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>
        )}

        {/* FEATURES */}

        {project.features?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Key Features
            </h2>

            <ul className="space-y-4">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="
                    text-gray-300
                    flex
                    items-start
                    gap-3
                  "
                >
                  <span className="text-cyan-400 mt-1">
                    ●
                  </span>

                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* TECH STACK */}

        {project.techStack?.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Tech Stack
            </h2>

            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-blue-500/10
                    border
                    border-blue-500/20
                    text-blue-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* BUTTONS */}

        <div className="flex flex-wrap gap-4">

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-cyan-500/10
                border
                border-cyan-500/20
                text-cyan-400
                hover:bg-cyan-500/20
                transition
              "
            >
              Live Demo
              <FaExternalLinkAlt />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                flex
                items-center
                gap-2
                px-6
                py-3
                rounded-xl
                bg-white/5
                border
                border-white/10
                text-white
                hover:bg-white/10
                transition
              "
            >
              GitHub
              <FaGithub />
            </a>
          )}

        </div>

      </div>
    </section>
  );
}

export default ProjectDetails;