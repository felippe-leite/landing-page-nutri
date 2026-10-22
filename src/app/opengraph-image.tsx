import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { MARK_PATHS, MARK_VIEWBOX } from "@/components/brand/Logo";
import { siteConfig } from "@/data/site";

export const alt = `${siteConfig.name} — ${siteConfig.specialty}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Baixa a fonte do Google Fonts no build; se falhar, usa a fonte padrão.
async function loadGoogleFont(family: string, text: string) {
  try {
    const css = await (
      await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url)).arrayBuffer();
  } catch {
    return null;
  }
}

export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "public/images/foto-principal.jpeg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;
  const headline = "Uma alimentação possível para uma vida mais leve.";
  const tagline = "Nutrição clínica funcional integrativa";
  const subtitle = `Nutrição Clínica e Funcional · ${siteConfig.registration}`;
  const [fraunces, hurricane, manrope] = await Promise.all([
    loadGoogleFont("Fraunces:wght@400", headline),
    loadGoogleFont("Hurricane", "Luana Leite"),
    loadGoogleFont("Manrope:wght@500", `${tagline.toUpperCase()}${subtitle}`),
  ]);
  const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}" fill="none" stroke="#3f5a3c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">${MARK_PATHS.map((d) => `<path d="${d}"/>`).join("")}</svg>`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", background: "#f4f0e8", fontFamily: manrope ? "Manrope" : undefined }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 720, padding: "64px 56px 56px 72px" }}>
          <div style={{ display: "flex", fontSize: 20, letterSpacing: 4, color: "#065f46", textTransform: "uppercase" }}>
            {tagline}
          </div>
          <div style={{ display: "flex", fontFamily: fraunces ? "Fraunces" : undefined, fontSize: 64, lineHeight: 1.08, color: "#1c1917" }}>
            {headline}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={`data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`} width={66} height={66} alt="" />
            <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
              <div style={{ fontFamily: hurricane ? "Hurricane" : undefined, fontSize: 64, lineHeight: 0.9, color: "#022c22" }}>Luana Leite</div>
              <div style={{ marginTop: 8, fontSize: 21, color: "#57534e" }}>
                {subtitle}
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", width: 480, height: "100%", background: "#064e3b" }}>
          <img src={photoSrc} alt="" width={480} height={630} style={{ objectFit: "cover", objectPosition: "45% 35%" }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        ...(manrope ? [{ name: "Manrope", data: manrope, weight: 500 as const, style: "normal" as const }] : []),
        ...(fraunces ? [{ name: "Fraunces", data: fraunces, weight: 400 as const, style: "normal" as const }] : []),
        ...(hurricane ? [{ name: "Hurricane", data: hurricane, weight: 400 as const, style: "normal" as const }] : []),
      ],
    },
  );
}
