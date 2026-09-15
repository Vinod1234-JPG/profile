import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Timeline } from "@/components/sections/Timeline";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col flex-grow">
        {/* Each wrapper div gets scroll-snap alignment */}
        <div className="snap-section">
          <Hero />
        </div>
        <div className="snap-section">
          <About />
        </div>
        <div className="snap-section">
          <Skills />
        </div>
        <div className="snap-section">
          <Timeline />
        </div>
        <div className="snap-section">
          <Projects />
        </div>
        <div className="snap-section">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
