import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Leadership } from "@/components/leadership";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact, Footer } from "@/components/contact";
import { Chatbot } from "@/components/chatbot";
import { ConstructionNotice } from "@/components/construction-notice";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-foreground selection:text-background">
      <ConstructionNotice />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Leadership />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
