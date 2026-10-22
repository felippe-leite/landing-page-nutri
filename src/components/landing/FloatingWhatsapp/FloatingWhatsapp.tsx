"use client";

import { useEffect, useState } from "react";
import { getWhatsappLink } from "@/data/site";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";

export function FloatingWhatsapp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={getWhatsappLink()}
      data-track="whatsapp_click"
      data-track-origem="botao-flutuante"
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar consulta pelo WhatsApp"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-5 right-5 z-40 flex h-14 items-center gap-3 rounded-full bg-[#25d366] pl-4 pr-4 text-white shadow-[0_10px_30px_-8px_rgba(6,78,59,0.55)] transition-all duration-300 hover:bg-[#1ebe5b] sm:bottom-8 sm:right-8 sm:pr-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span className="absolute inset-0 -z-1 animate-ping rounded-full bg-[#25d366]/40 [animation-duration:2.5s]" aria-hidden="true" />
      <WhatsappIcon className="h-6 w-6" />
      <span className="hidden text-sm font-semibold sm:inline">Agendar consulta</span>
    </a>
  );
}
