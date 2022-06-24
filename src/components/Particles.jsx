// import Particles from "react-tsparticles";
// import { loadFull } from "react-tsparticles";
import particleConfig from "../particle.config.js";

// const ParticlesBackground = () => {
//   const particlesInit = async (main) => {
//     console.log(main);
//     await loadFull(tsParticles);
//   };

//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   return (
//     <Particles
//       id="tsparticles"
//       options={particleConfig}
//       init={particlesInit}
//       loaded={particlesLoaded}
//     />
//   );
// };

// export default ParticlesBackground;
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    console.log("checking ");
    console.log(main);

    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      options={particleConfig}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
export default ParticleBackground;
