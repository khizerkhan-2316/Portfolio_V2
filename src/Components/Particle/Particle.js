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
            resize: true,
          },
          modes: {
            push: {
              quantity: 10,
            },
            repulse: {
              distance: 150,
              duration: 10,
            },
          },
        },
        particles: {
          color: {
            value: '#4BFFA5',
          },
          links: {
            color: '#4BFFA5',
            distance: 0,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'top',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 0.7,
            straight: false,
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
          shape: {
            type: 'circle',
          },
          size: {
            value: 3,
            random: true,
            anim: {
              speed: 4,
              size_min: 1,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Particle;
