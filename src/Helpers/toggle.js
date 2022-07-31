function getProjectIndex(projects, selectedProject) {
  return projects.findIndex((project) => project.id === selectedProject.id);
}

function getNextProject(getProjectIndex, projects, selectedProject) {
  const index = getProjectIndex(projects, selectedProject) + 1;
  console.log('Index next:' + index);

  return projects[index];
}

function getPreviousProject(getProjectIndex, projects, selectedProject) {
  const index = getProjectIndex(projects, selectedProject) - 1;
  console.log('Index previous:' + index);

  return projects[index];
}

export { getProjectIndex, getNextProject, getPreviousProject };
