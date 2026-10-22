import Image from "next/image";
import { getWhatsappLink, siteConfig } from "@/data/site";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";

export function Hero() {
  return (
    <section id="inicio" className="hero-section overflow-hidden bg-[#f4f0e8]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-6 lg:px-12 lg:pt-12">
        <div className="relative z-1 pb-4 lg:pb-20">
          <p className="animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-800/15 bg-white/60 px-4 py-2 text-xs font-medium text-emerald-900"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" /><span className="relative h-2 w-2 rounded-full bg-emerald-600" /></span> Brasília e onde você estiver</p>
          <p style={{ "--delay": "80ms" } as React.CSSProperties} className="animate-fade-up text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800">Nutrição clínica funcional integrativa</p>
          <h1 style={{ "--delay": "160ms" } as React.CSSProperties} className="animate-fade-up mt-5 max-w-xl text-5xl leading-[1.07] tracking-tight text-stone-900 sm:text-6xl lg:text-[4.4rem]">
            Uma alimentação possível para uma <em className="font-normal text-emerald-800">vida mais leve.</em>
          </h1>
          <p style={{ "--delay": "260ms" } as React.CSSProperties} className="animate-fade-up mt-6 max-w-md text-base leading-8 text-stone-600">Cuidar de você começa com escuta. Um acompanhamento nutricional que respeita sua rotina, sua história e seus objetivos.</p>
          <div style={{ "--delay": "360ms" } as React.CSSProperties} className="animate-fade-up mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-7">
            <a href={getWhatsappLink()} target="_blank" rel="noreferrer" className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-emerald-800 px-7 py-4 text-sm font-medium text-white shadow-[0_14px_30px_-14px_rgba(6,78,59,0.8)] transition hover:-translate-y-0.5 hover:bg-emerald-950"><WhatsappIcon /> Agendar minha consulta <span aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span></a>
            <a href="#como-funciona" className="py-2 text-sm text-stone-600 underline decoration-stone-300 underline-offset-4 hover:text-emerald-800">Conheça o acompanhamento</a>
          </div>
        </div>
        <div style={{ "--delay": "200ms" } as React.CSSProperties} className="animate-fade-up hero-portrait relative isolate mx-auto w-full max-w-md self-end">
          <div className="absolute inset-x-3 bottom-0 top-12 -z-1 rounded-t-[48%] bg-[#dce3d0]" />
          <div className="absolute inset-x-0 bottom-0 top-6 -z-1 rounded-t-[48%] border border-emerald-900/15" />
          <span className="absolute right-0 top-16 text-xs uppercase tracking-[0.2em] text-emerald-800 [writing-mode:vertical-rl]">Saúde · equilíbrio · bem-estar</span>
          <div className="relative aspect-[4/5] w-full">
            <Image src="/assets/site-antigo/76aa59da770f393e495b7c2ab4d19433.png" alt={`${siteConfig.name}, nutricionista`} fill priority sizes="(min-width: 1024px) 448px, (min-width: 496px) 448px, calc(100vw - 48px)" className="object-contain object-bottom" />
          </div>
          <div className="absolute bottom-6 left-0 rounded-2xl border border-white/80 bg-[#fffdf8]/95 px-5 py-4 shadow-lg sm:-left-4">
            <p className="font-serif text-xl text-emerald-950">Luana Leite de Souza</p>
            <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-stone-500">Nutricionista · {siteConfig.registration}</p>
          </div>
        </div>
      </div>
      <div className="border-y border-emerald-900/10 bg-[#e9edde]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 py-5 text-xs font-medium tracking-wide text-emerald-900 sm:justify-between lg:px-12">
          <span>✦ Cuidado individualizado</span><span>✦ Atendimento online e presencial</span><span>✦ Nutrição para a vida real</span>
        </div>
      </div>
    </section>
  );
}
