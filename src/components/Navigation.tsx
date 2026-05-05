import { useState, type ReactNode, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTheme } from "../contexts/ThemeContext";

interface NavigationProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const { lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <a href="#" className="group flex items-center gap-2 font-mono text-base sm:text-lg font-semibold text-text-primary no-underline shrink-0">
          <span className="text-accent-cyan">{'>'}</span>
          <span>yichen</span>
          <span className="inline-block w-2 h-4 sm:h-5 bg-accent-cyan animate-blink align-middle" />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden sm:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <NavLink
                href={item.href}
                active={activeSection === item.href.slice(1)}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right side toggles */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-border text-text-secondary hover:text-text-primary hover:border-text-secondary transition-colors cursor-pointer"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          <button
            onClick={toggleLang}
            className="px-2 py-1 rounded-md border border-border font-mono text-xs text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors cursor-pointer"
          >
            {lang === "zh" ? "EN" : "中文"}
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-1.5 rounded-md border border-border text-text-secondary hover:text-text-primary sm:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-bg-primary/95 backdrop-blur-md">
          <ul className="flex flex-col px-4 py-4 gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={`block py-3 px-4 rounded-lg font-mono text-base no-underline transition-colors ${
                    activeSection === item.href.slice(1)
                      ? "text-accent-cyan bg-accent-cyan/10"
                      : "text-text-secondary hover:text-text-primary hover:bg-bg-secondary"
                  }`}
                >
                  <span className="text-accent-cyan opacity-60">{'// '}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, active, children, onClick }: { href: string; active: boolean; children: ReactNode; onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
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

function HamburgerIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
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
