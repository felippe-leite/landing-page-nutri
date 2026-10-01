import { benefits } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Benefits() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <SectionHeading eyebrow="Um cuidado individual" title="Sua alimentação não precisa caber em uma fórmula pronta." description="Cada pessoa tem uma rotina, uma história e necessidades diferentes. O acompanhamento parte de você." />
        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <span className="text-sm font-semibold text-emerald-700">0{index + 1}</span>
              <p className="mt-8 text-lg font-medium leading-7 text-stone-800">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
