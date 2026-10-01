import { getWhatsappLink } from "@/data/site";

export function ContactCta() {
  return (
    <section id="contato" className="bg-emerald-800 py-20 text-center text-white sm:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">Seu próximo passo</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Vamos começar essa conversa?</h2>
        <p className="mx-auto mt-5 max-w-lg leading-7 text-emerald-50/80">Entre em contato para conhecer o acompanhamento e encontrar o melhor formato para você.</p>
        <a href={getWhatsappLink()} target="_blank" rel="noreferrer" className="mt-8 inline-flex rounded-full bg-white px-6 py-3.5 font-medium text-emerald-800 transition hover:bg-emerald-50">Falar pelo WhatsApp</a>
      </div>
    </section>
  );
}
