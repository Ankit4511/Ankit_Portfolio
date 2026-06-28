import { getContext } from "./router.js";
import { getPromptTemplate } from "./promptTemplate.js";

export default function buildPrompt(question) {

  const context = getContext(question);

  

  return getPromptTemplate(context, question);
}
