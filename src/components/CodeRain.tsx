import { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789{}[]()<>/\\*+-=;:.,";

const FONT_SIZE = 20;
const SPEED_RANGE = [0.05, 0.2];
const TAIL_LENGTH = 8;
const DENSITY = 0.1;

export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);
  themeRef.current = theme;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0, cols = 0;
    let drops: number[] = [];
    let speeds: number[] = [];
    let active: boolean[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      cols = Math.floor(w / FONT_SIZE);
      active = new Array(cols).fill(false).map(() => Math.random() < DENSITY);
      drops = new Array(cols).fill(0).map(() => Math.random() * -100);
      speeds = new Array(cols).fill(0).map(() =>
        SPEED_RANGE[0] + Math.random() * (SPEED_RANGE[1] - SPEED_RANGE[0])
      );
    };

    resize();
    window.addEventListener("resize", resize);

    const isDark = () => themeRef.current === "dark";

    let raf = 0;

    const draw = () => {
      const dark = isDark();

      // Fade overlay — match the background color
      ctx.fillStyle = dark
        ? "rgba(10, 10, 15, 0.10)"
        : "rgba(248, 248, 252, 0.10)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", monospace`;

      for (let i = 0; i < cols; i++) {
        if (!active[i]) continue;

        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;

        for (let j = 0; j < TAIL_LENGTH; j++) {
          const cy = y - j * FONT_SIZE;
          if (cy < -FONT_SIZE || cy > h + FONT_SIZE) continue;

          const char = CHARS[Math.floor(Math.random() * CHARS.length)];

          if (j === 0) {
            ctx.fillStyle = dark
              ? "rgba(200, 255, 255, 0.5)"
              : "rgba(0, 140, 170, 0.4)";
          } else if (j < 2) {
            const a = 1 - j / TAIL_LENGTH;
            ctx.fillStyle = dark
              ? `rgba(0, 229, 255, ${(a * 0.3).toFixed(2)})`
              : `rgba(0, 136, 170, ${(a * 0.2).toFixed(2)})`;
          } else {
            const a = 1 - j / TAIL_LENGTH;
            ctx.fillStyle = dark
              ? `rgba(0, 255, 136, ${(a * 0.15).toFixed(2)})`
              : `rgba(0, 119, 68, ${(a * 0.1).toFixed(2)})`;
          }

          ctx.fillText(char, x, cy);
        }

        drops[i] += speeds[i];

        if (drops[i] * FONT_SIZE > h + TAIL_LENGTH * FONT_SIZE) {
          drops[i] = Math.random() * -20;
          speeds[i] = SPEED_RANGE[0] + Math.random() * (SPEED_RANGE[1] - SPEED_RANGE[0]);
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.35 }}
    />
  );
}
