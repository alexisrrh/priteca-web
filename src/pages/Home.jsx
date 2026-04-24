import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Products } from "../components/Products";
import { Projects } from "../components/Projects";
import { Catalogs } from "../components/Catalogs";
import { Contact } from "../components/Contact";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <Projects />
      <Catalogs />
      <Contact />
      <WhatsAppButton />
    </>
  );
}