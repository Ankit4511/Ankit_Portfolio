import {
  FaGithub,
  FaExternalLinkAlt
} from "react-icons/fa";

import { Link } from "react-router-dom";
function ProjectCard({ project }) {

  return (

    <div
      className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      overflow-hidden
      hover:border-blue-500/30
      transition
      duration-300
    "
    >

      <img
        src={project.image}
        alt={project.title}
        className="
          w-full
          h-52
          object-cover
        "
      />

      <div className="p-5">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 mb-5">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">

          {project.tech?.map((tech, index) => (

            <span
              key={index}
              className="
              text-xs
              px-3
              py-1
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

        <div className="flex gap-5">

          <a
            href={project.live}
            target="_blank"
            className="
            flex
            items-center
            gap-2
            text-cyan-400
          "
          >
            Live Demo
            <FaExternalLinkAlt />
          </a>

          <a
            href={project.github}
            target="_blank"
            className="
            flex
            items-center
            gap-2
            text-blue-400
          "
          >
            GitHub
            <FaGithub />
          </a>

          <Link to={`/projects/${project.id}`} className="text-cyan-400
      hover:text-cyan-300
      transition">
  View Details
</Link>

        </div>

      </div>

    </div>

  );
}

export default ProjectCard;