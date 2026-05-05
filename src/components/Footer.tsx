import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <p className="font-mono text-xs text-text-secondary">
          <span className="text-accent-green">$</span> {t("footer.built")}
        </p>
        <p className="font-mono text-xs text-text-secondary/60">
          &copy; {new Date().getFullYear()} Yichen Yang. {t("footer.rights")}.
        </p>
      </div>
    </footer>
  );
}
