import { SectionHeading } from "./SectionHeading";

const steps = [
  ["01", "Acolher", "Entender sua rotina, seus objetivos e o que você realmente precisa neste momento."],
  ["02", "Planejar", "Construir estratégias e um plano alimentar que façam sentido para a sua vida."],
  ["03", "Acompanhar", "Ajustar o caminho com proximidade, clareza e acompanhamento contínuo."],
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-stone-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Como funciona" title="Um processo simples, próximo e feito para você." description="O acompanhamento acontece em parceria, sem cobranças irreais e sem soluções genéricas." />
        <div className="mt-14 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-3">
          {steps.map(([number, title, description]) => (
            <div key={number}>
              <span className="text-sm text-emerald-300">{number}</span>
              <h3 className="mt-6 text-2xl font-medium">{title}</h3>
              <p className="mt-4 leading-7 text-stone-300">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
