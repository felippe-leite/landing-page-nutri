import Image from "next/image";
import { testimonials } from "@/data/site";
import { Reveal } from "../Reveal/Reveal";
import { SectionHeading } from "../SectionHeading/SectionHeading";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading
          eyebrow="Depoimentos"
          title="O cuidado na voz de quem viveu."
          description="Conheça a experiência de pacientes que fizeram o acompanhamento com a Luana."
          centered
        />
        <div className="mt-12 grid items-start gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 90}>
              <figure className="rounded-[2rem] border border-stone-200 bg-[#faf9f6] p-7 sm:p-8">
                <figcaption className="flex items-center gap-4">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full bg-[#dce3d0] ring-4 ring-white shadow-sm">
                    <Image
                      src={testimonial.image}
                      alt={`Foto de ${testimonial.name}`}
                      width={testimonial.width}
                      height={testimonial.height}
                      sizes="120px"
                      className="absolute max-w-none"
                      style={{
                        width: `${(testimonial.width / testimonial.crop.size) * 100}%`,
                        height: "auto",
                        left: `${(-testimonial.crop.x / testimonial.crop.size) * 100}%`,
                        top: `${(-testimonial.crop.y / testimonial.crop.size) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="font-serif text-2xl text-emerald-950">{testimonial.name}</p>
                </figcaption>
                <span aria-hidden="true" className="mt-6 block h-8 font-serif text-6xl leading-none text-emerald-700/30">“</span>
                <blockquote className="mt-3 text-sm leading-7 text-stone-600">
                  <p>{testimonial.quote}</p>
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
