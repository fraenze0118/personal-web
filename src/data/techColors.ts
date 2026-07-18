/**
 * Shared tech → Tailwind text color mapping.
 * Used by both ProjectCard and ProjectDetail.
 */
export const techColors: Record<string, string> = {
  // Backend
  Java: "text-accent-green",
  "Spring Boot": "text-accent-green",
  "Node.js": "text-accent-green",
  Arduino: "text-accent-green",
  "ESP32-S3": "text-accent-green",
  KaTeX: "text-accent-green",

  // Frontend
  TypeScript: "text-accent-cyan",
  React: "text-accent-cyan",
  Vue: "text-accent-cyan",
  "Next.js": "text-accent-cyan",
  "Tailwind CSS": "text-accent-cyan",
  Electron: "text-accent-cyan",
  Vite: "text-accent-yellow",
  Docker: "text-accent-cyan",
  SolidWorks: "text-accent-cyan",

  // Data / infra
  MySQL: "text-accent-violet",
  PostgreSQL: "text-accent-violet",
  "Three.js": "text-accent-violet",
  "React Flow": "text-accent-violet",
  FreeCAD: "text-accent-violet",

  // Language / tooling
  Python: "text-accent-yellow",
  Kafka: "text-accent-yellow",
  "C++": "text-accent-yellow",
  "立创EDA": "text-accent-yellow",

  // Cloud
  Redis: "text-accent-cyan",
  AWS: "text-accent-violet",
};
