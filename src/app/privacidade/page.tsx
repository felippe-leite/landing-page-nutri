import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsappLink, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Política de privacidade | ${siteConfig.name}`,
  description: `Como ${siteConfig.name} trata os dados de quem visita o site e entra em contato para atendimento.`,
  alternates: { canonical: "/privacidade" },
};

const sections = [
  {
    title: "Quem é responsável pelos seus dados",
    body: [
      `${siteConfig.name}, ${siteConfig.specialty} (${siteConfig.registration}), é a responsável pelo tratamento dos dados pessoais de quem visita este site e entra em contato para atendimento, nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).`,
    ],
  },
  {
    title: "Quais dados são coletados",
    body: [
      "Este site não possui formulários e não pede cadastro. Os dados chegam apenas quando você decide entrar em contato, por exemplo pelo WhatsApp: nome, número de telefone e as informações que você escolher enviar na conversa.",
      "Para entender como o site é usado, coletamos estatísticas de acesso de forma agregada e anônima (como páginas visitadas, tipo de dispositivo e cliques nos botões de contato), por meio do Vercel Web Analytics, que não utiliza cookies e não identifica você individualmente.",
    ],
  },
  {
    title: "Dados de saúde",
    body: [
      "Durante o atendimento nutricional, você pode compartilhar informações sobre sua saúde, como exames, medidas corporais e histórico clínico. Esses são dados pessoais sensíveis e são usados exclusivamente para a prestação do atendimento, com sigilo profissional conforme o Código de Ética e de Conduta do Nutricionista.",
    ],
  },
  {
    title: "Para que usamos seus dados",
    body: [
      "Para responder ao seu contato, agendar e realizar consultas, acompanhar sua evolução, cumprir obrigações legais e profissionais e melhorar o site. Seus dados não são vendidos nem usados para outras finalidades sem o seu consentimento.",
    ],
  },
  {
    title: "Serviços de terceiros",
    body: [
      "O site é hospedado pela Vercel. Os botões de contato abrem o WhatsApp (Meta), e os links de e-books levam à Hotmart. Também há links para Instagram e YouTube. Ao usar esses serviços, valem as políticas de privacidade de cada um deles.",
    ],
  },
  {
    title: "Seus direitos",
    body: [
      "Você pode, a qualquer momento, pedir a confirmação e o acesso aos seus dados, a correção de informações, a exclusão de dados desnecessários, a portabilidade e a revogação do consentimento, além de obter informações sobre com quem seus dados são compartilhados (art. 18 da LGPD). Dados ligados ao atendimento podem ser mantidos pelo período exigido pelas normas profissionais.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-[#f4f0e8]">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-5">
          <Link href="/" className="font-serif text-xl text-emerald-950">{siteConfig.name}</Link>
          <Link href="/" className="text-sm text-stone-600 transition hover:text-emerald-800">← Voltar ao site</Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">Privacidade</p>
        <h1 className="mt-4 text-4xl leading-tight tracking-tight sm:text-5xl">Política de privacidade</h1>
        <p className="mt-4 text-sm text-stone-500">Última atualização: 22 de outubro de 2026</p>
        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-2xl text-emerald-950">{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-7 text-stone-700">{paragraph}</p>
              ))}
            </section>
          ))}
          <section>
            <h2 className="font-serif text-2xl text-emerald-950">Como falar sobre seus dados</h2>
            <p className="mt-3 leading-7 text-stone-700">
              Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo{" "}
              <a href={getWhatsappLink("Olá Nutri Luana Leite, tenho uma dúvida sobre meus dados pessoais.")} target="_blank" rel="noreferrer" className="font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 hover:decoration-emerald-800">
                WhatsApp {siteConfig.whatsappDisplay}
              </a>
              .
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
