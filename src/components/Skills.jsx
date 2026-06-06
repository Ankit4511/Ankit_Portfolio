import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
} from "react-icons/si";

import { FaDatabase } from "react-icons/fa";

function Skills() {
  const skillGroups = [
    {
      title: "Frontend",
      border: "border-blue-500/20",
      titleColor: "text-blue-300",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
      ],
    },

    {
      title: "Backend",
      border: "border-purple-500/20",
      titleColor: "text-purple-400",
      skills: [
        { name: ".NET MVC", icon: <SiDotnet className="text-purple-400" /> },
        { name: "C#", icon: "⬢" },
      ],
    },

    {
      title: "Database",
      border: "border-green-500/20",
      titleColor: "text-green-400",
      skills: [
        {
          name: "SQL Server",
          icon: <FaDatabase className="text-red-400" />,
        },
        {
          name: "SSMS",
          icon: "🗄️",
        },
      ],
    },

    {
      title: "Tools",
      border: "border-yellow-500/20",
      titleColor: "text-yellow-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGithub /> },
      ],
    },
  ];

  const allSkills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-300" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: ".NET", icon: <SiDotnet className="text-purple-400" /> },
  { name: "C#", icon: <span>⬢</span> },
  { name: "SQL", icon: <FaDatabase className="text-red-400" /> },
  { name: "SSMS", icon: "🗄️" },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "GitHub", icon: <FaGithub /> },
];

  return (
    <section id="skills" className="px-6 md:px-10 py-0">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        {/* mobile view */}
        <div className="md:hidden">

  <div className="bg-white/5 border border-white/10 rounded-2xl p-4">

    <div className="flex justify-between items-center mb-4">
      <h3 className="font-semibold text-white">
        Tech Stack
      </h3>

      <span className="text-purple-400 text-sm">
        Swipe →
      </span>
    </div>

    <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">

      {allSkills.map((skill, i) => (
        <div
          key={i}
          className="
            flex-shrink-0
            w-20
            bg-white/5
            border border-white/10
            rounded-xl
            p-3
            flex
            flex-col
            items-center
          "
        >
          <div className="text-3xl mb-2">
            {skill.icon}
          </div>

          <p className="text-[10px] text-center text-gray-400">
            {skill.name}
          </p>
        </div>
      ))}

    </div>

  </div>

</div>

{/* desktopview */}

        

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {skillGroups.map((group, index) => (
            <div
              key={index}
              className={`bg-white/5 border ${group.border} rounded-2xl overflow-hidden backdrop-blur-md hover:-translate-y-2 transition duration-300`}
            >
              <div className="p-5">
                <h3 className={`text-2xl font-semibold ${group.titleColor}`}>
                  {group.title}
                </h3>
              </div>

              <div className="border-t border-white/10 p-5 flex flex-wrap gap-6">
                {group.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="text-4xl mb-2">
                      {skill.icon}
                    </div>

                    <p className="text-xs text-gray-400">
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>

      {/* Divider */}
<div className="relative my-10">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>

    </section>
  );
}

export default Skills;