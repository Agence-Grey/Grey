"use client";

import { useEffect, useRef, useState } from "react";
import { Send, X, MessageCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function parseSSEChunk(chunk: string): string {
  const lines = chunk.split("\n");
  let text = "";
  for (const line of lines) {
    if (line.startsWith("data: ")) {
      const data = line.slice(6);
      if (data === "[DONE]") break;
      try {
        const json = JSON.parse(data);
        text += json.choices?.[0]?.delta?.content ?? "";
      } catch {
        // ignore malformed json
      }
    }
  }
  return text;
}

export function LaureChat({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Salut ! Je suis Laure, la commerciale de l'Agence Grey. Tu cherches un site pour ton studio ? Dis-moi tout — quel type d'activité, et si tu as une idée de budget.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage() {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const res = await fetch("/api/laure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });

      if (!res.ok || !res.body) {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1].content =
            "Oups, j'ai un petit souci technique. Tu peux nous contacter directement à agencegrey06@gmail.com ou passer par le formulaire de contact !";
          return copy;
        });
        setLoading(false);
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        const parts = buffer.split("\n\n");
        buffer = parts.pop() ?? "";

        for (const part of parts) {
          const chunk = parseSSEChunk(part);
          if (chunk) {
            setMessages((prev) => {
              const copy = [...prev];
              copy[copy.length - 1].content += chunk;
              return copy;
            });
          }
        }
      }

      // flush remaining
      if (buffer) {
        const chunk = parseSSEChunk(buffer);
        if (chunk) {
          setMessages((prev) => {
            const copy = [...prev];
            copy[copy.length - 1].content += chunk;
            return copy;
          });
        }
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1].content =
          "Oups, j'ai un petit souci technique. Tu peux nous contacter directement à agencegrey06@gmail.com ou passer par le formulaire de contact !";
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex h-[500px] w-[360px] flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0d] shadow-[0_20px_60px_rgba(0,0,0,0.6)] max-sm:h-[calc(100vh-120px)] max-sm:w-[calc(100vw-32px)]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-[var(--color-accent)] px-5 py-3.5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/20">
            <MessageCircle className="size-4 text-black" />
          </div>
          <div>
            <p className="text-sm font-semibold text-black">Laure</p>
            <p className="text-[11px] font-medium text-black/70">En ligne</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="inline-flex h-8 w-8 items-center justify-center rounded-full text-black/70 transition hover:bg-black/10 hover:text-black"
          aria-label="Fermer"
        >
          <X className="size-4" />
        </button>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-2.5",
              msg.role === "user" ? "flex-row-reverse" : "flex-row"
            )}
          >
            <div
              className={cn(
                "flex h-7 w-7 shrink-0 items-center justify-center rounded-full",
                msg.role === "user" ? "bg-white/10" : "bg-[var(--color-accent)]/20"
              )}
            >
              {msg.role === "user" ? (
                <User className="size-3.5 text-white/70" />
              ) : (
                <MessageCircle className="size-3.5 text-[var(--color-accent)]" />
              )}
            </div>
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-[var(--color-accent)] text-black"
                  : "border border-white/10 bg-white/5 text-white/90"
              )}
            >
              {msg.content || (loading && i === messages.length - 1 ? (
                <span className="inline-flex gap-1">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/40 [animation-delay:0.2s]" />
                </span>
              ) : null)}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-white/10 p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écris ton message..."
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-[var(--color-accent)]/40 focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]/20"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-black transition hover:bg-[var(--color-accent-strong)] disabled:opacity-40"
            aria-label="Envoyer"
          >
            <Send className="size-4" />
          </button>
        </form>
      </div>
    </div>
  );
}
