import {
  FaHome,
  FaCode,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

function MobileBottomNav() {
  const navItems = [
    {
      name: "Home",
      icon: <FaHome />,
      link: "#home",
    },
    {
      name: "Skills",
      icon: <FaCode />,
      link: "#skills",
    },
    {
      name: "Projects",
      icon: <FaProjectDiagram />,
      link: "#projects",
    },
    {
      name: "Experience",
      icon: <FaBriefcase />,
      link: "#experience",
    },
    {
      name: "Contact",
      icon: <FaEnvelope />,
      link: "#contact",
    },
  ];

  return (
    <div
      className="
      md:hidden

      fixed

      bottom-6
      left-5
      right-5

      z-50

      h-16

      rounded-3xl

      bg-slate-900/80
      backdrop-blur-xl

      border
      border-white/10

      shadow-[0_0_30px_rgba(130,92,246,0.15)]
      "
    >
      <div className="flex justify-around items-center h-full">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="
            flex
            flex-col
            items-center
            gap-1

            text-gray-400

            hover:text-purple-400

            transition
            "
          >
            <span className="text-lg">{item.icon}</span>

            <span className="text-[10px]">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MobileBottomNav;
