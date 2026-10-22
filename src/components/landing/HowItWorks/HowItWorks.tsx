import Image from "next/image";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const steps = [
  { number: "01", title: "Acolher", description: "Entender sua rotina, seus objetivos e o que você realmente precisa neste momento.", image: "57283fe974c3a2aad3298d82b80d6420.jpg", alt: "Conversa durante uma consulta nutricional" },
  { number: "02", title: "Planejar", description: "Construir estratégias e um plano alimentar que façam sentido para a sua vida.", image: "6a0b8d57f5e6b9ce8e5d97be96512d6f.jpg", alt: "Profissional de saúde analisando informações durante o atendimento" },
  { number: "03", title: "Acompanhar", description: "Ajustar o caminho com proximidade, clareza e acompanhamento contínuo.", image: "0564724f377930ce67eb11b7b72551b0.jpg", alt: "Acompanhamento nutricional por videochamada" },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-emerald-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading tone="dark" eyebrow="Como funciona" title="Um processo simples, próximo e feito para você." description="O acompanhamento acontece em parceria, sem cobranças irreais e sem soluções genéricas." />
        <ol className="relative mt-14 grid gap-8 md:grid-cols-3">
          <span aria-hidden="true" className="absolute left-[16%] right-[16%] top-[-1.75rem] hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent md:block" />
          {steps.map((step, index) => (
            <Reveal as="li" key={step.number} delay={index * 120} className="group overflow-hidden rounded-3xl border border-white/15 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={`/assets/site-antigo/${step.image}`} alt={step.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
                <span className="absolute bottom-4 left-5 flex h-10 w-10 items-center justify-center rounded-full bg-[#f4f0e8] text-sm font-semibold text-emerald-950">{step.number}</span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-stone-300">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
