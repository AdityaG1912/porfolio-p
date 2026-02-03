import { AboutSection } from "@/components/About";
import { ContactSection } from "@/components/ContactSection";
import { ExperienceSection } from "@/components/Experience";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto">
      <Hero />
      <AboutSection />
      <Projects />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
