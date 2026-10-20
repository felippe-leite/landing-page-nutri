import { siteConfig } from "@/data/site";

export function Header() {
  return (
    <header className="relative z-10 bg-[#f4f0e8]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:py-6 lg:px-12">
        <a href="#inicio" className="min-w-0 text-base font-semibold tracking-tight text-stone-900 sm:text-lg">
          {siteConfig.name}
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-8 text-sm text-stone-600 lg:flex">
          <a className="transition hover:text-emerald-700" href="#como-funciona">Como funciona</a>
          <a className="transition hover:text-emerald-700" href="#sobre">Sobre mim</a>
          <a className="transition hover:text-emerald-700" href="#contato">Contato</a>
        </nav>
        <a href="#contato" className="hidden min-h-11 shrink-0 items-center rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-800 sm:inline-flex">
          Agendar consulta
        </a>
        <details className="group shrink-0 lg:hidden">
          <summary aria-label="Menu de navegação" className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center rounded-full border border-emerald-800/20 text-emerald-800 [&::-webkit-details-marker]:hidden">
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path className="group-open:hidden" d="M4 6h16M4 12h16M4 18h16" />
              <path className="hidden group-open:block" d="m6 6 12 12M6 18 18 6" />
            </svg>
          </summary>
          <nav aria-label="Navegação para celular e tablet" className="absolute inset-x-6 top-full flex flex-col gap-1 rounded-2xl border border-stone-200 bg-white p-3 text-sm text-stone-700 shadow-lg">
            <a className="rounded-xl px-4 py-3 hover:bg-stone-50" href="#como-funciona">Como funciona</a>
            <a className="rounded-xl px-4 py-3 hover:bg-stone-50" href="#sobre">Sobre mim</a>
            <a className="rounded-xl px-4 py-3 hover:bg-stone-50" href="#contato">Contato</a>
            <a className="rounded-xl bg-emerald-700 px-4 py-3 text-center font-medium text-white hover:bg-emerald-800" href="#contato">Agendar consulta</a>
          </nav>
        </details>
      </div>
    </header>
  );
}
