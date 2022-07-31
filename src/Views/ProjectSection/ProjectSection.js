import './ProjectSection.css';
import Project from '../../Components/Project/Project';
import { useProjects } from '../../Context/ProjectContext';
const ProjectSection = () => {
  const projects = useProjects();
  return (
    <section className="project-container" id="portfolio">
      <div className="project-heading-container">
        <h2>Projects</h2>
        <p>Explore personal and school projects</p>
      </div>
      <div className="project-content-container">
        {projects.map((project) => {
          return <Project project={project} key={project.id} />;
        })}
      </div>
    </section>
  );
};

export default ProjectSection;
