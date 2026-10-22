import { getInstagramLink, getWhatsappLink, siteConfig } from "@/data/site";
import { WhatsappIcon } from "../WhatsappIcon/WhatsappIcon";
import { InstagramIcon, YoutubeIcon } from "./SocialIcons";

export const socialChannels = [
  { id: "whatsapp", label: "WhatsApp", handle: siteConfig.whatsappDisplay, href: getWhatsappLink(), Icon: WhatsappIcon, event: "whatsapp_click" },
  { id: "instagram", label: "Instagram", handle: siteConfig.instagram, href: getInstagramLink(), Icon: InstagramIcon, event: "social_click" },
  { id: "youtube", label: "YouTube", handle: siteConfig.youtube.name, href: siteConfig.youtube.url, Icon: YoutubeIcon, event: "social_click" },
];

type SocialLinksProps = {
  origem: string;
  tone?: "light" | "dark";
  className?: string;
};

// Fileira de botões redondos com os ícones das redes.
export function SocialLinks({ origem, tone = "dark", className = "" }: SocialLinksProps) {
  const styles =
    tone === "dark"
      ? "border-white/15 text-stone-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
      : "border-emerald-900/15 text-emerald-900 hover:border-emerald-800 hover:bg-emerald-800 hover:text-white";

  return (
    <ul className={`flex items-center gap-2 ${className}`}>
      {socialChannels.map(({ id, label, href, Icon, event }) => (
        <li key={id}>
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            title={label}
            data-track={event}
            data-track-origem={origem}
            data-track-detalhe={id}
            className={`flex h-11 w-11 items-center justify-center rounded-full border transition duration-200 hover:-translate-y-0.5 ${styles}`}
          >
            <Icon className="h-5 w-5" />
          </a>
        </li>
      ))}
    </ul>
  );
}
