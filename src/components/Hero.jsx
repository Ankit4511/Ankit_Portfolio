import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDotnet } from "react-icons/si";
import myImage from "../assets/my.jpg";
import { FaBriefcase, FaFolderOpen, FaAws } from "react-icons/fa";

import { MdOutlineScience } from "react-icons/md";

const Dots = () => (
  <div className="grid grid-cols-3 gap-3">
    {[...Array(9)].map((_, i) => (
      <div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60"
      />
    ))}
  </div>
);

function Hero() {
  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-40 right-40 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-400 text-xl">Hi, I'm</p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight tracking-tight">
            Ankitkumar{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Suthar
            </span>
          </h1>

          <h2 className="text-2xl mt-4 text-gray-300">
            Frontend Developer | React.js Developer
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl leading-8">
            Computer Engineering graduate with experience in React.js, Tailwind
            CSS, JavaScript and .NET development.
          </p>

          <div className="flex gap-5 mt-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 rounded-xl font-semibold hover:scale-105 transition duration-300 shadow-lg shadow-blue-500/30"
            >
              View Projects
            </a>

            <a
              href="/resume/ankit_cv.pdf"
              download="Ankit_Suthar_Resume.pdf"
              className="
    inline-flex
    items-center
    gap-2
    px-6
    py-3
    rounded-xl
    bg-gradient-to-r
    from-indigo-500
    to-purple-600
    text-white
    font-medium
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-lg
    hover:shadow-purple-500/30
  "
            >
              Download Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-8 mt-10">
            {/* Internships */}
            <div className="flex items-center gap-3 pr-8 border-r border-white/10">
              <FaBriefcase className="text-purple-400 text-xl" />

              <div>
                <h3 className="text-3xl font-bold">2+</h3>
                <p className="text-gray-400">Internships</p>
              </div>
            </div>

            {/* Projects */}
            <div className="flex items-center gap-1 pr-1 border-r border-white/10">
              <FaFolderOpen className="text-blue-400 text-xl" />

              <div>
                <h3 className="text-3xl font-bold">5+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
            </div>

            {/* Research Paper */}
            <div className="flex items-center gap-3 pr-8 border-r border-white/10">
              <MdOutlineScience className="text-cyan-400 text-xl" />

              <div>
                <h3 className="text-3xl font-bold">1</h3>
                <p className="text-gray-400">Research Paper</p>
              </div>
            </div>

            {/* AWS */}
            <div className="flex items-center gap-3">
              <FaAws className="text-orange-400 text-xl" />

              <div>
                <h3 className="text-3xl font-bold">AWS</h3>
                <p className="text-gray-400">Certified</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex items-center justify-center w-[500px] h-[500px] mx-auto">
          {/* Left Dots */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2">
            <Dots />
          </div>

          {/* Right Dots */}
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            <Dots />
          </div>

          {/* Bottom Neon Glow */}
          <div className="absolute bottom-1 w-[320px] h-[40px] rounded-full bg-blue-500/40 blur-[40px]"></div>

          <div className="absolute bottom-1 w-[220px] h-[45px] rounded-full bg-purple-500/50 blur-[40px]"></div>

          {/* Profile Circle */}
          <div
            className="p-[5px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
            style={{
              boxShadow:
                "0 0 30px rgba(59,130,246,.4), 0 0 60px rgba(168,85,247,.4)",
            }}
          >
            <div className="w-[350px] h-[350px] rounded-full overflow-hidden">
              <img
                src={myImage}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="absolute top-14 left-12 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.4)] z-20 float-1">
            <FaReact className="text-cyan-400 text-4xl" />
          </div>

          <div className="absolute top-14 right-12 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.4)] z-20 float-2">
            <SiDotnet className="text-purple-400 text-3xl" />
          </div>

          <div className="absolute bottom-16 left-8 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.4)] z-20 float-3">
            <SiJavascript className="text-yellow-400 text-3xl" />
          </div>

          <div className="absolute bottom-16 right-8 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md flex items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.4)] z-20 float-4">
            <SiTailwindcss className="text-cyan-300 text-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
