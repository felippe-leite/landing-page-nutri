import { assessments, services } from "@/data/site";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Services() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Atuação profissional" title="Protocolos e avaliações para diferentes objetivos." description="A abordagem funcional integrativa considera o momento, a rotina e as necessidades de cada paciente." />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-stone-200 p-5">
                <span className="text-emerald-700">✓</span>
                <p className="mt-3 leading-6 text-stone-700">{service}</p>
              </div>
            ))}
          </div>
          <div className="rounded-3xl bg-[#f4f0e8] p-8">
            <h3 className="text-2xl font-medium text-stone-900">Avaliações disponíveis</h3>
            <ul className="mt-6 space-y-3 text-stone-600">
              {assessments.map((assessment) => <li key={assessment}>• {assessment}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
