import { profile } from "../data/profile";
import { skills, categoryColors } from "../data/skills";
import { useLanguage } from "../contexts/LanguageContext";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";

export default function About() {
  const { loc } = useLanguage();

  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle label="about.md" title="About Me" />

        <FadeIn>
          <p className="mb-10 text-lg leading-relaxed text-text-secondary">
            {loc(profile.bio)}
          </p>
        </FadeIn>

        <FadeIn>
          <h3 className="mb-6 font-mono text-sm text-text-secondary">
            <span className="text-accent-violet">export</span>{" "}
            <span className="text-accent-cyan">Skills</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`inline-block rounded-md border px-3 py-1.5 font-mono text-xs transition-colors hover:border-text-secondary ${categoryColors[skill.category]}`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
