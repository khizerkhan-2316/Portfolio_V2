import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './IconButton.css';
const IconButton = (props) => {
  return (
    <a
      className="icon"
      href={props.link}
      target="{{external ? '_blank' : '_self'}}"
    >
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

export default IconButton;
