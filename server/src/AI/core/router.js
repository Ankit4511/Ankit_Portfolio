import portfolioContext from "../../data/portfolioContext.js";
import { getLastProject, saveLastProject } from "./memory.js";
import { normalizeText } from "../../utils/helpers.js";

export function getContext(question) {
  const normalizedQuestion = normalizeText(question);

  const lastProject = getLastProject();

  const isProjectFollowUp =
    normalizedQuestion.includes("feature") ||
    normalizedQuestion.includes("features") ||
    normalizedQuestion.includes("tech stack") ||
    normalizedQuestion.includes("technology") ||
    normalizedQuestion.includes("overview");

  let matchedProject = null;

  for (const project of portfolioContext.projects) {

    const keywords = [
        normalizeText(project.title),
        ...(project.aliases || []).map(normalizeText)
    ];

    const found = keywords.some(keyword =>
        normalizedQuestion.includes(keyword)
    );

    if (found) {
        matchedProject = project;
        saveLastProject(project);
        break;
    }
}

  if (isProjectFollowUp && lastProject) {
    return lastProject;
  }

  if (matchedProject) {
    return matchedProject;
  }

  if (
    normalizedQuestion.includes("project") ||
    normalizedQuestion.includes("portfolio")
  ) {
    return portfolioContext.projects;
  }

  if (
    normalizedQuestion.includes("skill") ||
    normalizedQuestion.includes("technology") ||
    normalizedQuestion.includes("tech stack")
  ) {
    return portfolioContext.skills;
  }

  if (
    normalizedQuestion.includes("experience") ||
    normalizedQuestion.includes("internship") ||
    normalizedQuestion.includes("worked")
  ) {
    return portfolioContext.experience;
  }

  if (
    normalizedQuestion.includes("education") ||
    normalizedQuestion.includes("college") ||
    normalizedQuestion.includes("degree")
  ) {
    return portfolioContext.education;
  }

  if (
    normalizedQuestion.includes("certificate") ||
    normalizedQuestion.includes("certification") ||
    normalizedQuestion.includes("aws")
  ) {
    return portfolioContext.certifications;
  }

  if (
    normalizedQuestion.includes("github") ||
    normalizedQuestion.includes("repository")
  ) {
    return portfolioContext.github;
  }

  return portfolioContext.about;
}