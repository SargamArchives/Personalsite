import particleConfig from "../particle.config.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles id="tsparticles" options={particleConfig} init={particlesInit} />
  );
};
export default ParticleBackground;
