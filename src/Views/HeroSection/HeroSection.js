import './HeroSection.css';
import Button from '../../Components/Button/Button';
import IconButton from '../../Components/IconButton/IconButton';
import heroImage from '../../Assets/Images/khizer-fixed.png';
//import Typewriter from 'typewriter-effect';
//import sentences from '../../Helpers/sentences';
import Particle from '../../Components/Particle/Particle';

import {
  faGithub,
  faFacebook,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <Particle />

      <div className="hero-text-container">
        <div className="hero-information-wrapper">
          <h1>Hi, I am Khizer Khan.</h1>
          <p>Computer Science(AP) student at Business Academy Aarhus</p>
          <a
            rel="noreferrer"
            href="https://khizerkhan.netlify.app/Assets/Files/CV.pdf"
            target="_blank"
            className="custom-link-light"
            download
          >
            <Button classname={'custom-button-light'}>Download CV</Button>
          </a>
          <div className="hero-icons-container">
            <IconButton
              icon={faLinkedinIn}
              link={'https://www.linkedin.com/in/khizerkhan21/?locale=en_US'}
              external={true}
            />
            <IconButton
              icon={faFacebook}
              link={'https://www.facebook.com/khizer.khan.16/'}
              external={true}
            />
            <IconButton
              icon={faGithub}
              link={'https://github.com/khizerkhan-2316'}
              external={true}
            />
          </div>
        </div>
      </div>
      <div className="hero-image-container">
        <img src={heroImage} alt="hero" />
      </div>
      <div className="scroll-down-icon-container">
        <a href="#about" className="transition-link-light">
          <div className="mouse"></div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
