import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { HowItWorks } from "@/components/HowItWorks";
import { ProductIntegrity } from "@/components/ProductIntegrity";
import { Packages } from "@/components/Packages";
import { WhyAI } from "@/components/WhyAI";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <HowItWorks />
        <ProductIntegrity />
        <WhyAI />
        <Packages />
        <About />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
