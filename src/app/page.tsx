import { About } from "@/components/landing/About";
import { Benefits } from "@/components/landing/Benefits";
import { ContactCta } from "@/components/landing/ContactCta";
import { Faq } from "@/components/landing/Faq";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <Header />
      <Hero />
      <Benefits />
      <HowItWorks />
      <About />
      <Testimonials />
      <Faq />
      <ContactCta />
      <Footer />
    </main>
  );
}
