let lastProject = null;

export function saveLastProject(project) {
  lastProject = project;
}

export function getLastProject() {
  return lastProject;
}

export function clearMemory() {
  lastProject = null;
}