import { loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { replyToQuestion } from "./src/lib/assistant.js";

function chatApiPlugin() {
  return {
    name: "local-chat-api",
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), "");
      server.middlewares.use("/api/chat", (req, res, next) => {
        if (req.method !== "POST") {
          next();
          return;
        }

        let raw = "";
        req.on("data", (chunk) => {
          raw += chunk;
        });
        req.on("end", async () => {
          try {
            const body = JSON.parse(raw || "{}");
            const answer = await replyToQuestion(body.message, body.history || [], {
              groqKey: env.GROQ_API_KEY,
              geminiKey: env.GEMINI_API_KEY,
            });
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ answer }));
          } catch {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ answer: "Something went wrong. Please try again." }));
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), chatApiPlugin()],
});
