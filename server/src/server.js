import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

import app from "./app.js";

const PORT = process.env.PORT || 4000;

console.log("PORT:", process.env.PORT);
console.log("API KEY FOUND:", !!process.env.GROQ_API_KEY);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});