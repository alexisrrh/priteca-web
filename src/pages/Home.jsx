import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Works } from "../components/Works";
import { Contact } from "../components/Contact";
import { WhatsAppButton } from "../components/WhatsAppButton";
import { BeforeAfter } from "../components/BeforeAfter";
import { CTA } from "../components/CTA";
export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <BeforeAfter />
      <CTA />
      <Contact />
      
      <WhatsAppButton />
    </>
  );
}