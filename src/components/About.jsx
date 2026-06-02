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

        <SectionTitle
          title="About Me"
          subtitle="Introduction"
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="max-w-2xl">

            <p className="text-gray-400 leading-8 text-base md:text-lg">

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
<div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 lg:-mt-25">

  <div className="space-y-6">

    <div className="flex items-center border-b border-white/10 pb-4">
      <span className="text-purple-400 text-xl mr-4"><FaUser className="text-purple-400 text-lg mr-4" />
</span>

      <div className="w-32 text-gray-300 font-medium">
        Name:
      </div>

      <div className="text-gray-400">
        Ankitkumar Suthar
      </div>
    </div>

    <div className="flex items-center border-b border-white/10 pb-4">
      <span className="text-purple-400 text-xl mr-4"><FaMapMarkerAlt className="text-purple-400 text-lg mr-4" />
</span>

      <div className="w-32 text-gray-300 font-medium">
        Location:
      </div>

      <div className="text-gray-400">
        Jaipur, Rajasthan, India
      </div>
    </div>

    <div className="flex items-center border-b border-white/10 pb-4">
      <span className="text-purple-400 text-xl mr-4"><FaEnvelope className="text-purple-400 text-lg mr-4" />
</span>

      <div className="w-32 text-gray-300 font-medium">
        Email:
      </div>

      <div className="text-gray-400">
        anitsuthar683@gmail.com
      </div>
    </div>

    <div className="flex items-center border-b border-white/10 pb-4">
      <span className="text-purple-400 text-xl mr-4"><FaPhoneAlt className="text-purple-400 text-lg mr-4" />
</span>

      <div className="w-32 text-gray-300 font-medium">
        Phone:
      </div>

      <div className="text-gray-400">
        +91 90495 94511 
      </div>
    </div>

    <div className="flex items-center border-b border-white/10 pb-4">
      <span className="text-purple-400 text-xl mr-4"><FaLinkedinIn className="text-purple-400 text-lg mr-4" />
</span>

      <div className="w-32 text-gray-300 font-medium">
        LinkedIn:
      </div>

      <div className="text-gray-400">
https://www.linkedin.com/in/ankitkumar-suthar/      </div>
    </div>

    <div className="flex items-center">
      <span className="text-purple-400 text-xl mr-4"><FaGithub className="text-purple-400 text-lg mr-4" /></span>

      <div className="w-32 text-gray-300 font-medium">
        GitHub:
      </div>

      <div className="text-gray-400">
        https://github.com/Ankit4511
      </div>
    </div>

  </div>

</div>

        </div>

      </div>

      {/* Divider */}
<div className="relative my-20">
  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
</div>

    </section>
    
  )
}

export default About;