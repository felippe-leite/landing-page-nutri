import { Reveal } from "../Reveal/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  centered?: boolean;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, centered = false, tone = "light" }: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] ${centered ? "justify-center" : ""} ${dark ? "text-[#b8d3b5]" : "text-emerald-700"}`}>
        <span aria-hidden="true" className={`h-px w-8 ${dark ? "bg-[#b8d3b5]/60" : "bg-emerald-700/50"}`} />
        {eyebrow}
      </p>
      <h2 className={`mt-4 text-4xl leading-[1.1] tracking-tight sm:text-5xl ${dark ? "text-[#fffdf8]" : "text-stone-900"}`}>{title}</h2>
      {description ? <p className={`mt-5 text-base leading-7 ${dark ? "text-[#d6e0d8]" : "text-stone-600"}`}>{description}</p> : null}
    </Reveal>
  );
}
