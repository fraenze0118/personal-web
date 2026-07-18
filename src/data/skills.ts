import type { Skill } from "../types";

export const skills: Skill[] = [
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "MySQL", category: "backend" },
  { name: "Kafka", category: "backend" },
  { name: "Redis", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Vue", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Electron", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Linux", category: "tools" },
  { name: "C++", category: "embedded" },
  { name: "Arduino", category: "embedded" },
  { name: "ESP32", category: "embedded" },
];

export const categoryColors: Record<Skill["category"], string> = {
  backend: "text-accent-green border-accent-green/30 bg-accent-green/8",
  frontend: "text-accent-cyan border-accent-cyan/30 bg-accent-cyan/8",
  embedded: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/8",
  tools: "text-accent-violet border-accent-violet/30 bg-accent-violet/8",
  other: "text-accent-yellow border-accent-yellow/30 bg-accent-yellow/8",
};

export const categoryLabels: Record<Skill["category"], string> = {
  backend: "Backend",
  frontend: "Frontend",
  embedded: "Embedded",
  tools: "Tools",
  other: "Other",
};
