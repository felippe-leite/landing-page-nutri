export const siteConfig = {
  name: "Luana Leite de Souza",
  specialty: "Nutricionista Clínica Funcional Integrativa",
  whatsapp: "5561993178232",
  whatsappMessage: "Olá Nutri Luana Leite, eu gostaria de agendar uma consulta.",
  instagram: "@luana.leite.nutri",
  location: "Atendimento por convênio e particular",
};

export const benefits = [
  "Emagrecimento saudável e sustentável",
  "Ganho de massa muscular e hipertrofia",
  "Suplementação fitoterápica personalizada",
  "Equilíbrio entre corpo, mente e alimentação",
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
      "Entre em contato para confirmar as modalidades e os locais de atendimento disponíveis.",
  },
  {
    question: "Vou receber um plano alimentar engessado?",
    answer:
      "A abordagem considera suas necessidades individuais e busca um caminho saudável e duradouro para o corpo e a mente.",
  },
];

export function getWhatsappLink() {
  return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
}
