import { RiRobot2Fill } from "react-icons/ri";
import TypingAnimation from "./TypingAnimation";

function ThinkingIndicator() {
  return (
    <div className="flex justify-start mb-4">
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 max-w-fit shadow-lg">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
          <RiRobot2Fill className="text-white text-lg" />
        </div>

        <div>
          <p className="text-xs text-gray-400 mb-1">
            AI Assistant is thinking...
          </p>

          <TypingAnimation />
        </div>
      </div>
    </div>
  );
}

export default ThinkingIndicator;