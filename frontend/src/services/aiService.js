import { sendMessage } from "./api";

export async function askPortfolioAI(question) {
  try {
    return await sendMessage(question);
  } catch (error) {
    console.error("AI Service Error:", error);

    return "Sorry, something went wrong.";
  }
}