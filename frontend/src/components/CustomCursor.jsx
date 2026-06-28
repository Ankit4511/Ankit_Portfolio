import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const glowPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const isTouch = useRef(false);

  useEffect(() => {
    // Touch device check
    const checkTouch = () => { isTouch.current = true; };
    window.addEventListener("touchstart", checkTouch, { once: true });

    const onMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    // Mobile — finger position track karo
    const onTouchMove = (e) => {
      const t = e.touches[0];
      pos.current = { x: t.clientX, y: t.clientY };
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const animate = () => {
      // Dot — exact position
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x - 6}px, ${pos.current.y - 6}px)`;
      }

      // Glow — smooth lag
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.1;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.1;

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${glowPos.current.x - 22}px, ${glowPos.current.y - 22}px)`;
      }

      raf.current = requestAnimationFrame(animate);
    };

    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Sharp orange dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "#f97316",
          pointerEvents: "none",
          zIndex: 999999,
          willChange: "transform",
        }}
      />

      {/* Glowing ball — lagging */}
      <div
        ref={glowRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 44,
          height: 44,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.30) 0%, rgba(249,115,22,0) 70%)",
          border: "1.5px solid rgba(249,115,22,0.55)",
          pointerEvents: "none",
          zIndex: 999998,
          willChange: "transform",
        }}
      />
    </>
  );
}