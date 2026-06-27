import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      // Modern browsers
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback
        const textArea = document.createElement("textarea");

        textArea.value = text;

        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";

        document.body.appendChild(textArea);

        textArea.focus();
        textArea.select();

        document.execCommand("copy");

        textArea.remove();
      }

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);

    } catch (err) {
      console.error("Copy Failed:", err);
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="
        flex
        items-center
        gap-1
        mt-3

        text-xs

        text-gray-400

        hover:text-blue-400

        transition
      "
    >
      {copied ? (
        <>
          <FiCheck />
          Copied
        </>
      ) : (
        <>
          <FiCopy />
          Copy
        </>
      )}
    </button>
  );
}

export default CopyButton;