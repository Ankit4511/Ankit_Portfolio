import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiDotnet,
  SiMysql,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";

const skills = {

  frontend: [
    {
      title: "HTML5",
      icon: FaHtml5,
      color: "text-orange-500",
    },

    {
      title: "CSS3",
      icon: FaCss3Alt,
      color: "text-blue-500",
    },

    {
      title: "JavaScript",
      icon: SiJavascript,
      color: "text-yellow-400",
    },

    {
      title: "React.js",
      icon: FaReact,
      color: "text-cyan-400",
    },

    {
      title: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "text-sky-400",
    },

    {
      title: "Bootstrap",
      icon: SiBootstrap,
      color: "text-purple-500",
    },
  ],

  backend: [
  {
    title: ".NET MVC",
    icon: SiDotnet,
    color: "text-purple-500",
  },

  {
    title: "C#",
    icon: "⬢",
    color: "",
  },

  {
    title: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
  },

  {
    title: "Express.js",
    icon: SiExpress,
    color: "text-gray-300",
  },
],

  database: [
    {
      title: "SQL Server",
      icon: SiMysql,
      color: "text-blue-400",
    },

    {
      title: "SSMS",
      icon: "🗄️",
      color: "",
    },
  ],

  tools: [
    {
      title: "Git",
      icon: FaGitAlt,
      color: "text-orange-400",
    },

    {
      title: "GitHub",
      icon: FaGithub,
      color: "text-white",
    },
  ],
};

export default skills;