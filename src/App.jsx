import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ParticleBackground from "./components/Particles";
// import Projects from "./components/Projects";

function App() {
  return (
    <div className="mx-auto">
      <Nav />
      <ParticleBackground />
      <Hero />
      <div className="divider"></div>
      <AboutMe />
      <div className="divider"></div>
      {/* <Projects /> */}
    </div>
  );
}

export default App;
