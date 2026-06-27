import buildPrompt from "../AI/core/buildPrompt.js";
import { askGroq } from "./groq.js";

export async function askPortfolioAI(question) {
  if (!question?.trim()) {
    return "Please enter a question.";
  }

  const prompt = buildPrompt(question);

  return await askGroq(prompt);
}