import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Testimonials() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading eyebrow="Uma visão integral" title="Um acompanhamento pensado para seus objetivos." centered />
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-3">
          {["Emagrecimento", "Hipertrofia", "Saúde e bem-estar"].map((item) => (
            <div key={item} className="rounded-2xl bg-stone-50 p-8 text-center">
              <p className="text-lg font-medium text-stone-800">{item}</p>
              <p className="mt-3 text-sm leading-6 text-stone-600">Estratégias nutricionais personalizadas para a sua jornada.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
