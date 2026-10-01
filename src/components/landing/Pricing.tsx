import { consultations } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Pricing() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Consultas" title="Escolha o formato que combina com sua rotina." description="Atendimento por convênio e particular, com opções online e presencial em Brasília." centered />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
          {consultations.map((consultation) => (
            <article key={consultation.title} className="rounded-3xl border border-stone-200 bg-white p-8">
              <h3 className="text-2xl font-medium text-stone-900">{consultation.title}</h3>
              <p className="mt-6 text-4xl font-semibold tracking-tight text-emerald-800">{consultation.price}</p>
              <p className="mt-4 leading-7 text-stone-600">{consultation.description}</p>
              <a href="#contato" className="mt-8 inline-flex rounded-full bg-emerald-700 px-5 py-3 font-medium text-white transition hover:bg-emerald-800">Quero agendar</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
