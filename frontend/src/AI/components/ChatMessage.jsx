import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  RiRobot2Fill,
  RiUser3Fill,
} from "react-icons/ri";

import markdownComponents from "../markdown/markdownComponents";
import CopyButton from "./CopyButton";

function formatTime(timestamp) {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function ChatMessage({ message }) {
  const isUser = message.sender === "user";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`flex mb-5 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`flex gap-3 max-w-[92%] md:max-w-[88%] ${
          isUser ? "flex-row-reverse" : ""
        }`}
      >
        {/* Avatar */}

        <div
          className={`
            w-9
            h-9
            rounded-full
            flex
            items-center
            justify-center
            flex-shrink-0

            ${
              isUser
                ? "bg-blue-600"
                : "bg-gradient-to-r from-blue-500 to-purple-600"
            }
          `}
        >
          {isUser ? (
            <RiUser3Fill className="text-white text-lg" />
          ) : (
            <RiRobot2Fill className="text-white text-lg" />
          )}
        </div>

        {/* Content */}

        <div className="flex flex-col">
          {/* Sender */}

          <span
            className={`
              text-xs
              text-gray-400
              mb-1

              ${isUser ? "text-right mr-1" : "ml-1"}
            `}
          >
            {isUser ? "You" : "Portfolio AI"}
          </span>

          {/* Bubble */}

          <div
            className={`
              rounded-2xl
              px-4
              py-3

              transition-all
              duration-300

              ${
                isUser
                  ? "bg-blue-600 text-white rounded-tr-md hover:bg-blue-500"
                  : "bg-white/10 border border-white/10 text-white rounded-tl-md hover:border-blue-500/30 hover:bg-white/15"
              }
            `}
          >
            <ReactMarkdown components={markdownComponents}>
              {message.text}
            </ReactMarkdown>

            {/* Footer */}

            <div
              className={`mt-4 flex items-center ${
                isUser
                  ? "justify-end"
                  : "justify-between"
              }`}
            >
              {!isUser && (
                <CopyButton text={message.text} />
              )}

              <span className="text-[11px] text-gray-400">
                {formatTime(message.timestamp)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ChatMessage;