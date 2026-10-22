import Link from "next/link";
import { getWhatsappLink } from "@/data/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#f4f0e8] px-6 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Erro 404</p>
      <h1 className="mt-4 max-w-xl text-4xl leading-tight text-stone-900 sm:text-5xl">Esta página não foi encontrada.</h1>
      <p className="mt-5 max-w-md leading-7 text-stone-600">O endereço pode ter mudado ou não existe mais. Que tal voltar ao início ou falar direto com a Luana?</p>
      <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row">
        <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-emerald-800 px-7 text-sm font-medium text-white transition hover:bg-emerald-950">
          Voltar ao início
        </Link>
        <a href={getWhatsappLink()} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center text-sm font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 hover:decoration-emerald-800">
          Falar pelo WhatsApp ↗
        </a>
      </div>
    </main>
  );
}
