import './Particle.css';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      className="particles"
      init={particlesInit}
      canvasClassName="canvas"
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: false,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          collisions: {
            enable: true,
          },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: true,
            speed: 1.5,
          },
          number: {
            value: 100,
            density: {
              enable: false,
            },
          },
          opacity: {
            value: 0.2,
          },

          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              speed: 1,
              size_min: 0.3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
