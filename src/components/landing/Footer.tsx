import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-stone-950 px-6 py-8 text-sm text-stone-400">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between lg:px-6">
        <p>© {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.</p>
        <div className="flex items-center gap-5">
          <a href={`https://instagram.com/${siteConfig.instagram.replace("@", "")}`} target="_blank" rel="noreferrer" className="transition hover:text-white">{siteConfig.instagram}</a>
          <a href="#inicio" className="transition hover:text-white">Voltar ao início ↑</a>
        </div>
      </div>
    </footer>
  );
}
