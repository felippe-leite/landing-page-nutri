import Image from "next/image";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const goals = [
  { title: "Mais equilíbrio", text: "Emagrecimento com estratégias que fazem sentido para sua rotina.", image: "57283fe974c3a2aad3298d82b80d6420.jpg", alt: "Atendimento nutricional com avaliação individual" },
  { title: "Mais força", text: "Nutrição para apoiar seus treinos, sua energia e o ganho de massa muscular.", image: "438523ec8f70b7a9b86ff82653dc47b4.jpg", alt: "Mulher praticando exercício físico" },
  { title: "Mais qualidade de vida", text: "Cuidado com a alimentação e a saúde em diferentes fases da vida.", image: "c69a0a0523bf939baa22bf06add78bae.jpg", alt: "Pessoas mais velhas se exercitando ao ar livre" },
];

export function Goals() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Seu objetivo, seu caminho" title="O cuidado muda. A atenção a você permanece." description="Cada fase pede um olhar. Encontre um acompanhamento alinhado ao que você precisa hoje." centered />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {goals.map((goal, index) => (
            <Reveal as="article" key={goal.title} delay={index * 120} className="group overflow-hidden rounded-3xl bg-[#f4f0e8] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(6,78,59,0.45)]">
              <div className="relative aspect-[4/3] overflow-hidden"><Image src={`/assets/site-antigo/${goal.image}`} alt={goal.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" /></div>
              <div className="p-7"><h3 className="font-serif text-2xl text-emerald-950">{goal.title}</h3><p className="mt-3 text-sm leading-7 text-stone-600">{goal.text}</p></div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
