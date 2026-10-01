import { getWhatsappLink, siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-[#f4f0e8] pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:pb-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">{siteConfig.specialty}</p>
          <h1 className="mt-6 max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight text-stone-900 sm:text-6xl">
            Uma alimentação possível para uma vida mais leve.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-stone-600">
            Transforme sua saúde de forma integral e sustentável com um acompanhamento nutricional personalizado.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={getWhatsappLink()} target="_blank" rel="noreferrer" className="inline-flex justify-center rounded-full bg-emerald-700 px-6 py-3.5 font-medium text-white transition hover:bg-emerald-800">
              Quero agendar uma consulta
            </a>
            <a href="#como-funciona" className="inline-flex justify-center px-6 py-3.5 font-medium text-stone-700 transition hover:text-emerald-700">
              Conhecer o acompanhamento
            </a>
          </div>
          <p className="mt-5 text-sm text-stone-500">{siteConfig.location}</p>
        </div>
        <div className="relative mx-auto flex aspect-[4/5] w-full max-w-md items-end overflow-hidden rounded-[2rem] bg-emerald-900 p-8 text-white shadow-xl">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-700/60" />
          <div className="absolute bottom-20 right-12 h-32 w-32 rounded-full border border-emerald-300/40" />
          <div className="relative">
            <span className="mb-4 block text-5xl text-emerald-200">“</span>
            <p className="max-w-xs text-2xl leading-tight">Nutrição sem culpa, com estratégia e acolhimento.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
