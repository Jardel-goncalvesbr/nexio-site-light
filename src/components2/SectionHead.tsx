interface SectionHeadProps {
  eyebrow: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
}

export default function SectionHead({ eyebrow, title, text, align = "center" }: SectionHeadProps) {
  const isCenter = align === "center";
  return (
    <div className={`mb-14 max-w-xl ${isCenter ? "mx-auto text-center" : ""}`}>
      <span className="mb-4 block text-xs font-bold uppercase tracking-wide text-purple">{eyebrow}</span>
      <h2 className="mb-3 font-poppins text-3xl font-extrabold leading-snug text-ink">{title}</h2>
      {text && <p className="text-body">{text}</p>}
    </div>
  );
}
