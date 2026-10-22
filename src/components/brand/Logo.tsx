// Logo: maçã em traço fino + "Luana Leite" cursivo (fonte Hurricane).
export const MARK_VIEWBOX = "0 0 40 40";
export const MARK_PATHS = [
  "M20 13C16.8 10.8 12.4 10.4 9.4 12.8C5.8 15.8 5.6 22 7.7 27C9.8 32 13.6 35.6 17 35.6C18.5 35.6 19 34.9 20 34.9C21 34.9 21.5 35.6 23 35.6C26.4 35.6 30.2 32 32.3 27C34.4 22 34.2 15.8 30.6 12.8C27.6 10.4 23.2 10.8 20 13Z",
  "M20 13C20 10 20.6 7.6 22.2 5.4",
  "M21.2 9.2C22.6 5.6 26.4 4 30.4 4.6C29.4 8.2 25.4 10.2 21.2 9.2Z",
];

export function BrandMark({ className = "h-8 w-auto", strokeWidth = 1.8 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg aria-hidden="true" viewBox={MARK_VIEWBOX} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {MARK_PATHS.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

type LogoProps = {
  variant?: "horizontal" | "stacked";
  className?: string;
};

export function Logo({ variant = "horizontal", className = "" }: LogoProps) {
  if (variant === "stacked") {
    return (
      <span className={`inline-flex flex-col items-center text-center ${className}`}>
        <BrandMark className="h-12 w-12 text-[#3f5a3c]" strokeWidth={1.5} />
        <span className="mt-1 font-script text-5xl leading-none text-emerald-950">Luana Leite</span>
        <span className="mt-2 text-[11px] tracking-[0.16em] text-stone-600">Nutrição Clínica e Funcional</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <BrandMark className="h-10 w-10 shrink-0 text-[#3f5a3c]" />
      <span className="flex flex-col">
        <span className="font-script text-[2.1rem] leading-[0.9] text-emerald-950">Luana Leite</span>
        <span className="mt-1 text-[10px] tracking-[0.14em] text-stone-600">Nutrição Clínica e Funcional</span>
      </span>
    </span>
  );
}
