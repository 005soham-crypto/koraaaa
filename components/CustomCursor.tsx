import { useEffect, useRef, useState } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(min-width: 1024px) and (pointer: fine)").matches
      : false
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (pointer: fine)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

function CursorInner() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);
  const [label, setLabel] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isText, setIsText] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };
    const handleOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const interactive = el.closest("button, a, [data-cursor]");
      const dark = el.closest("[data-cursor-dark]");
      const textEl = el.closest("p, h1, h2, h3, h4, blockquote");
      if (interactive) {
        setLabel((interactive as HTMLElement).dataset.cursor || "");
        setIsHover(true);
      } else {
        setLabel("");
        setIsHover(false);
      }
      setIsDark(!!dark);
      setIsText(!!textEl && !interactive);
    };
    const animate = () => {
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (dot) dot.style.transform = `translate(${pos.current.x}px,${pos.current.y}px) translate(-50%,-50%)`;
      if (ring) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ring.style.transform = `translate(${ringPos.current.x}px,${ringPos.current.y}px) translate(-50%,-50%)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", handleOver, { passive: true });
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const dotColor = isDark ? "#F5EFE4" : "#2B1C0D";
  const ringColor = isDark ? "#F5EFE4" : isHover ? "#C06B45" : "#2B1C0D";

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-[width,height,opacity] duration-150"
        style={{
          width: isHover ? 0 : isText ? 3 : 6,
          height: isHover ? 0 : isText ? 3 : 6,
          borderRadius: "50%",
          background: dotColor,
          opacity: isHover ? 0 : 1,
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center transition-[width,height,border-color,background] duration-200"
        style={{
          width: isHover ? (label ? 72 : 40) : isText ? 28 : 32,
          height: isHover ? (label ? 72 : 40) : isText ? 28 : 32,
          borderRadius: label && isHover ? "0%" : "50%",
          border: `1px solid ${ringColor}`,
          background: isHover && !label ? `${ringColor}18` : "transparent",
          willChange: "transform",
          mixBlendMode: isDark ? "screen" : "normal",
        }}
      >
        {label && isHover && (
          <span
            className="font-sans text-[9px] tracking-[0.18em] uppercase text-center leading-tight px-2"
            style={{ color: ringColor }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  );
}

export default function CustomCursor() {
  const isDesktop = useIsDesktop();
  if (!isDesktop) return null;
  return <CursorInner />;
}
