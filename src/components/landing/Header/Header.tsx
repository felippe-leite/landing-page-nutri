import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-12">
        <a href="#inicio" className="text-lg font-semibold tracking-tight text-stone-900">
          {siteConfig.name}
        </a>
        <nav className="hidden items-center gap-8 text-sm text-stone-600 md:flex">
          <a className="transition hover:text-emerald-700" href="#como-funciona">Como funciona</a>
          <a className="transition hover:text-emerald-700" href="#sobre">Sobre mim</a>
          <a className="transition hover:text-emerald-700" href="#contato">Contato</a>
        </nav>
        <a href="#contato" className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800">
          Agendar consulta
        </a>
      </div>
    </header>
  );
}
