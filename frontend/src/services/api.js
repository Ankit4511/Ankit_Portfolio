const API_URL = `${import.meta.env.VITE_API_URL}/api/chat`;


export async function sendMessage(message) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong.");
    }

    return data.response;
  } catch (error) {
    console.error("API Error:", error);

    return "Unable to connect to AI server.";
  }
}