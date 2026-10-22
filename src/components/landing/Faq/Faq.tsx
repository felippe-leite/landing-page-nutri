import { faqs, getWhatsappLink } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Faq() {
  return (
    <section id="duvidas" className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div>
          <SectionHeading eyebrow="Dúvidas" title="Antes de começar, talvez você queira saber…" />
          <Reveal delay={100}>
            <p className="mt-6 text-stone-600">Não encontrou o que procurava?</p>
            <a href={getWhatsappLink("Olá Nutri Luana Leite, tenho uma dúvida sobre o atendimento.")} target="_blank" rel="noreferrer" className="mt-2 inline-flex min-h-11 items-center gap-2 font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 transition hover:decoration-emerald-800">
              Envie sua pergunta pelo WhatsApp <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
        <Reveal delay={120} className="divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map((faq, index) => (
            <details key={faq.question} name="faq" open={index === 0} className="group py-2">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 text-lg font-medium text-stone-800 transition hover:text-emerald-900 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0">{faq.question}</span>
                <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-300 text-emerald-700 transition duration-300 group-open:rotate-45 group-open:border-emerald-700 group-open:bg-emerald-700 group-open:text-white">+</span>
              </summary>
              <p className="animate-fade-up max-w-xl pb-5 pr-12 leading-7 text-stone-600">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
