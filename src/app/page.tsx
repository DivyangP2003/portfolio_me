import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Projects from "@/components/Projects";
import ThesisShowcase from "@/components/ThesisShowcase";
import Skills from "@/components/Skills";
import Resumes from "@/components/Resumes";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <ThesisShowcase />
      <Skills />
      <Resumes />
      <Contact />
      <Footer />
    </main>
  );
}
