"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

// Envia um evento para cada clique em links marcados com data-track.
// Ex.: <a data-track="whatsapp_click" data-track-origem="hero">
export function ClickTracker() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!link) return;
      const { track: name, trackOrigem: origem, trackDetalhe: detalhe } = link.dataset;
      if (!name) return;
      track(name, { origem: origem ?? "desconhecida", ...(detalhe ? { detalhe } : {}) });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
