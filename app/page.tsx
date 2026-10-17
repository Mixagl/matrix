import Contacts from "@/components/sections/Contacts";
import Equipment from "@/components/sections/Equipment";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Promo from "@/components/sections/Promo";
import Zones from "@/components/sections/Zones";
import Reveal from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <div id="#top" />
      <Hero />

      <Reveal delay={0.2}>
        <Zones />
      </Reveal>

      <Reveal delay={0.2}>
        <Pricing />
      </Reveal>

      <Reveal delay={0.2}>
        <Equipment />
      </Reveal>

      <Reveal delay={0.2}>
        <Promo />
      </Reveal>

      <Reveal delay={0.2}>
        <Contacts />
      </Reveal>
    </>
  );
}
