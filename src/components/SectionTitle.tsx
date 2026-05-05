interface SectionTitleProps {
  label: string;
  title: string;
}

export default function SectionTitle({ label, title }: SectionTitleProps) {
  return (
    <div className="mb-12">
      <span className="font-mono text-sm text-accent-cyan tracking-wider">
        {'>'} {label}
      </span>
      <h2 className="mt-2 text-3xl font-bold text-text-primary tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
