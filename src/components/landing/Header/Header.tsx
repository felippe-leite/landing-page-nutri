"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getWhatsappLink, navLinks, siteConfig } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.href))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`sticky top-0 z-30 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled || menuOpen ? "bg-[#f4f0e8]/90 shadow-[0_1px_0_rgba(6,78,59,0.08),0_8px_24px_-16px_rgba(6,78,59,0.35)] backdrop-blur-md" : "bg-[#f4f0e8]"
      }`}
    >
      <div className={`relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 transition-[padding] duration-300 lg:px-12 ${scrolled ? "py-1" : "py-4"}`}>
        <a href="#inicio" onClick={closeMenu} aria-label={`${siteConfig.name} — início`} className="brand-logo relative block h-[64px] w-[170px] shrink-0 overflow-hidden sm:w-[190px]">
          <Image src="/assets/site-antigo/fc5abf076af75e7d75287ea6f7cb7429.jpg" alt={siteConfig.name} width={400} height={225} priority className="absolute left-1/2 top-1/2 w-[350px] max-w-none -translate-x-1/2 -translate-y-1/2 mix-blend-multiply sm:w-[380px]" />
        </a>
        <nav aria-label="Navegação principal" className="hidden items-center gap-7 text-sm text-stone-600 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={active === link.href ? "true" : undefined}
              className="relative py-2 transition hover:text-emerald-800 aria-[current]:text-emerald-900 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-emerald-700 after:transition-transform after:duration-300 hover:after:scale-x-100 aria-[current]:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={getWhatsappLink()} target="_blank" rel="noreferrer" className="hidden min-h-11 shrink-0 items-center rounded-full bg-emerald-800 px-5 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-emerald-950 sm:inline-flex">
            Agendar consulta
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-emerald-800/20 text-emerald-800 lg:hidden"
          >
            <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path className={`origin-center transition-transform duration-300 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`} d="M4 6h16" />
              <path className={`transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} d="M4 12h16" />
              <path className={`origin-center transition-transform duration-300 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`} d="M4 18h16" />
            </svg>
          </button>
        </div>
        <nav
          id="menu-mobile"
          aria-label="Navegação para celular e tablet"
          className={`absolute inset-x-4 top-full mt-2 flex origin-top flex-col gap-1 rounded-2xl border border-stone-200 bg-white p-3 text-sm text-stone-700 shadow-xl transition duration-200 lg:hidden ${
            menuOpen ? "visible scale-100 opacity-100" : "invisible scale-95 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <a key={link.href} onClick={closeMenu} className="rounded-xl px-4 py-3 hover:bg-stone-50 aria-[current]:bg-emerald-50 aria-[current]:text-emerald-900" aria-current={active === link.href ? "true" : undefined} href={link.href}>
              {link.label}
            </a>
          ))}
          <a onClick={closeMenu} className="mt-1 rounded-xl bg-emerald-800 px-4 py-3 text-center font-medium text-white hover:bg-emerald-950" href={getWhatsappLink()} target="_blank" rel="noreferrer">
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
