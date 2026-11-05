import Image from "next/image";
import { getInstagramLink, siteConfig, testimonials } from "@/data/site";
import { InstagramIcon } from "../SocialLinks/SocialIcons";
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
        <Reveal className="mt-10 flex flex-col items-center gap-5 rounded-3xl bg-[#f4f0e8] px-6 py-8 text-center sm:px-10">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-800">
            <InstagramIcon className="h-6 w-6" />
          </span>
          <div>
            <h3 className="font-serif text-2xl text-emerald-950">Acompanhe também pelo Instagram.</h3>
            <p className="mt-2 max-w-xl text-sm leading-7 text-stone-600">Visite o perfil da Luana e confira os depoimentos e conteúdos sobre emagrecimento e acompanhamento nutricional que ela compartilha por lá.</p>
          </div>
          <a href={getInstagramLink()} data-track="social_click" data-track-origem="depoimentos" data-track-detalhe="instagram" target="_blank" rel="noreferrer" className="inline-flex min-h-12 max-w-full items-center justify-center gap-3 rounded-full bg-emerald-800 px-6 py-3 text-sm font-medium text-white transition hover:bg-emerald-950">
            <span>Ver {siteConfig.instagram}</span><span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
