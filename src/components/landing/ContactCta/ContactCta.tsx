import Image from "next/image";
import { getWhatsappLink, siteConfig } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { socialChannels } from "../SocialLinks/SocialLinks";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";

export function ContactCta() {
  return (
    <section id="contato" className="bg-[#f4f0e8] px-6 py-16 text-white sm:py-24 lg:px-12">
      <div className="relative mx-auto grid max-w-6xl items-center gap-2 overflow-hidden rounded-[2rem] bg-emerald-800 p-6 shadow-[0_24px_64px_-32px_rgba(6,78,59,0.4)] sm:rounded-[3rem] sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
        <div className="relative mx-auto w-full max-w-sm pb-5 lg:max-w-none">
          <div aria-hidden="true" className="absolute bottom-2 left-3 right-0 top-3 rounded-t-[999px] rounded-b-[2rem] bg-[#b8d3b5]/35" />
          <div className="relative mr-3 aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[2rem] bg-emerald-950 ring-1 ring-white/20">
            <Image src="/images/foto-principal.jpeg" alt={`${siteConfig.name} em seu consultório`} fill sizes="(min-width: 1280px) 410px, (min-width: 1024px) 35vw, (min-width: 480px) 372px, calc(100vw - 108px)" className="object-cover object-[45%_40%]" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/90 via-emerald-950/40 to-transparent px-6 pb-7 pt-24">
              <p className="font-serif text-2xl">Luana Leite de Souza</p>
              <p className="mt-1 text-xs tracking-wide text-white/85">Nutricionista · {siteConfig.registration}</p>
            </div>
          </div>
        </div>
        <Reveal className="relative flex min-w-0 flex-col items-start justify-center py-8 sm:py-10 lg:py-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Seu próximo passo</p>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">Vamos começar essa conversa?</h2>
          <p className="mt-5 max-w-lg leading-7 text-emerald-50/90">Entre em contato para conhecer o acompanhamento e encontrar o melhor formato para você.</p>
          <a href={getWhatsappLink()} data-track="whatsapp_click" data-track-origem="contato" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-13 items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-emerald-800 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-emerald-50"><WhatsappIcon /> Falar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          <ul className="mt-10 grid w-full max-w-xl gap-4 border-t border-white/15 pt-8 text-sm sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {socialChannels.map(({ id, label, handle, href, Icon, event }) => (
              <li key={id}>
                <a href={href} data-track={event} data-track-origem="contato-canais" data-track-detalhe={id} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-2xl p-2 -m-2 transition hover:bg-white/10">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition group-hover:bg-white group-hover:text-emerald-800">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] uppercase tracking-[0.18em] text-emerald-200">{label}</span>
                    <span className="block truncate">{handle}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs leading-6 text-emerald-100">Atendimento online e presencial em Brasília.</p>
        </Reveal>
      </div>
    </section>
  );
}
