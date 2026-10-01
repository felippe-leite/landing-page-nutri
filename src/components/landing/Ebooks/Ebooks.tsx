import { ebooks } from "@/data/site";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Ebooks() {
  return (
    <section className="bg-[#f4f0e8] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div className="flex aspect-[4/3] max-w-sm items-end rounded-3xl bg-emerald-900 p-8 text-white">
          <p className="text-3xl font-medium leading-tight">Conteúdos para apoiar sua jornada.</p>
        </div>
        <div>
          <SectionHeading eyebrow="Materiais exclusivos" title="Informação para transformar pequenos hábitos." description="Luana também produz e-books e materiais educativos para ajudar você a cuidar da alimentação no dia a dia." />
          {ebooks.map((ebook) => (
            <div key={ebook.title} className="mt-8 border-l-2 border-emerald-700 pl-6">
              <p className="text-xl font-medium text-stone-900">{ebook.title}</p>
              <p className="mt-3 leading-7 text-stone-600">{ebook.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
