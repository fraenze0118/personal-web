import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useScrollSpy } from "./hooks/useScrollSpy";

function App() {
  const activeSection = useScrollSpy();

  return (
    <>
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
