import { faqs } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function Faq() {
  return (
    <section className="bg-stone-50 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <SectionHeading eyebrow="Dúvidas" title="Antes de começar, talvez você queira saber…" />
        <div className="divide-y divide-stone-200 border-y border-stone-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="cursor-pointer list-none pr-8 text-lg font-medium text-stone-800 marker:hidden">{faq.question}<span className="float-right text-emerald-700 transition group-open:rotate-45">+</span></summary>
              <p className="mt-3 max-w-xl leading-7 text-stone-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
