import Link from "next/link";
import { navLinks, siteConfig } from "@/data/site";
import { SocialLinks, socialChannels } from "../SocialLinks/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-stone-950 px-6 pb-8 pt-14 text-sm text-stone-400">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-6">
        <div>
          <p className="font-serif text-2xl text-white">{siteConfig.name}</p>
          <p className="mt-2">{siteConfig.specialty} · <span className="whitespace-nowrap">{siteConfig.registration}</span></p>
          <p className="mt-1">{siteConfig.location}</p>
          <SocialLinks origem="footer" className="mt-6" />
        </div>
        <nav aria-label="Rodapé">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Navegação</p>
          <ul className="mt-3 grid gap-1">
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href} className="inline-flex min-h-9 items-center transition hover:text-white">{link.label}</a></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">Contato</p>
          <ul className="mt-3 grid gap-1">
            {socialChannels.map(({ id, handle, href, Icon, event }) => (
              <li key={id}>
                <a href={href} data-track={event} data-track-origem="footer-lista" data-track-detalhe={id} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-3 transition hover:text-white">
                  <Icon className="h-4 w-4 shrink-0" /> {handle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-6 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        <p className="max-w-xl">
          As informações deste site não substituem uma consulta individual.{" "}
          <Link href="/privacidade" className="underline decoration-stone-600 underline-offset-4 transition hover:text-white">Política de privacidade</Link>
        </p>
        <a href="#inicio" className="inline-flex min-h-11 items-center transition hover:text-white">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}
