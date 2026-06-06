import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import {useState} from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

function ContactSection() {

  const [formData , setFormData] = useState({
    from_name:"",
    from_email:"",
    message: "",
  });

  const handleChange= (e) => {
    setFormData({
      ...formData,[e.target.name]:e.target.value,
    })
  }

  const sendEmail = async (e) => {
    e.preventDefault();
    // console.log(formData)

    try{
      const result = await emailjs.send(
        "service_atwszqa",
        "template_rqc8ssx",
        formData,
        "5RP0rJpShB9Wmiyta"
      )
      console.log(result);
toast.success("Message sent successfully!", {
  position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Bounce,
});
      setFormData({
        from_name:"",
        from_email:"",
        message:"",
      });
    
  } catch(error) {
    console.log(error);

toast.error("Failed to send message!", {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "dark",
  transition: Bounce,
});  }
  
    };
    
  return (
    <section id="contact" className="relative ">

<div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Purple Glow */}

<div
  className="
    absolute
    top-1/2
    right-0
    -translate-y-1/2

    w-[500px]
    h-[500px]

    bg-purple-600/30

    rounded-full

    blur-[180px]

    pointer-events-none
  "
/>

        {/* Header */}

        <div>

          {/* Status Badge */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-green-500/30
              bg-green-500/10
              text-green-400
              text-sm
              font-medium
              mb-8
            "
          >
            <span
              className="
                w-2
                h-2
                rounded-full
                bg-green-400
              "
            />

            Available for Work
          </div>

          {/* Heading */}

          <h2
            className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
            "
          >
            <span className="text-white">
              Let's
            </span>{" "}

            <span
              className="
                bg-gradient-to-r
                from-indigo-400
                via-purple-400
                to-pink-400
                bg-clip-text
                text-transparent
              "
            >
              Connect
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              text-gray-400
              mt-6
              text-lg
              leading-relaxed
              max-w-xl
            "
          >
            I'm currently open to new opportunities.
            Let's build something great together!
          </p>

        </div>

        {/* Main Contact Area */}

        <div
          className="
            flex
            flex-col
            lg:flex-row
            gap-16
            mt-16
            items-start
          "
        >

          {/* Left Side */}

          <div className="lg:w-2/5">

            {/* Email */}

            <a
  href="mailto:ankitsuthar683@gmail.com"
  className="
  flex
  items-center
  gap-5
  mb-4
  p-4
  rounded-2xl
  bg-white/5
  border
  border-white/10
  hover:border-purple-500/40
  transition
  lg:p-0
  lg:bg-transparent
  lg:border-none
  "
>

  <div
    className="
      w-14
      h-14
      rounded-2xl
      flex
      items-center
      justify-center
      bg-purple-500/10
      border
      border-purple-500/20
      shrink-0
    "
  >
    <MdEmail className="text-purple-400 text-2xl" />
  </div>

  <p className="text-gray-300 text-xl">
    ankitsuthar683@gmail.com
  </p>

</a>

            {/* Phone */}

            <a
  href="tel:+919049594511"
  className="
  flex
  items-center
  gap-5
  mb-4
  p-4
  rounded-2xl
  bg-white/5
  border
  border-white/10
  hover:border-purple-500/40
  transition
  lg:p-0
  lg:bg-transparent
  lg:border-none">

  <div
    className="
      w-14
      h-14
      rounded-2xl
      flex
      items-center
      justify-center
      bg-purple-500/10
      border
      border-purple-500/20
      shrink-0
    "
  >
    <FaPhoneAlt className="text-purple-400 text-2xl" />
  </div>

  <p className="text-gray-300 text-xl ">
    +91 90495 94511
  </p>

</a>

            {/* Location */}

            <a
  href="https://maps.google.com/?q=Jaipur,Rajasthan,India"
  className="
  flex
  items-center
  gap-5
  mb-4
  p-4
  rounded-2xl
  bg-white/5
  border
  border-white/10
  hover:border-purple-500/40
  transition
  lg:p-0
  lg:bg-transparent
  lg:border-none">

  <div
    className="
      w-14
      h-14
      rounded-2xl
      flex
      items-center
      justify-center
      bg-purple-500/10
      border
      border-purple-500/20
      shrink-0
    "
  >
    <FaLocationDot className="text-purple-400 text-2xl" />
  </div>

  <p className="text-gray-300 text-xl">
    Jaipur, Rajasthan, India
  </p>

</a>

            {/* Social Links */}

            <div className="flex gap-5 mt-12">

              <a
                href="#"
                className="
                  w-16
                  h-16
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  border
                  border-white/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-500/50
                  hover:bg-purple-500/10
                  hover:shadow-lg
                  hover:shadow-purple-500/20
                "
              >
                <FaLinkedinIn className="text-3xl text-white" />
              </a>

              <a
                href="#"
                className="
                  w-16
                  h-16
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-white/10
                  border
                  border-white/10
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-purple-500/50
                  hover:bg-purple-500/10
                  hover:shadow-lg
                  hover:shadow-purple-500/20
                "
              >
                <FaGithub className="text-3xl text-white" />
              </a>

            </div>

            {/* Footer Text */}

            <div className="mt-12">

              <p
                className="
                  text-gray-400
                  text-base
                  leading-relaxed
                  max-w-sm
                "
              >
                Always excited to work on{" "}
                <span className="text-purple-400">
                  meaningful
                </span>{" "}
                and{" "}
                <span className="text-purple-400">
                  impactful
                </span>{" "}
                projects.
              </p>

            </div>

          </div>

          {/* Right Side */}

          

          <div
            className="
            hidden
            lg:block
              lg:w-[60%]
              lg:-mt-20
              border
              border-purple-400/30
              rounded-3xl
              p-8
              bg-white/5
              backdrop-blur-sm
              shadow-2xl
              shadow-purple-500/10
            "
          >

            <div className="flex items-center gap-4 mb-3">
            <div className="w-16 h-16 riunded-full bg-purple-500/10 flex items-center justify-center">
            <FiSend className="text-purple-400 text-3xl" />
            </div>

            <h3 className="text-4xl font-bold text-white">
              Send Me a Message
            </h3>
          </div>

            <form 
            onSubmit={sendEmail}
            className="flex flex-col gap-5">

              {/* Inputs Row */}

              <div className="flex flex-col md:flex-row gap-4">

                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="
                    flex-1
                    bg-transparent
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    outline-none
                    hover:border-purple-500/40
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-500/20
                    transition-all
                    duration-300
                  "
                />

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="
                    flex-1
                    bg-transparent
                    border
                    border-white/10
                    rounded-xl
                    px-5
                    py-4
                    text-white
                    outline-none
                    hover:border-purple-500/40
                    focus:border-purple-500
                    focus:ring-2
                    focus:ring-purple-500/20
                    transition-all
                    duration-300
                  "
                />

              </div>

              {/* Message */}

              <textarea
                rows="6"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="
                  bg-transparent
                  border
                  border-white/10
                  rounded-xl
                  px-5
                  py-4
                  text-white
                  outline-none
                  resize-none
                  hover:border-purple-500/40
                  focus:border-purple-500
                  focus:ring-2
                  focus:ring-purple-500/20
                  transition-all
                  duration-300
                "
              />

              {/* Button */}

              <button
              type="submit"
                className="
                  w-full
                  py-4
                  rounded-xl
                  text-white
                  font-semibold
                  text-lg
                  bg-gradient-to-r
                  from-indigo-500
                  via-purple-500
                  to-fuchsia-500
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:shadow-xl
                  hover:shadow-purple-500/30
                "
              >
                <span className="flex items-center justify-center gap-3">
                Send Message
<FiSend />
                </span>
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}

export default ContactSection;