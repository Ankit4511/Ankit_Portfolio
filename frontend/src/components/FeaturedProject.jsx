import { FaGithub, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";

function FeaturedProject({ project }) {
  if (!project) {
    return (
      <div className="text-red-400 text-xl">
        Project not found
      </div>
    );
  }

  return (
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
      <div className="grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGE */}

        <div className="overflow-hidden rounded-2xl">
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              rounded-2xl
              object-contain
              shadow-2xl
              hover:scale-105
              transition-all
              duration-500
            "
          />
        </div>

        {/* RIGHT SIDE */}

        <div>

          

          {/* TITLE */}

          <h2 className="text-4xl font-bold mb-4">
            {project.title}
          </h2>

          {/* TECH STACK */}

          <div className="flex flex-wrap gap-3 mb-6">

            {project.techStack.slice(0,4).map((tech, index) => (
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
            ))}

          </div>

          {/* DESCRIPTION */}

          <p className="text-gray-400 leading-7 line-clamp-3 md:line-clamp-none mb-6">
            {project.overview}
          </p>

          {/* FEATURES */}

          <div className="space-y-3 mb-8">

            {project.features?.slice(0,3).map((feature, index) => (

              <div
                key={index}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                <span className="text-gray-300">
                  {feature}
                </span>
              </div>

            ))}

          </div>

          {/* BUTTONS */}

          <div className="flex gap-5 mt-6">

            <a
  href={project.live}
  target="_blank"
  rel="noreferrer"
  className="
    flex
    items-center
    justify-center
    gap-2
    py-3
    w-27
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
    flex
    items-center
    justify-center
    gap-3
    py-2
    w-25
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
    </div>
  );
}

export default FeaturedProject;