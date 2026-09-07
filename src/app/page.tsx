import { MotionRoot } from "@/components/motion-root";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Capabilities } from "@/components/sections/Capabilities";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Testimonials } from "@/components/sections/Testimonials";
import { DragIndicator } from "@/components/sections/DragIndicator";
import { Footer } from "@/components/sections/Footer";
import { Preloader } from "@/components/sections/Preloader";

export default function Home() {
  return (
    <MotionRoot>
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <div className="capa-overview-wrap" />
      <Preloader />
      <Navigation />
      <main className="main-wrap">
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Services />
        <Contact />
        <Testimonials />
        <DragIndicator />
      </main>
      <Footer />
    </MotionRoot>
  );
}
