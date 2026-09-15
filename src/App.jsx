import ChatBot from "./components/ChatBot";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Skills from "./components/Skills";
import About from "./components/About";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-200">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(16,185,129,0.08),_transparent_24%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}
