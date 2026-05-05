import { useState, useEffect, useRef } from "react";

export function useTypewriter(text: string, speed = 60, delay = 300) {
  const [displayText, setDisplayText] = useState("");
  const [isDone, setIsDone] = useState(false);
  const indexRef = useRef(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    setDisplayText("");
    setIsDone(false);
    indexRef.current = 0;

    const timeout = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        indexRef.current += 1;
        setDisplayText(text.slice(0, indexRef.current));
        if (indexRef.current >= text.length) {
          setIsDone(true);
          clearInterval(intervalRef.current);
          intervalRef.current = undefined;
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearInterval(intervalRef.current);
    };
  }, [text, speed, delay]);

  return { displayText, isDone };
}
