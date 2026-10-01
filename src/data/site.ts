export const siteConfig = {
  name: "Luana Leite de Souza",
  specialty: "Nutricionista Clínica Funcional Integrativa",
  registration: "CRN-15793",
  whatsapp: "5561993178232",
  whatsappMessage: "Olá Nutri Luana Leite, eu gostaria de agendar uma consulta.",
  instagram: "@luana.leite.nutri",
  location: "Brasília — atendimento online e presencial",
};

export const benefits = [
  "Emagrecimento saudável e sustentável",
  "Ganho de massa muscular e hipertrofia",
  "Suplementação fitoterápica personalizada",
  "Equilíbrio entre corpo, mente e alimentação",
];

export const services = [
  "Protocolo nutricional para emagrecimento",
  "Protocolos para endometriose, ovário policístico e inflamação sistêmica",
  "Protocolo para gestantes, suplementação e regulação do peso",
  "Ganho de massa na terceira idade e longevidade",
  "Nutrição para atletas e praticantes de atividade física",
  "Cutting, bulking e hipertrofia",
  "Protocolos clínicos para doenças metabólicas",
];

export const assessments = [
  "Bioimpedância",
  "Antropometria",
  "Peso e altura",
  "Simetria corporal",
  "Avaliação de exames solicitados",
  "Avaliação de risco nutricional",
];

export const consultations = [
  {
    title: "Consulta online",
    price: "R$ 130",
    description: "Acompanhamento online com avaliação por fotos.",
  },
  {
    title: "Consulta presencial",
    price: "R$ 250",
    description: "Atendimento em Brasília com avaliação física e antropometria.",
  },
];

export const ebooks = [
  {
    title: "A rotina alimentar que te faz emagrecer",
    description: "Um guia com orientações para estruturar a rotina alimentar, melhorar a hidratação, fazer escolhas inteligentes e emagrecer com mais equilíbrio.",
  },
];

export const faqs = [
  {
    question: "Como funciona a primeira consulta?",
    answer:
      "Conversamos sobre sua rotina, seus objetivos e necessidades para construir uma estratégia nutricional personalizada.",
  },
  {
    question: "O atendimento pode ser online?",
    answer:
      "Sim. Luana atende online e presencialmente em Brasília.",
  },
  {
    question: "Vou receber um plano alimentar engessado?",
    answer:
      "A consulta online custa R$ 130 e inclui avaliação por fotos. A consulta presencial custa R$ 250 e inclui avaliação física e antropometria.",
  },
];

export function getWhatsappLink() {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}
