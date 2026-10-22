import Image from "next/image";
import { credentials, siteConfig } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

const pillars = ["Corpo", "Mente", "Genética", "Estilo de vida", "Emoções"];

export function About() {
  return (
    <section id="sobre" className="bg-[#f4f0e8] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-emerald-800 shadow-[16px_16px_0_#dce3d0]">
            <Image
              src="/images/fotoSobreMim.jpeg"
              alt={`${siteConfig.name} sentada no consultório`}
              fill
              sizes="(min-width: 432px) 384px, calc(100vw - 48px)"
              className="object-cover object-[50%_25%]"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-2xl bg-emerald-900 px-5 py-4 text-white shadow-xl sm:-right-6">
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-200">Registro</p>
            <p className="mt-1 font-serif text-xl">{siteConfig.registration}</p>
          </div>
        </Reveal>
        <div>
          <SectionHeading
            eyebrow="Sobre mim"
            title="Olá, eu sou a Luana."
            description={`${siteConfig.name} trabalha com uma abordagem que considera o equilíbrio do corpo como um todo e as necessidades individuais de cada paciente.`}
          />
          <Reveal delay={100}>
            <p className="mt-6 leading-7 text-stone-600">
              A Nutrição Clínica Funcional Integrativa vai além das dietas
              convencionais. Com uma abordagem personalizada, que considera
              genética, estilo de vida e condições emocionais, o acompanhamento
              busca um emagrecimento sustentável, mais energia e bem-estar — um
              caminho mais saudável e duradouro para o corpo e a mente.
            </p>
            <ul className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {credentials.map((credential) => (
                <li key={credential} className="flex items-start gap-3 text-sm leading-6 text-stone-700">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
                  {credential}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Um olhar integral sobre</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {pillars.map((pillar) => (
                <li key={pillar} className="rounded-full border border-emerald-900/15 bg-white/70 px-4 py-2 text-sm text-emerald-950">{pillar}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
