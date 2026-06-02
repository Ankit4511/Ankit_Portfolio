const experiences = [
  {
    duration: "Dec 2025 - Apr 2026",
    company: "We3.Tech",
    role: ".NET Developer Intern",
    location: "Mumbai, India",
    points: [
      "Developed and maintained web applications using C#, ASP.NET MVC and SQL Server.",
      "Implemented MVC architecture to ensure better separation of concerns.",
      "Worked on database queries and stored procedures.",
      "Integrated frontend components with backend APIs."
    ]
  },

  {
    duration: "Apr 2025 - May 2025",
    company: "Unified Mentor",
    role: "Frontend Developer Intern",
    location: "Remote",
    points: [
      "Built responsive and mobile-friendly UI components using React.js and Tailwind CSS.",
      "Developed reusable React components.",
      "Managed application state using React hooks.",
      "Collaborated with the team to improve UI performance."
    ]
  },

  {
    duration: "Apr 2025",
    company: "Prodigy InfoTech",
    role: "Web Developer Intern",
    location: "Remote",
    points: [
      "Created responsive websites using HTML, CSS and JavaScript.",
      "Ensured cross-browser compatibility.",
      "Resolved UI bugs and improved accessibility."
    ]
  }
];

function Experience() {
  return (
    <section className="px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold mb-12">
          Experience
        </h2>

        <div className="space-y-8">

          {experiences.map((exp, index) => (

            <div
              key={index}
              className="grid grid-cols-[180px_1fr] gap-8"
            >

              {/* LEFT TIMELINE */}
              <div className="relative">

                <div className="absolute left-2.5 top-0 bottom-0 w-[2px] bg-blue-500/30"></div>

                <div className="w-4 h-4 rounded-full bg-blue-500 relative z-10"></div>

                <div
  className="
    mt-0
    ml-5
    text-center
    text-sm
    text-gray-300
    border
    border-white/10
    rounded-xl
    p-3
    
    bg-white/5
    whitespace-nowrap
  "
>
  {exp.duration}
</div>

              </div>

              {/* RIGHT CARD */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-6
                  backdrop-blur-md
                  hover:border-blue-500/30
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >

                <div className="flex justify-between items-start">

                  <div>
                    <h3 className="text-2xl font-bold">
                      {exp.role}
                    </h3>

                    <p className="text-cyan-400 mt-1">
                      {exp.company}
                    </p>
                  </div>

                  <span className="text-gray-400 text-sm">
                    {exp.location}
                  </span>

                </div>

                <ul className="mt-5 space-y-2">

                  {exp.points.map((point, i) => (

                    <li
                      key={i}
                      className="text-gray-400 flex gap-3"
                    >
                      <span className="text-blue-400">
                        •
                      </span>

                      {point}
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