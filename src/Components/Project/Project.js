import './Project.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Project = (props) => {
  const {
    image,
    title,
    type,
    purpose,
    compatibility,
    url,
    sourcecode_server,
    tags,
    id,
    sourcecode_client,
    sourcecode,
  } = props.project;

  return (
    <section className="project">
      <Link key={id} to={`/${title}`}>
        <div className="click-tag">Read more</div>
        <img src={image} alt={title} />
      </Link>

      <h2>{title}</h2>
      <p className="project-type">{type}</p>
      <p className="project-purpose">{purpose}</p>
      <p>{compatibility}</p>
      {url ? (
        <a href={url} target="_blank" rel="noreferrer">
          <Button classname="custom-button-light">Live website</Button>
        </a>
      ) : (
        ''
      )}

      {sourcecode_client ? (
        <a href={sourcecode_client} target="_blank" rel="noreferrer">
          <Button classname="custom-button-light">Sourcecode client</Button>
        </a>
      ) : (
        ''
      )}

      {sourcecode_server ? (
        <a href={sourcecode_server} target="_blank" rel="noreferrer">
          <Button classname="custom-button-light">Sourcecode server</Button>
        </a>
      ) : (
        ''
      )}

      {sourcecode ? (
        <a href={sourcecode} target="_blank" rel="noreferrer">
          <Button classname="custom-button-light">Sourcecode</Button>
        </a>
      ) : (
        ''
      )}
      <div className="project-tags">
        {tags.map((tag, index) => {
          return <span key={index}>{tag}</span>;
        })}
      </div>
    </section>
  );
};

export default Project;
