import {
  FaGithub,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

function MobileProjectCard({ project }) {
  if (!project) return null;

  return (
    <div
      className="
      w-74
      snap-center
      shrink-0

      bg-gradient-to-br
      from-blue-500/10
      to-purple-500/10

      border
      border-white/10

      rounded-3xl
      overflow-hidden

      backdrop-blur-md
    "
    >
      {/* Image */}

      <div className="p-2 pb-0">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-44
          object-cover
          rounded-2xl
        "
        />
      </div>

      {/* Content */}

      <div className="p-5">

        <h3
          className="
          text-3xl
          font-bold
          mb-4
        "
        >
          {project.title}
        </h3>

        {/* Tech Stack */}

        <div className="flex flex-wrap gap-2 mb-5">

          {(project.techStack || project.tech)?.slice(0,4).map(
            (tech, index) => (
              <span
                key={index}
                className="
                px-3
                py-1

                rounded-full

                text-sm

                bg-white/5
                border
                border-white/10

                text-purple-300
              "
              >
                {tech}
              </span>
            )
          )}

        </div>

        {/* Description */}

        <p
          className="
          text-gray-400
          leading-8
          mb-6
          line-clamp-2
        "
        >
          {project.overview ||
            project.shortDescription}
        </p>

        {/* Features */}

        <div className="space-y-3 mb-8">

          {project.features
            ?.slice(0, 2)
            .map((feature, index) => (

              <div
                key={index}
                className="
                flex
                gap-3
              "
              >
                <FaCheckCircle
                  className="
                  text-cyan-400
                  mt-1
                  shrink-0
                "
                />

                <span className="text-gray-300">
                  {feature}
                </span>

              </div>

            ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1

            flex
            items-center
            justify-center
            gap-2

            py-3

            rounded-xl

            bg-gradient-to-r
            from-blue-600
            to-purple-600
          "
          >
            <FaExternalLinkAlt />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            flex-1

            flex
            items-center
            justify-center
            gap-2

            py-3

            rounded-xl

            border
            border-white/10

            bg-white/5
          "
          >
            <FaGithub />
            GitHub
          </a>

        </div>

      </div>
    </div>
  );
}

export default MobileProjectCard;