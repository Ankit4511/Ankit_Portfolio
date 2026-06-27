import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import ChatWindow from "./ChatWindow";

function AIButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="
          fixed
          bottom-4
right-4

md:bottom-6
md:right-6
          z-50

          w-14
h-14

md:w-16
md:h-16

          rounded-full

          bg-gradient-to-r
          from-blue-600
          to-purple-600

          shadow-lg

          flex
          items-center
          justify-center

          hover:scale-110
          transition
        "
      >
        <FaRobot className="text-2xl text-white" />
      </button>

      {open && <ChatWindow closeChat={() => setOpen(false)} />}
    </>
  );
}

export default AIButton;
