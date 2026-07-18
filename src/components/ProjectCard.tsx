import type { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import { techColors } from "../data/techColors";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const { loc } = useLanguage();
  const hasDetail = !!(project.detail || project.features || project.videoUrl);

  return (
    <div
      onClick={onClick}
      className={`group relative flex rounded-xl border border-border bg-bg-card overflow-hidden transition-all duration-300 hover:border-accent-cyan/30 hover:shadow-lg hover:-translate-y-0.5 ${
        hasDetail ? "cursor-pointer" : ""
      }`}
    >
      {/* Left accent bar */}
      <div className="w-1 shrink-0 bg-gradient-to-b from-accent-cyan via-accent-cyan/60 to-accent-green/30 transition-all duration-300 group-hover:from-accent-cyan group-hover:via-accent-cyan/80 group-hover:to-accent-green/60" />

      {/* Thumbnail (optional) */}
      {project.thumbnail && (
        <div className="w-36 sm:w-48 shrink-0 border-r border-border overflow-hidden bg-bg-secondary">
          <img
            src={project.thumbnail}
            alt={loc(project.title)}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex-1 p-5 sm:p-6 min-w-0">
        {/* Top row: title + source link */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-sans text-lg sm:text-xl font-semibold text-text-primary transition-colors duration-200 group-hover:text-accent-cyan">
            {loc(project.title)}
          </h3>

          <div className="flex items-center gap-3 shrink-0 pt-0.5">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-xs text-text-secondary no-underline transition-colors hover:text-accent-cyan"
              >
                &lt;/&gt;
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="font-mono text-xs text-accent-cyan no-underline transition-colors hover:underline"
              >
                visit &rarr;
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-text-secondary max-w-prose">
          {loc(project.description)}
        </p>

        {/* Bottom row: techs + detail link */}
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className={`inline-block rounded bg-bg-secondary px-2 py-0.5 font-mono text-xs whitespace-nowrap ${
                  techColors[tech] ?? "text-text-secondary"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
          {hasDetail && (
            <span className="shrink-0 font-mono text-xs text-accent-violet/60 transition-colors duration-200 group-hover:text-accent-violet whitespace-nowrap">
              view details &rarr;
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
