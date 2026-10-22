import Image from "next/image";
import { getWhatsappLink, siteConfig } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { socialChannels } from "../SocialLinks/SocialLinks";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";

export function ContactCta() {
  return (
    <section id="contato" className="bg-emerald-800 text-white">
      <div className="mx-auto grid max-w-6xl items-stretch lg:grid-cols-[0.85fr_1.15fr]">
        <div className="relative min-h-80 sm:min-h-96 lg:min-h-[520px]">
          <Image src="/images/foto-principal.jpeg" alt={`${siteConfig.name} em seu consultório`} fill sizes="(min-width: 1024px) 490px, 100vw" className="object-cover object-[45%_40%]" />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-emerald-950/85 to-transparent px-6 pb-6 pt-20 sm:px-10">
            <p className="font-serif text-2xl">Luana Leite de Souza</p>
            <p className="mt-1 text-xs tracking-wide text-white/85">Nutricionista · {siteConfig.registration}</p>
          </div>
        </div>
        <Reveal className="flex flex-col items-start justify-center px-6 py-14 sm:px-12 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-200">Seu próximo passo</p>
          <h2 className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">Vamos começar essa conversa?</h2>
          <p className="mt-5 max-w-lg leading-7 text-emerald-50/90">Entre em contato para conhecer o acompanhamento e encontrar o melhor formato para você.</p>
          <a href={getWhatsappLink()} data-track="whatsapp_click" data-track-origem="contato" target="_blank" rel="noreferrer" className="mt-8 inline-flex min-h-13 items-center gap-3 rounded-full bg-white px-7 py-4 font-medium text-emerald-800 shadow-[0_14px_30px_-14px_rgba(0,0,0,0.5)] transition hover:-translate-y-0.5 hover:bg-emerald-50"><WhatsappIcon /> Falar pelo WhatsApp <span aria-hidden="true">↗</span></a>
          <ul className="mt-10 grid w-full max-w-xl gap-3 border-t border-white/15 pt-8 text-sm sm:grid-cols-3">
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
