import { useState } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BootScreen from "./components/BootScreen";
import { useScrollSpy } from "./hooks/useScrollSpy";

function App() {
  const activeSection = useScrollSpy();
  const [bootDone, setBootDone] = useState(
    () => sessionStorage.getItem("booted") === "1"
  );

  if (!bootDone) {
    return (
      <BootScreen
        onDone={() => {
          setBootDone(true);
          sessionStorage.setItem("booted", "1");
        }}
      />
    );
  }

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
