// Logo recriada a partir da identidade do consultório (lótus + "Luana Leite" cursivo).
export const LOTUS_VIEWBOX = "0 0 48 34";
export const LOTUS_PATHS = [
  "M24.00 31.00C29.49 23.70 28.67 10.43 24.60 4.50C20.27 10.23 18.85 23.46 24.00 31.00Z",
  "M23.20 31.00C21.64 22.69 12.08 17.45 5.50 18.50C6.71 25.05 14.85 32.31 23.20 31.00Z",
  "M24.80 31.00C34.39 30.20 43.11 20.03 44.00 12.50C36.45 13.11 25.96 21.44 24.80 31.00Z",
];

export function Lotus({ className = "h-8 w-auto", strokeWidth = 1.8 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg aria-hidden="true" viewBox={LOTUS_VIEWBOX} fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {LOTUS_PATHS.map((d) => <path key={d} d={d} />)}
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
        <Lotus className="h-9 w-auto text-[#5b6b47]" strokeWidth={1.5} />
        <span className="mt-1 font-script text-5xl leading-none text-emerald-950">Luana Leite</span>
        <span className="mt-2 text-[11px] tracking-[0.16em] text-stone-600">Nutrição Clínica e Funcional</span>
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Lotus className="h-8 w-auto shrink-0 text-[#5b6b47]" />
      <span className="flex flex-col">
        <span className="font-script text-[2.1rem] leading-[0.9] text-emerald-950">Luana Leite</span>
        <span className="mt-1 text-[10px] tracking-[0.14em] text-stone-600">Nutrição Clínica e Funcional</span>
      </span>
    </span>
  );
}
