"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { assessments, getWhatsappLink, objectives } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";

export function Services() {
  const [selected, setSelected] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const objective = objectives[selected];

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keys: Record<string, number> = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    let next: number | null = null;
    if (event.key in keys) next = (selected + keys[event.key] + objectives.length) % objectives.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = objectives.length - 1;
    if (next === null) return;
    event.preventDefault();
    setSelected(next);
    tabsRef.current[next]?.focus();
  }

  return (
    <section id="objetivos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Atuação profissional" title="Qual é o seu objetivo hoje?" description="Escolha um objetivo e veja como o acompanhamento funcional integrativo pode apoiar você." />

        <Reveal className="mt-12">
          <div role="tablist" aria-label="Objetivos" onKeyDown={onKeyDown} className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0">
            {objectives.map((item, index) => {
              const isActive = index === selected;
              return (
                <button
                  key={item.id}
                  ref={(node) => { tabsRef.current[index] = node; }}
                  id={`tab-${item.id}`}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  aria-controls={`painel-${item.id}`}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setSelected(index)}
                  className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-medium transition duration-200 ${
                    isActive ? "border-emerald-800 bg-emerald-800 text-white shadow-[0_10px_24px_-14px_rgba(6,78,59,0.8)]" : "border-stone-200 bg-stone-50 text-stone-700 hover:border-emerald-700/40 hover:text-emerald-900"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div
            key={objective.id}
            id={`painel-${objective.id}`}
            role="tabpanel"
            aria-labelledby={`tab-${objective.id}`}
            tabIndex={0}
            className="animate-fade-up flex flex-col rounded-3xl border border-stone-200 bg-gradient-to-br from-[#f4f0e8] to-white p-7 sm:p-10"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Protocolo</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight text-emerald-950 sm:text-4xl">{objective.title}</h3>
            <p className="mt-4 max-w-xl leading-7 text-stone-600">{objective.description}</p>
            <ul className="mb-9 mt-7 grid gap-3">
              {objective.includes.map((item, index) => (
                <li key={item} style={{ "--delay": `${150 + index * 80}ms` } as React.CSSProperties} className="animate-fade-up flex items-start gap-3 text-stone-700">
                  <span aria-hidden="true" className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-800">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsappLink(`Olá Nutri Luana Leite, gostaria de saber mais sobre o acompanhamento para ${objective.title.toLowerCase()}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-emerald-800 px-6 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-950 lg:mt-auto"
            >
              <WhatsappIcon /> Quero esse acompanhamento
            </a>
          </div>

          <Reveal delay={120} className="overflow-hidden rounded-3xl bg-emerald-950 text-white">
            <div className="relative aspect-[16/9]">
              <Image src="/assets/site-antigo/2aab42168a5bfe314d80a3ba14fb60eb.jpg" alt="Avaliação de medidas corporais com fita métrica" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="font-serif text-2xl">Avaliações disponíveis</h3>
              <ul className="mt-6 flex flex-wrap gap-2">
                {assessments.map((assessment) => (
                  <li key={assessment} className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-sm text-emerald-50">{assessment}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
