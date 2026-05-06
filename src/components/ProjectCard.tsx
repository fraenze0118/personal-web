import { useState, useCallback } from "react";
import type { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

const techColors: Record<string, string> = {
  Java: "text-accent-green",
  "Spring Boot": "text-accent-green",
  MySQL: "text-accent-violet",
  Kafka: "text-accent-yellow",
  Redis: "text-accent-cyan",
  Vue: "text-accent-cyan",
  React: "text-accent-cyan",
  TypeScript: "text-accent-cyan",
  "Tailwind CSS": "text-accent-cyan",
  Vite: "text-accent-yellow",
  "Node.js": "text-accent-green",
  PostgreSQL: "text-accent-violet",
  Docker: "text-accent-cyan",
  Python: "text-accent-yellow",
  AWS: "text-accent-violet",
  Electron: "text-accent-cyan",
  "Three.js": "text-accent-violet",
  Arduino: "text-accent-green",
  SolidWorks: "text-accent-cyan",
  "C++": "text-accent-yellow",
};

const MAX_TECHS = 5;

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { loc } = useLanguage();
  const visibleTechs = project.techs.slice(0, MAX_TECHS);
  const remaining = project.techs.length - MAX_TECHS;
  const hasDetail = !!(project.detail || project.features || project.videoUrl);

  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = x / rect.width;
    const cy = y / rect.height;

    setTilt({ rx: (cy - 0.5) * -12, ry: (cx - 0.5) * 12 });
    setGlow({ x: cx * 100, y: cy * 100 });
  }, []);

  const onMouseLeave = useCallback(() => {
    setTilt({ rx: 0, ry: 0 });
    setGlow({ x: 50, y: 50 });
  }, []);

  return (
    <div
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`group relative rounded-xl border border-border bg-bg-card p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent-cyan/30 hover:shadow-lg ${hasDetail ? "cursor-pointer" : ""}`}
      style={{
        transform:
          `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        boxShadow: tilt.rx !== 0 || tilt.ry !== 0
          ? `0 0 30px rgba(0,229,255,0.08), 0 20px 40px rgba(0,0,0,0.2)`
          : undefined,
      }}
    >
      {/* Glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(300px at ${glow.x}% ${glow.y}%, rgba(0,229,255,0.08) 0%, transparent 60%)`,
        }}
      />

      <div className="relative z-[1]">
        <h3 className="mb-3 font-sans text-xl font-semibold text-text-primary">
          {loc(project.title)}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-text-secondary">
          {loc(project.description)}
        </p>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {visibleTechs.map((tech) => (
            <span
              key={tech}
              className={`inline-block rounded bg-bg-secondary px-2 py-0.5 font-mono text-xs ${techColors[tech] ?? "text-text-secondary"}`}
            >
              {tech}
            </span>
          ))}
          {remaining > 0 && (
            <span className="inline-block rounded bg-bg-secondary px-2 py-0.5 font-mono text-xs text-text-secondary/60">
              +{remaining}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-xs text-accent-cyan no-underline hover:underline"
            >
              visit &rarr;
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-mono text-xs text-text-secondary no-underline hover:text-text-primary transition-colors"
            >
              &lt;/&gt; source
            </a>
          )}
          {hasDetail && (
            <span className="ml-auto font-mono text-xs text-accent-violet/60 group-hover:text-accent-violet transition-colors">
              view details &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
