import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const bootLines = {
  zh: [
    "> BIOS 自检...",
    "> 加载内核...",
    "> 挂载文件系统...",
    "> 启动 UI 服务...",
    "> 初始化个人档案 v1.0...",
    "> 加载项目数据...",
    "> 就绪.",
  ],
  en: [
    "> BIOS check...",
    "> Loading kernel...",
    "> Mounting filesystem...",
    "> Starting UI server...",
    "> Initializing portfolio v1.0...",
    "> Loading project data...",
    "> Ready.",
  ],
};

const okText = { zh: "  OK", en: "  OK" };

interface BootScreenProps {
  onDone: () => void;
}

export default function BootScreen({ onDone }: BootScreenProps) {
  const { lang } = useLanguage();
  const [visibleLines, setVisibleLines] = useState(0);
  const [showOk, setShowOk] = useState<boolean[]>([]);
  const [fadeOut, setFadeOut] = useState(false);

  const lines = bootLines[lang] ?? bootLines.en;
  const ok = okText[lang] ?? okText.en;

  useEffect(() => {
    setVisibleLines(0);
    setShowOk(new Array(lines.length).fill(false));
    setFadeOut(false);
  }, [lang]);

  useEffect(() => {
    if (visibleLines >= lines.length) return;

    const delay = visibleLines === 0 ? 200 : 350;
    const timer = setTimeout(() => {
      setVisibleLines((v) => v + 1);
      // Show OK after a short pause
      setTimeout(() => {
        setShowOk((prev) => {
          const next = [...prev];
          next[visibleLines] = true;
          return next;
        });
      }, 250);
    }, delay);

    return () => clearTimeout(timer);
  }, [visibleLines, lines.length]);

  // Fade out after all lines shown
  useEffect(() => {
    if (visibleLines < lines.length) return;
    const allOk = showOk.every(Boolean) && showOk.length === lines.length;
    if (!allOk) return;

    const timer = setTimeout(() => setFadeOut(true), 600);
    const done = setTimeout(onDone, 1100);
    return () => {
      clearTimeout(timer);
      clearTimeout(done);
    };
  }, [visibleLines, showOk, lines.length, onDone]);

  const allLines = lines.slice(0, visibleLines);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="font-mono text-sm sm:text-base leading-7">
        {allLines.map((line, i) => (
          <div key={i} className="flex">
            <span className="text-accent-green">{line}</span>
            {showOk[i] ? (
              <span className="text-accent-cyan ml-1">{ok}</span>
            ) : (
              <span className="text-text-secondary/40 ml-1">...</span>
            )}
          </div>
        ))}

        {/* Blinking prompt after all lines done */}
        {visibleLines >= lines.length && showOk.every(Boolean) && (
          <div className="flex mt-2">
            <span className="text-accent-green">{'>'} welcome</span>
            <span className="inline-block w-2 h-4 bg-accent-cyan ml-0.5 animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
}
