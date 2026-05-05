import type { TimelineItem as TimelineItemType } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

export default function TimelineItem({ item }: { item: TimelineItemType }) {
  const { loc } = useLanguage();
  const isWork = item.type === "work";
  const dotColor = isWork ? "bg-accent-cyan" : "bg-accent-violet";
  const lineColor = isWork ? "border-accent-cyan/20" : "border-accent-violet/20";

  return (
    <div className={`relative pl-8 pb-10 border-l-2 ${lineColor} last:border-l-transparent last:pb-0`}>
      <span className={`absolute left-[-5px] top-1.5 block w-2.5 h-2.5 rounded-full ${dotColor}`} />

      <span className="font-mono text-xs text-text-secondary">{item.period}</span>
      <h3 className="mt-1 font-sans text-lg font-semibold text-text-primary">{loc(item.title)}</h3>
      <p className="font-sans text-sm text-accent-cyan">{loc(item.subtitle)}</p>
      {item.description && (
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{loc(item.description)}</p>
      )}
    </div>
  );
}
