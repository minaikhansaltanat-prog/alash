"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Sparkles, X, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollVisible } from "@/lib/use-scroll-visible";

interface Message {
  role: "assistant" | "user";
  text: string;
}

export function AiAssistant() {
  const t = useTranslations("aiAssistant");
  const visible = useScrollVisible();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: "assistant", text: t("greeting") }]);
    }
  }, [open, messages.length, t]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  function replyFor(index: number) {
    const replies = t.raw("replies") as Record<string, string>;
    return replies[String(index)] ?? replies.default;
  }

  function sendChip(chipIndex: number, chipText: string) {
    setMessages((m) => [...m, { role: "user", text: chipText }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", text: replyFor(chipIndex) }]);
    }, 500);
  }

  function sendFreeText() {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    setTimeout(() => {
      const replies = t.raw("replies") as Record<string, string>;
      setMessages((m) => [...m, { role: "assistant", text: replies.default }]);
    }, 500);
  }

  const chips = t.raw("chips") as string[];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t("buttonLabel")}
        aria-expanded={open}
        title={t("buttonLabel")}
        className={cn(
          "fixed bottom-24 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-paper shadow-lg shadow-black/20 transition-all duration-300 cursor-pointer hover:scale-105 motion-reduce:hover:scale-100 sm:bottom-28 sm:right-8",
          visible || open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        {open ? <X className="h-6 w-6" /> : <Sparkles className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            role="dialog"
            aria-label={t("title")}
            className="fixed bottom-[9.5rem] right-5 z-30 flex h-[28rem] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-card border border-ink/10 bg-white shadow-2xl sm:bottom-[10.5rem] sm:right-8"
          >
            <div className="flex items-center gap-3 bg-emerald px-4 py-3.5 text-paper">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Sparkles className="h-4.5 w-4.5" />
              </span>
              <div className="min-w-0">
                <p className="font-heading text-sm font-semibold leading-none">{t("title")}</p>
                <p className="mt-1 text-xs text-paper/70">{t("subtitle")}</p>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-paper px-4 py-4">
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={cn(
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                    m.role === "assistant"
                      ? "rounded-tl-sm bg-white text-ink shadow-sm"
                      : "ml-auto rounded-tr-sm bg-emerald text-paper"
                  )}
                >
                  {m.text}
                </div>
              ))}
              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {chips.map((chip, i) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => sendChip(i, chip)}
                      className="rounded-full border border-emerald/30 bg-white px-3 py-1.5 text-xs font-medium text-emerald transition-colors hover:bg-emerald/5 cursor-pointer"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="border-t border-ink/10 bg-white px-4 py-2 text-[11px] leading-snug text-ink/40">
              {t("disclaimer")}
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendFreeText();
              }}
              className="flex items-center gap-2 border-t border-ink/10 bg-white p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t("placeholder")}
                className="min-w-0 flex-1 rounded-full border border-ink/15 bg-paper px-3.5 py-2 text-sm outline-none focus:border-emerald"
              />
              <button
                type="submit"
                aria-label={t("send")}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald text-paper transition-colors hover:bg-emerald-light cursor-pointer"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
