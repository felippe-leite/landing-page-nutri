import { ImageResponse } from "next/og";
import { MARK_PATHS, MARK_VIEWBOX } from "@/components/brand/Logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${MARK_VIEWBOX}" fill="none" stroke="#2f4a33" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${MARK_PATHS.map((d) => `<path d="${d}"/>`).join("")}</svg>`;

  return new ImageResponse(
    (
      <div style={{ display: "flex", width: "100%", height: "100%", alignItems: "center", justifyContent: "center", background: "#f4f0e8" }}>
        <img src={`data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`} width={124} height={124} alt="" />
      </div>
    ),
    size,
  );
}
