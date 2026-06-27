import myImage from "../assets/my.jpg";
import { FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiDotnet } from "react-icons/si";
import { FaBriefcase, FaFolderOpen, FaAws } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";
import about from "../data/about";
import social from "../data/social";
import contact from "../data/contact";



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
      className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-10 pt-24 md:pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div
  className="
    absolute

    top-24
    right-0

    md:top-40
    md:right-40

    w-56
    h-56

    md:w-72
    md:h-72

    bg-blue-500/20
    rounded-full
    blur-3xl
    pointer-events-none
  "
></div>

      <div className="max-w-7xl w-full">
        {/* LEFT SIDE */}

        <div
          className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-4 sm:p-6 md:p-8
            backdrop-blur-xl
          "
        >
          {/* TOP SECTION */}

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* LEFT */}

            <div className="flex-1 order-2 md:order-1 text-center md:text-left">
              <p className="text-gray-400 text-sm md:text-xl">Hi, I'm</p>

              <h1
                className="
                text-4xl
sm:text-5xl
md:text-7xl
lg:text-8xl
                font-extrabold
                leading-tight
                bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text
                "
              >
                {about.firstName}
                <br />
                <span className="text-white">
                  {about.lastName}
                </span>
              </h1>

              <h2
                className="
                relative
                order-1
                md:order-2

                mb-4
                md:mb-0

                text-lg
                md:text-3xl

                font-semibold
                text-gray-400

                text-center
                md:text-left

                leading-relaxed

                max-w-[320px]
                md:max-w-none

                mx-auto
                md:mx-0     
                  "
              >
                <>
  {/* Frontend Developer |
  <br className="md:hidden" />

  {" "}Web Developer |
  <br className="md:hidden" />

  {" "}Ex Intern @ We3.Tech Works */}
  {about.roles.map((role,index) => (
    <span key={index}>
      {role}
      {index !== about.roles.length -1 && (
        <>
        {" | "}
        <br className="md:hidden" />
        </>
      )}
    </span>
  ))}
</>
              </h2>

              <div
  className="
    inline-flex
    items-center
    gap-5
    mt-1
    md:mt-2

    px-5
    py-2

    rounded-2xl

    bg-slate-900/60
    backdrop-blur-md

    border
    border-cyan-500/20

    shadow-[0_0_25px_rgba(34,211,238,0.15)]
  "
>
  {/* Green Dot */}

  <span className="relative flex h-3 w-3">

    <span
      className="
      absolute
      inline-flex
      h-full
      w-full
      rounded-full
      bg-green-400
      opacity-50
      animate-ping
      "
    />

    <span
      className="
      relative
      inline-flex
      rounded-full
      h-3
      w-3
      bg-green-400
      "
    />

  </span>

  <span
    className="
    text-gray-200
    text-sm md:text-base
    font-medium
    "
  >
{about.availability}
  </span>
</div>
            </div>

            {/* IMAGE */}

            <div className="shrink-0 relative order-1 md:order-2 lg:-translate-x-12">
              {/* Mobile Floating Icons */}
              <div className="md:hidden">
                {/* React */}
                <div className="absolute top-4 -left-4 rounded-full bg-slate-900/70 backdrop-blur-md w-7 h-7 flex items-center justify-center shadow-[0_0_8px_rgba(34,211,238,0.8)] float-1 z-20">
                  <FaReact className="text-cyan-400 text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>

                {/* .NET */}
                <div className="absolute top-4 -right-4 rounded-full bg-slate-900/70 backdrop-blur-md w-7 h-7 flex items-center justify-center shadow-[0_0_8px_rgba(168,85,247,0.8)] float-2 z-20">
                  <SiDotnet className="text-purple-400 text-xl drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                </div>

                {/* JavaScript */}
                <div className="absolute top-33 -left-4 rounded-full bg-slate-900/70 backdrop-blur-md w-7 h-7 flex items-center justify-center shadow-[0_0_8px_rgba(250,204,21,0.8)] float-3 z-20">
                  <SiJavascript className="text-yellow-400 text-2xl drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                </div>

                {/* Tailwind */}
                <div className="absolute top-29 -right-4 rounded-full bg-slate-900/70 backdrop-blur-md w-7 h-7 flex items-center justify-center shadow-[0_0_8px_rgba(34,211,238,0.8)] float-4 z-20">
                  <SiTailwindcss className="text-cyan-300 text-2xl drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                </div>
              </div>

              {/* Mobile Left Dots */}
              <div className="md:hidden absolute -left-12 top-1/2 -translate-y-1/2">
                <Dots />
              </div>

              {/* Mobile Right Dots */}
              <div className="md:hidden absolute -right-12 top-1/2 -translate-y-1/2">
                <Dots />
              </div>

              {/* desktop icons */}
              {/* Left Dots */}
              <div className="hidden md:block absolute -left-16 top-1/2 -translate-y-1/2">
                <Dots />
              </div>

              {/* React */}
              <div className="hidden md:flex absolute top-8 -left-4 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.4)] z-20 float-1">
                <FaReact className="text-cyan-400 text-4xl" />
              </div>

              {/* .NET */}
              <div className="hidden md:flex absolute top-8 -right-4 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.4)] z-20 float-2">
                <SiDotnet className="text-purple-400 text-3xl" />
              </div>

              {/* JavaScript */}
              <div className="hidden md:flex absolute bottom-6 -left-8 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md items-center justify-center shadow-[0_0_25px_rgba(250,204,21,0.4)] z-20 float-3">
                <SiJavascript className="text-yellow-400 text-3xl" />
              </div>

              {/* Tailwind */}
              <div className="hidden md:flex absolute bottom-3 -right-2 w-16 h-16 rounded-full bg-slate-900/70 backdrop-blur-md items-center justify-center shadow-[0_0_25px_rgba(34,211,238,0.4)] z-20 float-4">
                <SiTailwindcss className="text-cyan-300 text-3xl" />
              </div>

              <div
  className="
  relative
  p-[3px]
  rounded-full
  bg-gradient-to-r
  from-blue-500
  via-indigo-500
  to-purple-500
  "
