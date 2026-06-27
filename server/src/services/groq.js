const API_URL = "https://api.groq.com/openai/v1/chat/completions";

export async function askGroq(prompt) {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is missing in .env");
  }

  const response = await fetch(API_URL, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
    },

    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",

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
    console.error(data);
    throw new Error(data?.error?.message || "Groq API Error");
  }

  return (
    data?.choices?.[0]?.message?.content ||
    "Sorry, I couldn't generate a response."
  );
}