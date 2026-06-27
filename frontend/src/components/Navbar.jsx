import { useState, useEffect } from "react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
  if (isOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className="
        fixed
        top-0
        left-0
        w-full
        h-20
        bg-black/70
        backdrop-blur-md
        flex
        items-center
        justify-between
        px-6 md:px-10
        z-50
        border-b
        border-white/10
      "
      >
        {/* Logo */}

        <h1 className="text-4xl font-black text-white">
          <span className="bg-gradient-to-b from-purple-400 to-indigo-900 bg-clip-text text-transparent">
            A
          </span>
          nkit
          <span className="text-blue-500">.</span>
        </h1>

        {/* Desktop Menu */}

        <ul className="hidden md:flex gap-8 text-white font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-400 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-400 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-blue-400 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-blue-400 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Button */}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
          md:hidden
          text-white
          text-4xl
          hover:text-blue-400
          transition
        "
        >
          {isOpen ? <IoClose /> : <CgMenuLeftAlt />}
        </button>
      </nav>

      {/* Mobile Menu */}

      <div
        className={`
        fixed
        inset-0
        z-40
        bg-slate-950/70
        backdrop-blur-2xl
        transition-all
        duration-500

        ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
      `}
      >
        <ul
          className="
          h-full
          flex
          flex-col
          justify-center
          items-end
          pr-10
          gap-8
        "
        >
          <li>
            <a
              href="#home"
              onClick={closeMenu}
              className="
              text-4xl
              font-black
              tracking-wide
              text-white
              hover:text-blue-400
              transition-all
              duration-300
            "
            >
              HOME
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="
              text-4xl
              font-black
              tracking-wide
              text-white
              hover:text-blue-400
              transition-all
              duration-300
            "
            >
              ABOUT
            </a>
          </li>

          <li>
            <a
              href="#skills"
              onClick={closeMenu}
              className="
              text-4xl
              font-black
              tracking-wide
              text-white
              hover:text-blue-400
              transition-all
              duration-300
            "
            >
              SKILLS
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className="
              text-4xl
              font-black
              tracking-wide
              text-white
              hover:text-blue-400
              transition-all
              duration-300
            "
            >
              PROJECTS
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="
              text-4xl
              font-black
              tracking-wide
              text-white
              hover:text-blue-400
              transition-all
              duration-300
            "
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;