import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="sobre" className="bg-[#f4f0e8] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <div className="flex aspect-square max-w-sm items-end rounded-[2rem] bg-emerald-800 p-8 text-white">
          <p className="text-3xl font-medium leading-tight">
            Cuidar da saúde também pode ser leve.
          </p>
        </div>
        <div>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Nutrição Clínica Funcional Integrativa."
            description={`${siteConfig.name} trabalha com uma abordagem que considera o equilíbrio do corpo como um todo e as necessidades individuais de cada paciente.`}
          />
          <p className="mt-6 leading-7 text-stone-600">
            Com foco em emagrecimento, hipertrofia e suplementação fitoterápica,
            o acompanhamento busca apoiar uma vida com mais saúde, energia e
            bem-estar.
          </p>
          <p className="mt-6 text-sm font-medium text-stone-800">
            {siteConfig.registration}
          </p>
        </div>
      </div>
    </section>
  );
}
