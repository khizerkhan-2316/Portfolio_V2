import './PersonalInformation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faHouse,
  faMobile,
} from '@fortawesome/free-solid-svg-icons';

const PersonalInformation = () => {
  return (
    <section className="personal-information-wrapper">
      <div className="personal-information-content">
        <FontAwesomeIcon icon={faHouse} />
        <p>Karensvej 5, 1.tv 8220 Brabrand </p>
      </div>
      <div className="personal-information-content">
        <FontAwesomeIcon icon={faEnvelope} />

        <p>Khizer759@gmail.com</p>
      </div>
      <div className="personal-information-content">
        <FontAwesomeIcon icon={faMobile} />

        <p>+45 91 78 03 89</p>
      </div>
    </section>
  );
};

export default PersonalInformation;
