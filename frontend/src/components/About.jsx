import SectionTitle from "./SectionTitle";
import {
  FaUser,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";



function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-15">

      <div className="max-w-7xl mx-auto">

        

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-20 items-start">

          {/* LEFT SIDE */}
          <div className="max-w-xl">

            <SectionTitle
          title="About Me"
          subtitle="Introduction"
        />

            <p className="text-gray-400 leading-9 text-lg mt-">

              Computer Engineering graduate with hands-on experience in React.js,
              JavaScript, Tailwind CSS, and .NET development.

              <br />
              <br />

              Worked as a .NET Developer Intern at We3.Tech and Frontend Developer
              Intern at Unified Mentor where I developed responsive and scalable web
              applications.

              <br />
              <br />

              Passionate about building clean UI, scalable frontend systems, and
              interactive web experiences.

            </p>



          </div>

          {/* RIGHT SIDE */}



    <div className="flex lg:justify-end">

  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 w-full max-w-md">

    <div className="space-y-5">

      <div className="border-b border-white/10 pb-4">
      <div className="flex items-center gap-3 text-purple-400 mb-2">
        <FaUser />
        <span className="text-gray-300 font-medium">Name</span>
      </div>
      <p className="text-gray-400 break-words">
        Ankitkumar Suthar
      </p>
    </div>

    <div className="border-b border-white/10 pb-4">
      <div className="flex items-center gap-3 text-purple-400 mb-2">
        <FaMapMarkerAlt />
        <span className="text-gray-300 font-medium">Location</span>
      </div>
      <p className="text-gray-400 break-words">
        Jaipur, Rajasthan, India
      </p>
    </div>

    <div className="border-b border-white/10 pb-4">
      <div className="flex items-center gap-3 text-purple-400 mb-2">
        <FaEnvelope />
        <span className="text-gray-300 font-medium">Email</span>
      </div>
      <p className="text-gray-400 break-all">
        anitsuthar683@gmail.com
      </p>
    </div>

    <div className="border-b border-white/10 pb-4">
      <div className="flex items-center gap-3 text-purple-400 mb-2">
        <FaPhoneAlt />
        <span className="text-gray-300 font-medium">Phone</span>
      </div>
      <p className="text-gray-400">
        +91 90495 94511
      </p>
    </div>

    <div className="border-b border-white/10 pb-4">
      <div className="flex items-center gap-3 text-purple-400 mb-2">
        <FaLinkedinIn />
        <span className="text-gray-300 font-medium">LinkedIn</span>
      </div>
      <p className="text-gray-400 break-all">
        linkedin.com/in/ankitkumar-suthar
      </p>
    </div>

    <div>
      <div className="flex items-center gap-3 text-purple-400 mb-2">
        <FaGithub />
        <span className="text-gray-300 font-medium">GitHub</span>
      </div>
      <p className="text-gray-400 break-all">
        github.com/Ankit4511
      </p>
    </div>

    </div>

  </div>

</div>

    

  </div>

</div>




      {/* Divider */}
<div className="relative my-10">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>

    </section>
    
  )
}

export default About;