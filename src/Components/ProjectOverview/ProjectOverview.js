import './ProjectOverview.css';
import Button from '../Button/Button';
import { useParams, useNavigate } from 'react-router-dom';
import { useProjects } from '../../Context/ProjectContext';
import { useState, useEffect } from 'react';
import IconButton from '../IconButton/IconButton';
import { faGithub, faChrome } from '@fortawesome/free-brands-svg-icons';
import {
  getProjectIndex,
  getNextProject,
  getPreviousProject,
} from '../../Helpers/toggle';

const ProjectOverview = (props) => {
  const [selectedProject, setSelectedProject] = useState({});
  const [previousProject, setPreviousProject] = useState(undefined);
  const [nextProject, setNextProject] = useState(undefined);

  const projects = useProjects();
  const { id } = useParams();
  const navigate = useNavigate();

  const findSelectedProject = () => {
    const foundProject = projects.find((project) => project.title === id);
    if (foundProject) {
      setSelectedProject(foundProject);
      return true;
    }
    return false;
  };

  useEffect(() => {
    findSelectedProject()
      ? findSelectedProject()
      : navigate('/404', { replace: true });

    if (Object.keys(selectedProject).length !== 0) {
      setPreviousProject(
        getPreviousProject(getProjectIndex, projects, selectedProject)
      );

      setNextProject(
        getNextProject(getProjectIndex, projects, selectedProject)
      );
    }

    window.scrollTo(0, 0);
  }, [selectedProject]);

  return (
    <section className="project-overview">
      <div className="project-overview-close-container">
        <Button onClick={() => navigate(-1)} classname={'custom-button-light'}>
          Back
        </Button>{' '}
      </div>
      <div className="project-overview-heading-container">
        <h1>{selectedProject.title}</h1>
      </div>
      <div className="project-overview-content-container">
        <div className="project-overview-img-container">
          <img src={selectedProject.gif} alt={selectedProject.title} />{' '}
        </div>
        <div className="project-description-container">
          {selectedProject.description ? <h2>Description</h2> : ''}
          {selectedProject.description}
          {selectedProject.adminAccess ? <h3>Access as admin</h3> : ''}
          {selectedProject.adminAccess}
        </div>
        <div className="project-info-container">
          <p>
            <strong>Date: </strong> {selectedProject.date}
          </p>
          {selectedProject.semester ? (
            <p>
              <strong>Date: </strong> {selectedProject.date}
            </p>
          ) : (
            ''
          )}

          {selectedProject.focusArea ? (
            <p>
              <strong>Focus area: </strong> {selectedProject.focusArea}
            </p>
          ) : (
            ''
          )}
          {(selectedProject.url && selectedProject.sourcecode) ||
          (selectedProject.url && selectedProject.sourcecode_client) ||
          (selectedProject.url && selectedProject.sourcecode_server) ? (
            <h3>Visit the website or checkout the source code on Github</h3>
          ) : selectedProject.url ? (
            <h3>Visit the website</h3>
          ) : (
            <h3>Checkout the source code</h3>
          )}
          <div className="external-navigate-wrapper">
            {selectedProject.url ? (
              <IconButton
                icon={faChrome}
                link={selectedProject.url}
                external={true}
              />
            ) : (
              ''
            )}

            {selectedProject.sourcecode_client ? (
              <IconButton
                icon={faGithub}
                link={selectedProject.sourcecode_client}
                external={true}
              />
            ) : (
              ''
            )}

            {selectedProject.sourcecode_server ? (
              <IconButton
                icon={faGithub}
                link={selectedProject.sourcecode_server}
                external={true}
              />
            ) : (
              ''
            )}

            {selectedProject.sourcecode ? (
              <IconButton
                icon={faGithub}
                link={selectedProject.sourcecode}
                external={true}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;
