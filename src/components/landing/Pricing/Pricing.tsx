import { consultations, getWhatsappLink } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";

export function Pricing() {
  return (
    <section id="consultas" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Consultas" title="Escolha o formato que combina com sua rotina." description="Atendimento por convênio e particular, com opções online e presencial em Brasília." centered />
        <div className="mx-auto mt-14 grid max-w-4xl items-stretch gap-6 md:grid-cols-2">
          {consultations.map((consultation, index) => (
            <Reveal
              as="article"
              key={consultation.title}
              delay={index * 120}
              className={`relative flex flex-col rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 sm:p-9 ${
                consultation.featured
                  ? "border-emerald-900 bg-emerald-900 text-white shadow-[0_30px_60px_-30px_rgba(6,78,59,0.7)]"
                  : "border-stone-200 bg-white hover:shadow-[0_24px_50px_-30px_rgba(6,78,59,0.4)]"
              }`}
            >
              {consultation.featured ? (
                <span className="absolute -top-3 right-7 rounded-full bg-[#dce3d0] px-3 py-1 text-xs font-semibold text-emerald-950">Avaliação completa</span>
              ) : null}
              <h3 className={`font-serif text-2xl ${consultation.featured ? "text-white" : "text-stone-900"}`}>{consultation.title}</h3>
              <p className={`mt-2 text-sm leading-6 ${consultation.featured ? "text-emerald-100/90" : "text-stone-600"}`}>{consultation.description}</p>
              <p className={`mt-7 font-serif text-5xl tracking-tight ${consultation.featured ? "text-white" : "text-emerald-800"}`}>{consultation.price}</p>
              <ul className={`mt-7 space-y-3 border-t pt-7 text-sm ${consultation.featured ? "border-white/15 text-emerald-50" : "border-stone-200 text-stone-700"}`}>
                {consultation.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span aria-hidden="true" className={consultation.featured ? "text-[#b8d3b5]" : "text-emerald-700"}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsappLink(consultation.message)}
                target="_blank"
                rel="noreferrer"
                className={`mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-5 py-3 font-medium transition ${
                  consultation.featured ? "bg-white text-emerald-900 hover:bg-emerald-50" : "bg-emerald-800 text-white hover:bg-emerald-950"
                }`}
              >
                <WhatsappIcon /> Agendar {consultation.title.toLowerCase()}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
