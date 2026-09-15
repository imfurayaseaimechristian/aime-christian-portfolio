import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { localAnswer } from "../lib/assistant";

const starters = [
  "Who is Aime?",
  "How is Aime's mum?",
  "What does he love?",
  "How can I contact him?",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi — ask me about Aime's work, family, or what he loves. I answer from the details he shared.",
    },
  ]);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async (text) => {
    const question = (text || input).trim();
    if (!question || pending) return;

    const nextHistory = [...messages, { role: "user", content: question }];
    setMessages(nextHistory);
    setInput("");
    setPending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: question,
          history: nextHistory.slice(-8),
        }),
      });
      const data = await response.json();
      setMessages((current) => [
        ...current,
        { role: "assistant", content: data.answer || localAnswer(question) },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: localAnswer(question) },
      ]);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="fixed right-4 bottom-4 z-[60] sm:right-6 sm:bottom-6">
      {open ? (
        <div className="mb-3 flex h-[min(32rem,calc(100vh-7rem))] w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-950/95 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-cyan-400/15 to-emerald-400/10 px-4 py-3">
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-cyan-300" />
              <div>
                <p className="text-sm font-semibold text-white">Ask about Aime</p>
                <p className="text-[11px] text-slate-400">AI assistant for this portfolio</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-full p-1 text-slate-400 hover:text-white"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-auto bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950"
                    : "bg-white/5 text-slate-200"
                }`}
              >
                {message.content}
              </div>
            ))}
            {pending ? (
              <p className="text-xs text-cyan-300">Thinking...</p>
            ) : null}
            <div ref={endRef} />
          </div>

          <div className="flex flex-wrap gap-2 px-4 pb-2">
            {starters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => send(item)}
                className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-slate-300 hover:border-cyan-400/40 hover:text-cyan-200"
              >
                {item}
              </button>
            ))}
          </div>

          <form
            className="flex gap-2 border-t border-white/10 p-3"
            onSubmit={(event) => {
              event.preventDefault();
              send();
            }}
          >
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Aime..."
              className="flex-1 rounded-xl border border-white/10 bg-slate-900 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400/50"
            />
            <button
              type="submit"
              disabled={pending}
              className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 disabled:opacity-60"
              aria-label="Send"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-[0_0_28px_rgba(34,211,238,0.35)]"
        aria-label="Open Aime assistant"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
