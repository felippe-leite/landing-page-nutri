import { About } from "@/components/landing/About/About";
import { Benefits } from "@/components/landing/Benefits/Benefits";
import { ContactCta } from "@/components/landing/ContactCta/ContactCta";
import { Faq } from "@/components/landing/Faq/Faq";
import { Footer } from "@/components/landing/Footer/Footer";
import { Header } from "@/components/landing/Header/Header";
import { Hero } from "@/components/landing/Hero/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks/HowItWorks";
import { Ebooks } from "@/components/landing/Ebooks/Ebooks";
import { Pricing } from "@/components/landing/Pricing/Pricing";
import { Services } from "@/components/landing/Services/Services";
import { Testimonials } from "@/components/landing/Testimonials/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <Services />
      <Pricing />
      <About />
      <Testimonials />
      <Ebooks />
      <Faq />
      <ContactCta />
      <Footer />
    </main>
  );
}
