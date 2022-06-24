import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import ParticleBackground from "./components/Particles";

function App() {
  return (
    <div className="mx-auto">
      <Nav />
      <ParticleBackground />
      <Hero />
      <div class="divider"></div>
      <AboutMe />
      <div class="divider"></div>
    </div>
  );
}

export default App;