>
  <div
    className="
    w-[170px]
    h-[170px]
    sm:w-[180px]
    sm:h-[180px]
    md:w-[350px]
    md:h-[350px]
    rounded-full
    overflow-hidden
    "
  >
    <img
      src={myImage}
      alt="Profile"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Online Indicator */}

  <div
    className="
    absolute

    bottom-2
    right-4

    md:bottom-4
    md:right-14

    w-6
    h-6

    md:w-8
    md:h-8

    rounded-full

    bg-green-400

    border-2
    md:border-4

    border-slate-900

    shadow-[0_0_15px_rgba(74,222,128,0.8)]

    z-50
    "
  />
</div>

              {/* Right Dots */}
              <div className="hidden md:block absolute -right-16 top-1/2 -translate-y-1/2">
                <Dots />
              </div>

              {/* Bottom Neon Glow */}
              <div className="absolute bottom-1 w-[320px] h-[10] rounded-full bg-blue-500/40 blur-[40px]"></div>

              <div className="absolute bottom-1 w-[55] h-[11.25] rounded-full bg-purple-500/50 blur-[40px]"></div>
            </div>
          </div>

          {/* DESCRIPTION */}

          <p
            className="
            text-gray-400
            mt-6
            text-sm
md:text-base

leading-7
            "
          >
            {about.shortBio}
          </p>

          {/* BUTTONS */}

          <div
            className="
            flex
            flex-col
sm:flex-row

w-full
sm:w-fit
            gap-4
            mt-6
            "
          >
            <a
              href="#projects"
              className="
              bg-gradient-to-r
              from-blue-600
              to-purple-600
              px-6
              py-3
              w-full
              sm:w-auto
              rounded-xl
              font-semibold
              text-center
              "
            >
              View Projects
            </a>

            <a
              href={about.resume}
              download="Ankit_Suthar_about.resume.pdf"
              className="
              px-6
              py-3
              rounded-xl
              text-center
              bg-gradient-to-r
              from-indigo-500
              to-purple-600
              "
            >
              ⬇️ Download Resume 
            </a>
          </div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-4
            mt-8
            "
          >
            {/* internship */}
            <div className="bg-white/5 rounded-xl p-4 md:p-5">
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-purple-400 text-xl" />
                <h3 className="text-3xl md:text-4xl font-bold">2+</h3>
              </div>

              <p className="text-gray-400 text-sm md:text-lg mt-1">Internships</p>
            </div>

            {/* Projects */}

            <div className="bg-white/5 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <FaFolderOpen className="text-blue-400 text-xl" />
                <h3 className="text-4xl font-bold">5+</h3>
              </div>

              <p className="text-gray-400 text-lg mt-1">Projects</p>
            </div>

            {/* Research Paper */}
            <div className="bg-white/5 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <MdOutlineScience className="text-cyan-400 text-xl" />
                <h3 className="text-4xl font-bold">1</h3>
              </div>

              <p className="text-gray-400 text-lg mt-1">Research Paper</p>
            </div>

            {/* AWS Certified */}
            <div className="bg-white/5 rounded-xl p-5">
              <div className="flex items-center gap-3">
                <FaAws className="text-orange-400 text-xl" />
                <h3 className="text-4xl font-bold">AWS</h3>
              </div>

              <p className="text-gray-400 text-lg mt-1">Certified</p>
            </div>

            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-3">
              <MdOutlineScience className="text-cyan-400 text-sm" />
              <span className="text-xs text-gray-300">Research Paper</span>
            </div> */}

            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-3">
              <FaAws className="text-orange-400 text-sm" />
              <span className="text-xs text-gray-300">AWS</span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
