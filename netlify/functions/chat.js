import { replyToQuestion } from "../../src/lib/assistant.js";

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const answer = await replyToQuestion(body.message, body.history || [], {
      groqKey: process.env.GROQ_API_KEY,
      geminiKey: process.env.GEMINI_API_KEY,
    });

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer }),
    };
  } catch {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: "Something went wrong. Please try again." }),
    };
  }
}
