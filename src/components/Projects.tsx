import { useState } from "react";
import type { Project } from "../types";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle label="projects.json" title="Projects" />

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <FadeIn key={i}>
              <ProjectCard
                project={project}
                onClick={() => setSelected(project)}
              />
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectDetail
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
