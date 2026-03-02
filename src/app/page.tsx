import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Education } from "@/components/education";
import { Contact, Footer } from "@/components/contact";
import { Chatbot } from "@/components/chatbot";
import { ConstructionNotice } from "@/components/construction-notice";
import { Achievements } from "@/components/achievements";
import { Leadership } from "@/components/leadership";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#bc13fe] selection:text-white">
      <ConstructionNotice />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Leadership />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
