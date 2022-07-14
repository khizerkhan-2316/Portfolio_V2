import './HeroSection.css';
import Button from '../../Components/Button/Button';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-items-container">
          <h1>Hi, I am Khizer Khan.</h1>
          <p>Computer Science (AP) student at Business Academy Aarhus</p>{' '}
          <a
            rel="noreferrer"
            href="https://khizerkhan.netlify.app/CV.pdf"
            target="_blank"
            className="custom-link-light"
            download
          >
            <Button classname={'custom-button-light'}>Download Resume</Button>
          </a>
        </div>

        <div className="hero-items-container">
          <a href="#about" className="transition-link-light">
            <div class="mouse"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
