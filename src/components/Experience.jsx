import {
  FaBriefcase,
  FaCode,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { MdWeb } from "react-icons/md";

const experiences = [
  {
    duration: "Dec 2025 - Apr 2026",
    company: "We3.Tech",
    role: ".NET Developer Intern",
    location: "Mumbai, India",
    icon: <FaBriefcase className="text-purple-400 text-xl" />,
    points: [
      "Developed and maintained web applications using C#, ASP.NET MVC and SQL Server.",
      "Implemented MVC architecture to ensure better separation of concerns.",
      "Worked on database queries and stored procedures.",
      "Integrated frontend components with backend APIs.",
    ],
  },

  {
    duration: "Apr 2025 - May 2025",
    company: "Unified Mentor",
    role: "Frontend Developer Intern",
    location: "Remote",
    icon: <FaCode className="text-blue-400 text-xl" />,
    points: [
      "Built responsive and mobile-friendly UI components using React.js and Tailwind CSS.",
      "Developed reusable React components.",
      "Managed application state using React hooks.",
      "Collaborated with the team to improve UI performance.",
    ],
  },

  {
    duration: "Apr 2025",
    company: "Prodigy InfoTech",
    role: "Web Developer Intern",
    location: "Remote",
    icon: <MdWeb className="text-cyan-400 text-xl" />,
    points: [
      "Created responsive websites using HTML, CSS and JavaScript.",
      "Ensured cross-browser compatibility.",
      "Resolved UI bugs and improved accessibility.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="px-5 md:px-10 py-16"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-4xl md:text-6xl font-bold mb-14">
          Experience
        </h2>

        <div className="space-y-10">

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="flex gap-5 md:gap-10"
            >

              {/* Timeline */}

              <div className="relative flex flex-col items-center shrink-0">

                {index !== experiences.length - 1 && (
                  <div
                    className="
                    absolute
                    top-16
                    w-[2px]
                    h-[calc(100%+40px)]
                    bg-gradient-to-b
                    from-purple-500
                    via-blue-500
                    to-cyan-500
                  "
                  />
                )}

                <div
                  className="
                  w-14
                  h-14
                  md:w-16
                  md:h-16
                  rounded-full
                  border
                  border-purple-500/40
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                  shadow-[0_0_25px_rgba(168,85,247,0.6)]
                  z-10
                "
                >
                  {exp.icon}
                </div>

               

              </div>

              {/* Card */}

              <div
              className="
                relative
                flex-1
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-5
                md:p-7
                backdrop-blur-xl
                hover:border-purple-500/30
                transition-all
                duration-300
              "
            >

                <h3
                  className="
                  text-2xl
                  md:text-4xl
                  font-bold
                "
                >
                  {exp.role}
                </h3>

                {/* Duration Desktop */}
                <div
                  className="
                    hidden
                    min-[840px]:block

                    absolute
                    right-6
                    top-7

                    px-3
                    py-1
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-xs
                    text-gray-300
                  "
                >
                  {exp.duration}
                </div>

                <p
                  className="
                    text-cyan-400
                    text-lg
                    mt-2
                  "
                >
                  {exp.company}
                </p>

                {/* Duration Mobile */}
                <div
                  className="
                    inline-block
                    mt-3

                    min-[840px]:hidden

                    px-3
                    py-1
                    rounded-full
                    bg-white/5
                    border
                    border-white/10
                    text-xs
                    text-gray-300
                  "
                >
                  {exp.duration}
                </div>

                <div
                  className="
                  flex
                  items-center
                  gap-2
                  text-gray-400
                  mt-2
                  mb-6
                "
                >
                  <FaMapMarkerAlt className="text-xs" />

                  <span>{exp.location}</span>
                </div>

                <ul className="space-y-4">

                  {exp.points.map((point, i) => (

                    <li
                      key={i}
                      className="
                      flex
                      gap-4
                      text-gray-300
                    "
                    >
                      <div
                        className="
                        mt-2
                        w-2.5
                        h-2.5
                        rounded-full
                        bg-purple-500
                        shadow-[0_0_10px_rgba(168,85,247,0.8)]
                        shrink-0
                      "
                      />

                      <span>
                        {point}
                      </span>

                    </li>

                  ))}

                </ul>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Divider */}

      <div className="relative my-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
      </div>

    </section>
  );
}

export default Experience;