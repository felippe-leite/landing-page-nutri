import { benefits } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Benefits() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <SectionHeading eyebrow="Um cuidado individual" title="Sua alimentação não precisa caber em uma fórmula pronta." description="Cada pessoa tem uma rotina, uma história e necessidades diferentes. O acompanhamento parte de você." />
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit} delay={index * 90} className="group rounded-2xl border border-stone-200 bg-stone-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-700/30 hover:bg-[#f4f0e8] hover:shadow-[0_18px_40px_-24px_rgba(6,78,59,0.45)]">
              <span className="font-serif text-2xl text-emerald-700 transition group-hover:text-emerald-900">0{index + 1}</span>
              <p className="mt-8 text-lg font-medium leading-7 text-stone-800">{benefit}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
