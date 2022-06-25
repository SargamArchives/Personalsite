import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ParticleBackground from "./components/Particles";
import Projects from "./components/Projects";
import Techs from "./components/Techs";

function App() {
  return (
    <div className="mx-auto">
      <Nav />
      <ParticleBackground />
      <Hero />
      <div className="divider"></div>
      <AboutMe />
      <div className="divider"></div>
      <Techs />
      <div className="divider"></div>
      <Projects />
      <div className="divider"></div>
    </div>
  );
}

export default App;
