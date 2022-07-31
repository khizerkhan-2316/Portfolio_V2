import './NotFound.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
const NotFound = () => {
  return (
    <section className="wrapper-404">
      <div className="not-found-content">
        <h1>404</h1>
        <p>The ressource was not found</p>
        <Button classname="custom-button-light">
          <Link to="/">Back to home</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
