"use client";

import Image from "next/image";
import { useRef, type CSSProperties, type PointerEvent } from "react";
import { siteConfig } from "@/data/site";

// Cada camada se desloca proporcionalmente à posição do mouse (efeito de profundidade).
function layer(depth: number): CSSProperties {
  return { transform: `translate3d(calc(var(--mx) * ${depth}px), calc(var(--my) * ${depth}px), 0)` };
}

export function HeroPortrait() {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== "mouse") return;
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      element.style.setProperty("--mx", x.toFixed(3));
      element.style.setProperty("--my", y.toFixed(3));
    });
  }

  function onPointerLeave() {
    cancelAnimationFrame(frame.current);
    ref.current?.style.setProperty("--mx", "0");
    ref.current?.style.setProperty("--my", "0");
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ "--mx": 0, "--my": 0, "--delay": "200ms" } as CSSProperties}
      className="hero-portrait animate-fade-up group relative isolate mx-auto w-full max-w-md self-end [perspective:1000px]"
    >
      <div aria-hidden="true" style={layer(-10)} className="parallax-layer absolute inset-x-3 bottom-0 top-12 -z-1 rounded-t-[48%] bg-[#dce3d0]" />
      <div aria-hidden="true" style={layer(-18)} className="parallax-layer absolute inset-x-0 bottom-0 top-6 -z-1 rounded-t-[48%] border border-emerald-900/15" />
      <span aria-hidden="true" style={layer(-6)} className="parallax-layer absolute right-0 top-16 text-xs uppercase tracking-[0.2em] text-emerald-800 [writing-mode:vertical-rl]">
        Saúde · equilíbrio · bem-estar
      </span>
      <div
        style={{ transform: "translate3d(calc(var(--mx) * 8px), calc(var(--my) * 4px), 0) rotateY(calc(var(--mx) * 4deg)) rotateX(calc(var(--my) * -3deg))" }}
        className="parallax-layer relative aspect-[4/5] w-full origin-bottom"
      >
        <Image src="/assets/site-antigo/76aa59da770f393e495b7c2ab4d19433.png" alt={`${siteConfig.name}, nutricionista`} fill priority sizes="(min-width: 496px) 448px, calc(100vw - 48px)" className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(6,40,30,0.18)]" />
      </div>
      <div style={layer(16)} className="parallax-layer absolute left-2 top-24 sm:-left-6">
        <p className="animate-float flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-medium text-emerald-900 shadow-lg backdrop-blur [--float-delay:-3s]">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-emerald-600" /> Online e presencial
        </p>
      </div>
      <div style={layer(22)} className="parallax-layer absolute bottom-6 left-0 sm:-left-4">
        <div className="animate-float rounded-2xl border border-white/80 bg-[#fffdf8]/95 px-5 py-4 shadow-lg transition-shadow duration-300 group-hover:shadow-2xl">
          <p className="font-serif text-xl text-emerald-950">{siteConfig.name}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-stone-500">Nutricionista · {siteConfig.registration}</p>
        </div>
      </div>
    </div>
  );
}
