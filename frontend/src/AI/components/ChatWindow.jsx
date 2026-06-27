import { useState, useEffect, useRef } from "react";
import useChat from "../../hooks/useChat";
import aiSuggestions from "../../data/aiSuggestions";
import { RiRobot2Fill, RiDeleteBinLine } from "react-icons/ri";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ThinkingIndicator from "./ThinkingIndicator";
import { IoClose } from "react-icons/io5";

function ChatWindow({ closeChat }) {
  const { clearChat, messages, loading, sendMessage } = useChat();

  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function handleSend(message) {
    if (loading) return;
    if (!message.trim()) return;

    await sendMessage(message);
    setShowSuggestions(false);
  }

  function handleClearChat() {
    const confirmClear = window.confirm("Clear all messages?");

    if (confirmClear) {
      clearChat();
      setShowSuggestions(true);
    }
  }

  return (
    <div
  className="
    fixed
    z-50

    bottom-3
    left-2
    right-2

    h-[85vh]

    md:left-auto
    md:right-6
    md:bottom-24
    md:w-[430px]
    md:h-[80vh]

    flex
    flex-col
    overflow-hidden

    rounded-3xl

    border
    border-white/10

    bg-[#141824]

    shadow-[0_25px_80px_rgba(0,0,0,0.55)]
  "
>
      {/* Header */}

      <div
  className="
    flex
    items-center
    justify-between

    px-5
    py-4

    border-b
    border-white/10

    bg-[#191d2b]
  "

      >
        {/* Left */}

        <div className="flex items-center gap-3">
          <div
            className="
        w-11
        h-11

        rounded-full

        bg-gradient-to-r
        from-blue-500
        to-purple-600

        flex
        items-center
        justify-center

        shadow-lg
      "
          >
            <RiRobot2Fill className="text-white text-xl" />
          </div>

          <div>
            <h2 className="font-semibold text-white">Portfolio AI</h2>

            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>

              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearChat}
            disabled={messages.length === 0}
            title="Clear Chat"
            className="
        p-2

        rounded-lg

        hover:bg-white/10

        transition
      "
          >
            <RiDeleteBinLine className="text-lg text-red-400" />
          </button>

          <button
            onClick={closeChat}
            title="Close"
            className="
        p-2

        rounded-lg

        hover:bg-white/10

        transition
      "
          >
            <IoClose className="text-xl" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div
  className="
    flex-1
    overflow-y-auto

    px-4
    md:px-5

    py-4
    pb-28

    bg-[#141824]

    custom-scrollbar
  "
>
        {messages.length === 0 && showSuggestions && (
          <div className="flex flex-col items-center text-center">
            {/* AI Avatar */}
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mb-4">
              <RiRobot2Fill className="text-3xl text-white" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold mb-2">AI Portfolio Assistant</h2>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-6 max-w-xs mb-6">
              Ask me anything about
              <span className="text-white font-medium">
                {" "}
                Ankit Kumar Suthar
              </span>
              <br />
              projects, skills, experience, education and career.
            </p>

            {/* Suggestions */}

            <h3 className="w-full text-left text-lg font-semibold mb-4">
              ⚡ Quick Actions
            </h3>

            <div className="w-full">
              <div className="grid grid-cols-2 gap-2 w-full">
                {aiSuggestions.map((item) => (
                  <button
                    key={item.title}
                    disabled={loading}
                    onClick={() => handleSend(item.prompt)}
                    className="
flex
flex-col
items-center
justify-center

gap-2

h-24

rounded-xl

bg-[#1b2030]

border

border-white/10

hover:bg-[#23293c]

hover:border-blue-500/40

transition-all

duration-300

active:scale-95
"
                  >
                    <span className="text-3xl">{item.icon}</span>

                    <span className="text-sm font-medium text-white">
                      {item.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        <div>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>

        {loading && <ThinkingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      <ChatInput loading={loading} onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;
