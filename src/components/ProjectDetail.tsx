import { useEffect, useState } from "react";
import type { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

const techColors: Record<string, string> = {
  Java: "text-accent-green",
  "Spring Boot": "text-accent-green",
  MySQL: "text-accent-violet",
  Kafka: "text-accent-yellow",
  Redis: "text-accent-cyan",
  Vue: "text-accent-cyan",
  Electron: "text-accent-cyan",
  TypeScript: "text-accent-cyan",
  React: "text-accent-cyan",
  "Three.js": "text-accent-violet",
  "Node.js": "text-accent-green",
  Python: "text-accent-yellow",
  PostgreSQL: "text-accent-violet",
  "Tailwind CSS": "text-accent-cyan",
  Vite: "text-accent-yellow",
  Docker: "text-accent-cyan",
  AWS: "text-accent-violet",
  Arduino: "text-accent-green",
  SolidWorks: "text-accent-cyan",
  "C++": "text-accent-yellow",
};

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

function ImageCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  if (images.length === 0) return null;

  return (
    <div className="mb-6">
      <div className="relative rounded-xl overflow-hidden border border-border bg-black">
        <img
          src={images[idx]}
          alt={`Image ${idx + 1}`}
          className="w-full aspect-video object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-black/50 text-white/80 hover:bg-black/70 hover:text-white transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`block w-2 h-2 rounded-full transition-colors ${
                    i === idx ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <p className="mt-2 text-center font-mono text-xs text-text-secondary/60">
          {idx + 1} / {images.length}
          <span className="ml-2">&#8592; &#8594; to browse</span>
        </p>
      )}
    </div>
  );
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const { loc } = useLanguage();

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center p-4 pt-16 sm:pt-20 pb-8 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative w-full max-w-2xl rounded-2xl border border-border bg-bg-card shadow-2xl">
        {/* Header */}
        <div className="flex items-start justify-between p-4 sm:p-6 pb-2">
          <h2 className="font-sans text-xl sm:text-2xl font-bold text-text-primary">
            {loc(project.title)}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-secondary transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="px-4 sm:px-6 pb-6">
          {/* Images (carousel) */}
          {project.images && project.images.length > 0 && (
            <ImageCarousel images={project.images} />
          )}

          {/* Video */}
          {project.videoUrl ? (
            <div className="mb-6 rounded-xl overflow-hidden border border-border">
              <video
                src={project.videoUrl}
                controls
                className="w-full aspect-video bg-black"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          ) : (
            !project.images?.length && (
              <div className="mb-6 rounded-xl border border-border bg-bg-secondary flex items-center justify-center aspect-video text-text-secondary/40">
                <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polygon points="10,8 16,12 10,16" />
                </svg>
              </div>
            )
          )}

          {/* Description */}
          {project.detail && (
            <p className="mb-6 text-sm leading-relaxed text-text-secondary">
              {loc(project.detail)}
            </p>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <h3 className="mb-3 font-mono text-xs text-accent-violet">
                {'//'} features
              </h3>
              <ul className="space-y-2">
                {project.features.map((feat, i) => (
                  <li key={i} className="flex gap-2 text-sm text-text-secondary">
                    <span className="text-accent-cyan mt-0.5 shrink-0">{'>'}</span>
                    <span>{loc(feat)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech tags */}
          <div className="mb-6">
            <h3 className="mb-3 font-mono text-xs text-accent-violet">
              {'//'} tech stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className={`inline-block rounded bg-bg-secondary px-2 py-0.5 font-mono text-xs ${techColors[tech] ?? "text-text-secondary"}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-2 border-t border-border">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 px-4 py-2 font-mono text-xs text-accent-cyan no-underline hover:bg-accent-cyan/20 transition-colors"
              >
                visit &rarr;
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2 font-mono text-xs text-text-secondary no-underline hover:text-text-primary hover:border-text-secondary transition-colors"
              >
                &lt;/&gt; source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
