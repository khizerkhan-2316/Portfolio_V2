import { createContext, useContext } from 'react';
import Projects from '../Helpers/projects';

const ProjectContext = createContext(Projects);

export const ProjectProvider = ({ children }) => {
  const value = Projects;

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProjects = () => {
  const context = useContext(ProjectContext);

  if (!context) {
    throw new Error('useProjects must be used within ProjectProvider');
  }

  return context;
};
