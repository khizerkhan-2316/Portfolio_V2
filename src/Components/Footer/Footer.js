import './Footer.css';
import IconButton from '../IconButton/IconButton';
import {
  faGithub,
  faFacebook,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer-icons-container">
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
      <div className="coyright-container">
        <p>&copy; Copyright {new Date().getFullYear()} - Khizer Khan</p>
      </div>
    </footer>
  );
};

export default Footer;
