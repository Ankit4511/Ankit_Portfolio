import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiMysql
} from "react-icons/si";

const skills = [

  {
    title: "HTML5",
    icon: FaHtml5,
    color: "text-orange-500"
  },

  {
    title: "CSS3",
    icon: FaCss3Alt,
    color: "text-blue-500"
  },

  {
    title: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400"
  },

  {
    title: "React.js",
    icon: FaReact,
    color: "text-cyan-400"
  },

  {
    title: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400"
  },

  {
    title: ".NET",
    icon: SiDotnet,
    color: "text-purple-500"
  },

  {
    title: "SQL",
    icon: SiMysql,
    color: "text-blue-400"
  },

  {
    title: "Git",
    icon: FaGitAlt,
    color: "text-orange-400"
  },

  {
    title: "GitHub",
    icon: FaGithub,
    color: "text-white"
  }

];

export default skills;