import { knowledge, systemPrompt } from "../data/knowledge";

function normalize(text) {
  return text.toLowerCase().replace(/[^a-z0-9+#.\s]/g, " ").replace(/\s+/g, " ").trim();
}

export function localAnswer(question) {
  const q = normalize(question);

  const intents = [
    {
      words: ["mum", "mom", "mother", "mukeshimana", "donatilla"],
      answer: `Aime's mother is ${knowledge.personal.mother}`,
    },
    {
      words: ["dad", "father", "mugiraneza", "hyacinthe"],
      answer: `Aime's father is ${knowledge.personal.father}`,
    },
    {
      words: ["sister", "iteteroamie", "nikita"],
      answer: knowledge.personal.sister,
    },
    {
      words: ["brother", "bruno", "nkubito", "crispin", "sibling", "family"],
      answer: `Family: mother ${knowledge.personal.mother} Father: ${knowledge.personal.father} Sister: ${knowledge.personal.sister} Younger brother: ${knowledge.personal.brother}`,
    },
    {
      words: ["single", "dating", "girlfriend", "married", "searching", "relationship"],
      answer: knowledge.personal.relationship,
    },
    {
      words: ["child", "children", "kids", "son", "daughter"],
      answer: knowledge.personal.children,
    },
    {
      words: ["birthday", "birth date", "born", "age", "old", "september", "mukura"],
      answer: `Aime was born on ${knowledge.personal.birthday} in ${knowledge.personal.birthplace}. He is about ${knowledge.personal.age} years old. He now lives in ${knowledge.location}.`,
    },
    {
      words: ["kinyarwanda", "english", "french", "latin", "swahili", "kiswahili", "speak", "languages"],
      answer: `Languages: ${knowledge.personal.languages} English is the one he prefers most.`,
    },
    {
      words: ["catholic", "church", "pray", "praying", "religion", "faith", "god"],
      answer: knowledge.personal.faith,
    },
    {
      words: ["friend", "odillo", "bisangwa", "anderson", "olivie", "shami", "kamanzi"],
      answer: `Some of Aime's friends: ${knowledge.personal.friends}`,
    },
    {
      words: ["vegetable", "food", "eat", "milk", "drink"],
      answer: `He likes ${knowledge.personal.food.toLowerCase()} and drinks ${knowledge.personal.drink.toLowerCase()}.`,
    },
    {
      words: ["lady gaga", "gaga", "hiphop", "hip hop", "drill", "music", "song"],
      answer: `Music he loves: ${knowledge.personal.music}.`,
    },
    {
      words: ["liverpool", "rayon", "football", "soccer", "volleyball", "basketball", "sport", "team"],
      answer: knowledge.personal.sports,
    },
    {
      words: ["hobby", "hobbies", "playing", "love doing"],
      answer: `Outside work he likes ${knowledge.personal.hobbies.toLowerCase()}`,
    },
    {
      words: ["casa", "papel", "money heist", "movie", "series", "show", "watch"],
      answer: `His favorite series is ${knowledge.personal.show}.`,
    },
    {
      words: ["rio", "brazil", "brasil", "travel", "place", "country"],
      answer: `A place he loves / dreams of is ${knowledge.personal.place}. He was born in ${knowledge.personal.birthplace}.`,
    },
    {
      words: ["cyber", "dream", "goal", "future"],
      answer: `His dream is ${knowledge.personal.dream.toLowerCase()} His motto: "${knowledge.personal.motto}"`,
    },
    {
      words: ["happy", "happiness", "environment"],
      answer: `What makes him happy: ${knowledge.personal.happiness}`,
    },
    {
      words: ["color", "black", "favourite colour", "favorite color"],
      answer: `His favorite color is ${knowledge.personal.color.toLowerCase()}.`,
    },
    {
      words: ["childhood", "kid", "young", "rascal", "scumbag"],
      answer: knowledge.personal.childhood,
    },
    {
      words: ["cow", "pet", "animal", "cattle"],
      answer: knowledge.personal.pets,
    },
    {
      words: ["motto", "quote", "possible", "time"],
      answer: `His motto: "${knowledge.personal.motto}"`,
    },
    {
      words: ["like", "love", "enjoy", "favorite", "favourite"],
      answer: `Aime loves ${knowledge.personal.food.toLowerCase()} and ${knowledge.personal.drink.toLowerCase()}, ${knowledge.personal.music}, football (Liverpool and Rayon Sports), ${knowledge.personal.hobbies.toLowerCase()} His favorite color is ${knowledge.personal.color.toLowerCase()}. Favorite show: ${knowledge.personal.show}.`,
    },
    {
      words: ["iprc", "huye", "internship", "intern"],
      answer:
        "Aime completed a developer internship at IPRC Huye (not IPRC Kigali). He did practical technical training, system maintenance, and software development support.",
    },
    {
      words: ["enoveta", "solvit", "apprentice", "experience", "work history", "background"],
      answer:
        "Experience: 1) Apprenticeship Developer at Enoveta, in collaboration with SolvIT Africa — industry training and team coding. 2) Internship Developer at IPRC Huye — technical training and software support.",
    },
    {
      words: ["locknest", "lock nest"],
      answer: "Locknest is Aime's security-focused app: https://github.com/imfurayaseaimechristian/locknest_se",
    },
    {
      words: ["project", "portfolio", "built", "build"],
      answer: `Selected projects: ${knowledge.projects.join(" | ")}`,
    },
    {
      words: ["vue", "bootstrap", "frontend", "react", "tailwind", "html"],
      answer: `Frontend skills: ${knowledge.skills.frontend.join(", ")}.`,
    },
    {
      words: ["node", "express", "php", "python", "django", "backend", "api"],
      answer: `Backend skills: ${knowledge.skills.backend.join(", ")}.`,
    },
    {
      words: ["kotlin", "flutter", "react native", "mobile"],
      answer: `Mobile skills: ${knowledge.skills.mobile.join(", ")}.`,
    },
    {
      words: ["mysql", "postgres", "sqlite", "mongo", "database"],
      answer: `Databases: ${knowledge.skills.databases.join(", ")}.`,
    },
    {
      words: ["photoshop", "illustrator", "figma", "canva", "archicad", "design"],
      answer: `Design tools: ${knowledge.skills.design.join(", ")}.`,
    },
    {
      words: ["ai", "artificial", "machine learning", "ml", "train"],
      answer: "Aime focuses on AI model training and also has knowledge of machine learning.",
    },
    {
      words: ["blockchain", "web3", "crypto"],
      answer: "Aime has working knowledge of blockchain.",
    },
    {
      words: ["qa", "quality", "test", "testing"],
      answer: "Aime has knowledge of quality assurance and testing for reliable software releases.",
    },
    {
      words: ["skill", "stack", "tech", "language", "tools"],
      answer: `Aime's stack includes frontend (${knowledge.skills.frontend.join(", ")}), backend (${knowledge.skills.backend.join(", ")}), mobile (${knowledge.skills.mobile.join(", ")}), databases (${knowledge.skills.databases.join(", ")}), design (${knowledge.skills.design.join(", ")}), plus AI training, machine learning, blockchain, and QA.`,
    },
    {
      words: ["service", "offer", "help"],
      answer: `Services: ${knowledge.services.join(", ")}.`,
    },
    {
      words: ["hire", "available", "work with", "freelance", "job"],
      answer: `Yes — Aime is available for new opportunities. Email ${knowledge.email} or WhatsApp ${knowledge.phone}. He offers ${knowledge.services.join(", ")}.`,
    },
    {
      words: ["whatsapp", "whats app"],
      answer: `WhatsApp Aime at ${knowledge.phone}. Link: ${knowledge.whatsapp}`,
    },
    {
      words: ["github", "git hub", "repo", "repository"],
      answer: `Aime has two GitHub accounts: ${knowledge.github[0]} and ${knowledge.github[1]}.`,
    },
    {
      words: ["instagram", "insta"],
      answer: `Aime's Instagram is ${knowledge.instagram}.`,
    },
    {
      words: ["facebook"],
      answer: `Aime's Facebook name is ${knowledge.facebook}.`,
    },
    {
      words: ["email", "mail"],
      answer: `You can email Aime at ${knowledge.email}.`,
    },
    {
      words: ["phone", "call", "number", "contact"],
      answer: `Contact Aime by phone or WhatsApp at ${knowledge.phone}, or email ${knowledge.email}. GitHub: ${knowledge.github.join(" and ")}. Instagram: ${knowledge.instagram}.`,
    },
    {
      words: ["who are you", "who is", "about", "introduce", "your name", "full name"],
      answer: `${knowledge.name} is a ${knowledge.roles[0]} from ${knowledge.personal.birthplace}, now based in ${knowledge.location}. He is about ${knowledge.personal.age}. ${knowledge.bio} Outside work he likes ${knowledge.personal.hobbies.toLowerCase()}`,
    },
    {
      words: ["location", "live", "based", "rwanda", "kigali", "city", "where"],
      answer: `Aime was born in ${knowledge.personal.birthplace} and is now based in ${knowledge.location}.`,
    },
    {
      words: ["hello", "hi", "hey", "good morning", "good evening"],
      answer: `Hi! I can tell you about ${knowledge.shortName} — his family, what he loves, skills, experience, projects, and how to reach him. What would you like to know?`,
    },
  ];

  let best = { score: 0, answer: "" };
  for (const intent of intents) {
    const score = intent.words.reduce((total, word) => total + (q.includes(word) ? word.length : 0), 0);
    if (score > best.score) best = { score, answer: intent.answer };
  }

  if (best.score > 0) return best.answer;

  return `I only have the details Aime shared. Try asking about his mum, family, what he loves, skills, IPRC Huye, or how to contact him (${knowledge.email} / ${knowledge.phone}).`;
}

export async function llmAnswer(message, history, keys) {
  const { groqKey, geminiKey } = keys;
  const messages = [
    { role: "system", content: systemPrompt },
    ...history.slice(-8).map((item) => ({
      role: item.role === "assistant" ? "assistant" : "user",
      content: item.content,
    })),
    { role: "user", content: message },
  ];

  if (groqKey) {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        temperature: 0.4,
        max_tokens: 400,
        messages,
      }),
    });
    if (!response.ok) throw new Error("Groq request failed");
    const data = await response.json();
    return data.choices?.[0]?.message?.content?.trim();
  }

  if (geminiKey) {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: messages[0].content }] },
          contents: messages
            .filter((item) => item.role !== "system")
            .map((item) => ({
              role: item.role === "assistant" ? "model" : "user",
              parts: [{ text: item.content }],
            })),
        }),
      },
    );
    if (!response.ok) throw new Error("Gemini request failed");
    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  }

  return null;
}

export async function replyToQuestion(message, history = [], keys = {}) {
  const text = String(message || "").trim().slice(0, 800);
  if (!text) return "Ask me anything about Aime Christian.";

  try {
    const llm = await llmAnswer(text, history, keys);
    if (llm) return llm;
  } catch {
    // Fall back to the local knowledge assistant.
  }

  return localAnswer(text);
}
