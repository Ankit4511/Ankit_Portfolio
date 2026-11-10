
const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function askGroq(prompt) {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL;

  if (!apiKey) {
    throw new Error("GROQ_API_KEY is missing in .env");
  }

  if (!model) {
    throw new Error("GROQ_MODEL is missing in .env");
  }

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },

    body: JSON.stringify({
      model,

      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],

      temperature: 0.4,
      max_tokens: 500,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    console.error("Groq API Error:", data);

    throw new Error(
      data?.error?.message || "Groq API request failed"
    );
  }

  return (
    data?.choices?.[0]?.message?.content ||
    "Sorry, I couldn't generate a response."
  );
}
