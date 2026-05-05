import { profile } from "../data/profile";
import { useLanguage } from "../contexts/LanguageContext";
import { useTypewriter } from "../hooks/useTypewriter";
import FadeIn from "./FadeIn";

export default function Hero() {
  const { t, loc } = useLanguage();
  const { displayText } = useTypewriter(t("hero.greeting"));

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-16 text-center snap-start"
    >
      <FadeIn>
        <p className="font-mono text-accent-green text-lg mb-4 tracking-wider h-7">
          {'> '}{displayText}
          <span className="inline-block w-2 h-4 bg-accent-cyan ml-0.5 animate-blink align-middle" />
        </p>

        <h1 className="mb-4 font-sans text-5xl font-bold tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-accent-cyan to-accent-green bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mb-2 text-xl text-text-secondary sm:text-2xl">
          {loc(profile.role)}
        </p>
        <p className="mb-8 font-mono text-sm text-text-secondary">
          <span className="text-accent-violet">const</span>{" "}
          <span className="text-accent-cyan">name</span>{" "}
          <span className="text-text-secondary">=</span>{" "}
          <span className="text-accent-green">"{profile.nameEn}"</span>
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg border border-accent-cyan/30 bg-accent-cyan/10 px-6 py-2.5 font-mono text-sm text-accent-cyan no-underline transition-all hover:border-accent-cyan/60 hover:bg-accent-cyan/20"
          >
            {'>'} {t("hero.cta.projects")}
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-border px-6 py-2.5 font-mono text-sm text-text-secondary no-underline transition-all hover:border-text-secondary hover:text-text-primary"
          >
            {'>'} {t("hero.cta.contact")}
          </a>
        </div>
      </FadeIn>

      {/* Scroll-down indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-secondary/40 hover:text-accent-cyan transition-colors cursor-pointer bg-transparent border-0"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <svg
          className="w-5 h-5 animate-bounce"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>
    </section>
  );
}
