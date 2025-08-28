"use client";

import type { FC, ReactNode, CSSProperties } from "react";
import { useState, useEffect, useRef } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  disabled?: boolean;
  offset?: number;
  className?: string;
  delay?: number;
}

const Tooltip: FC<TooltipProps> = ({
  children,
  content,
  disabled = false,
  offset = 15,
  className = "",
  delay = 0,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [isVisible, setIsVisible] = useState(false);
  const [isTracking, setIsTracking] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const [style, setStyle] = useState<CSSProperties>({
    left: "-9999px",
    top: "-9999px",
  });

  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    if (isTracking) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTracking]);

  const handleMouseEnter = (e) => {
    if (disabled) return;

    setMousePos({ x: e.clientX, y: e.clientY });
    setIsTracking(true);

    if (delay > 0) {
      const id = setTimeout(() => {
        setIsVisible(true);
      }, delay);

      setTimeoutId(id);
    } else {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    setIsVisible(false);
    setIsTracking(false);
  };

  useEffect(() => {
    if (!isVisible || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    let x = mousePos.x + offset;
    let y = mousePos.y + offset;

    if (x + rect.width > window.innerWidth - offset) {
      x = mousePos.x - rect.width - offset;
    }

    if (y + rect.height > window.innerHeight - offset) {
      y = mousePos.y - rect.height - offset;
    }

    x = Math.max(offset, x);
    y = Math.max(offset, y);

    setStyle({
      left: `${x}px`,
      top: `${y}px`,
    });
  }, [isVisible, mousePos]);

  return (
    <>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        {children}
      </div>

      {!disabled && (
        <div
          ref={ref}
          className={`
            fixed pointer-events-none z-50 bg-black text-white dark:bg-white dark:text-black px-3 py-2
            rounded-lg shadow-xl text-sm max-w-xs transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 transition-none"} ${className}
          `}
          style={style}
        >
          {content}
        </div>
      )}
    </>
  );
};

export default Tooltip;
