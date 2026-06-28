import { useState, useRef, useEffect } from "react";
import { FaRobot } from "react-icons/fa";
import ChatWindow from "./ChatWindow";

function AIButton() {
  const [open, setOpen] = useState(false);
  const isMobile = window.innerWidth < 768;

  // ── Desktop only: drag state ──────────────────
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const dragStartPos = useRef({ x: 0, y: 0 });
  const hasDraggedRef = useRef(false);

  const [pos, setPos] = useState(() => ({
    x: window.innerWidth - 88,
    y: window.innerHeight - 88,
  }));

  // ── Mouse Events (Desktop only) ───────────────
  const onMouseDown = (e) => {
    if (isMobile) return;
    setDragging(true);
    hasDraggedRef.current = false;
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    dragOffset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y };
    e.preventDefault();
  };

  const onMouseMove = (e) => {
    if (!dragging) return;
    const dx = Math.abs(e.clientX - dragStartPos.current.x);
    const dy = Math.abs(e.clientY - dragStartPos.current.y);
    if (dx > 5 || dy > 5) hasDraggedRef.current = true;
    setPos({
      x: Math.min(Math.max(e.clientX - dragOffset.current.x, 0), window.innerWidth - 60),
      y: Math.min(Math.max(e.clientY - dragOffset.current.y, 0), window.innerHeight - 60),
    });
  };

  const onMouseUp = () => {
    setDragging(false);
    if (!hasDraggedRef.current) setOpen((prev) => !prev);
    hasDraggedRef.current = false;
  };

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [dragging]);

  // ── Mobile: simple fixed button ───────────────
  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="
            fixed bottom-20 right-4
            z-50
            w-14 h-14
            rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600
            flex items-center justify-center
            hover:scale-110 transition
          "
          style={{
            boxShadow: "0 4px 20px rgba(99,102,241,0.4)",
          }}
        >
          <FaRobot className="text-2xl text-white" />
          <span
            className="absolute inset-0 rounded-full"
            style={{
              border: "2px solid rgba(139,92,246,0.5)",
              animation: "aiBtnPulse 2s ease-in-out infinite",
            }}
          />
        </button>

        {open && <ChatWindow closeChat={() => setOpen(false)} />}

        <style>{`
          @keyframes aiBtnPulse {
            0%, 100% { transform: scale(1);    opacity: 1;   }
            50%       { transform: scale(1.18); opacity: 0.3; }
          }
        `}</style>
      </>
    );
  }

  // ── Desktop: draggable button ─────────────────
  return (
    <>
      <button
        onMouseDown={onMouseDown}
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          zIndex: 9999,
          cursor: dragging ? "grabbing" : "grab",
          transform: dragging ? "scale(1.12)" : "scale(1)",
          transition: dragging ? "none" : "transform 0.2s, box-shadow 0.2s",
          boxShadow: dragging
            ? "0 8px 32px rgba(99,102,241,0.65)"
            : "0 4px 20px rgba(99,102,241,0.4)",
        }}
        className="
          w-16 h-16
          rounded-full
          bg-gradient-to-r from-blue-600 to-purple-600
          flex items-center justify-center
        "
      >
        <FaRobot className="text-2xl text-white pointer-events-none" />
        <span
          className="absolute inset-0 rounded-full"
          style={{
            border: "2px solid rgba(139,92,246,0.5)",
            animation: "aiBtnPulse 2s ease-in-out infinite",
          }}
        />
      </button>

      {open && <ChatWindow closeChat={() => setOpen(false)} />}

      <style>{`
        @keyframes aiBtnPulse {
          0%, 100% { transform: scale(1);    opacity: 1;   }
          50%       { transform: scale(1.18); opacity: 0.3; }
        }
      `}</style>
    </>
  );
}

export default AIButton;