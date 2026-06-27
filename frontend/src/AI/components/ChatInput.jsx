import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";

function ChatInput({ loading, onSend }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  async function handleSend() {
    if (loading) return;
    if (!input.trim()) return;

    await onSend(input);

    setInput("");

    if (inputRef.current) {
      inputRef.current.style.height = "42px";
      inputRef.current.style.overflowY = "hidden";
    }
  }

  function handleChange(e) {
    const value = e.target.value;

    setInput(value);

    e.target.style.height = "42px";

    if (value === "") {
      e.target.style.overflowY = "hidden";
      return;
    }

    const newHeight = Math.min(e.target.scrollHeight, 120);

    e.target.style.height = `${newHeight}px`;

    e.target.style.overflowY =
      e.target.scrollHeight > 120 ? "auto" : "hidden";
  }

  return (
    <div
className="flex items-end gap-2 p-3 md:p-4 shrink-0"
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <textarea
        rows={1}
        ref={inputRef}
        disabled={loading}
        value={input}
        onChange={handleChange}
        placeholder={
          loading
            ? "AI is thinking..."
            : "Ask about my portfolio..."
        }
        className="border-0 bg-transparent text-white shadow-none resize-none outline-none custom-scrollbar"
        style={{
          flex: 1,
          minWidth: 0,
          height: "44px",
          minHeight: "44px",
          maxHeight: "120px",
          padding: "12px 14px",
          lineHeight: "1.5",
          overflowY: "hidden",
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
      />

      <button
        onClick={handleSend}
        disabled={loading}
        style={{
          width: "48px",
          height: "48px",
          flexShrink: 0,
        }}
        className={`flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white transition ${
          loading ? "cursor-not-allowed opacity-75" : ""
        }`}
      >
        {loading ? "..." : <IoSend />}
      </button>
    </div>
  );
}

export default ChatInput;