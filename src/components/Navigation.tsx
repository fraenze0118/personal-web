import { type ReactNode } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="group flex items-center gap-2 font-mono text-lg font-semibold text-text-primary no-underline shrink-0">
          <span className="text-accent-cyan">{'>'}</span>
          <span>yichen</span>
          <span className="inline-block w-2 h-5 bg-accent-cyan animate-blink align-middle" />
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                active={activeSection === item.href.slice(1)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors cursor-pointer"
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light" : "Switch to dark"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="px-2 py-1 rounded-md border border-border font-mono text-xs text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors cursor-pointer"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* Mobile nav links */}
          <div className="flex gap-3 sm:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-sm text-text-secondary hover:text-accent-cyan transition-colors no-underline"
              >
                {item.label.slice(0, 2)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, active, children }: { href: string; active: boolean; children: ReactNode }) {
  return (
    <a
      href={href}
      className={`relative font-mono text-sm no-underline transition-colors ${
        active ? "text-accent-cyan" : "text-text-secondary hover:text-text-primary"
      }`}
    >
      <span className="text-accent-cyan opacity-60">{'// '}</span>
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 right-0 h-px bg-accent-cyan" />
      )}
    </a>
  );
}

function SunIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}
