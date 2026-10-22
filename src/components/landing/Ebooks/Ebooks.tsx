import Image from "next/image";
import { ebooks } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Ebooks() {
  return (
    <section className="overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        {ebooks.map((ebook) => (
          <div key={ebook.title} className="grid items-center gap-14 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal className="relative mx-auto w-full max-w-[300px] lg:mx-0">
              <div aria-hidden="true" className="absolute -inset-8 -z-0 rounded-full bg-[#dce3d0] blur-2xl" />
              <a href={ebook.url} data-track="ebook_click" data-track-origem="capa" target="_blank" rel="noreferrer" aria-label={`Ver o e-book ${ebook.title} na Hotmart`} className="group relative block [perspective:1200px]">
                <div className="relative aspect-[512/800] overflow-hidden rounded-r-xl rounded-l-sm shadow-[-8px_0_0_-2px_#c9d2bd,0_40px_70px_-30px_rgba(6,40,30,0.7)] transition duration-500 [transform:rotateY(-12deg)] group-hover:[transform:rotateY(0deg)_translateY(-6px)]">
                  <Image src={ebook.cover} alt={`Capa do e-book ${ebook.title}`} fill sizes="300px" className="object-cover" />
                  <span aria-hidden="true" className="absolute inset-y-0 left-0 w-3 bg-gradient-to-r from-black/25 to-transparent" />
                </div>
              </a>
              <span className="absolute -bottom-4 -left-3 -rotate-6 rounded-full bg-emerald-800 px-4 py-2 text-xs font-semibold text-white shadow-lg">{ebook.volume}</span>
            </Reveal>
            <div>
              <SectionHeading eyebrow="E-book" title={ebook.title} description={ebook.description} />
              <Reveal delay={120}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {ebook.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-3 rounded-2xl border border-emerald-900/10 bg-stone-50 px-4 py-3 text-stone-700">
                      <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs text-emerald-800">✓</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <a href={ebook.url} data-track="ebook_click" data-track-origem="botao" target="_blank" rel="noreferrer" className="group inline-flex min-h-13 items-center gap-3 rounded-full bg-emerald-800 px-7 py-4 text-sm font-medium text-white shadow-[0_14px_30px_-14px_rgba(6,78,59,0.8)] transition hover:-translate-y-0.5 hover:bg-emerald-950">
                    Quero o e-book <span aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                  <p className="text-xs text-stone-500">Compra segura pela Hotmart</p>
                </div>
              </Reveal>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
