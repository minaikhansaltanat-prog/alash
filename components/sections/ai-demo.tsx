"use client";

import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, RotateCcw } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

interface Question {
  id: string;
  text: string;
  options: string[];
}

export function AiDemo() {
  const t = useTranslations("aiDemo");
  const questions = t.raw("questions") as Question[];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const done = step >= questions.length;

  const weakTopic = useMemo(() => {
    if (!done || answers.length === 0) return "";
    // Deterministic mock: whichever option index was picked most often
    // on the first two (subject) questions decides the "weak topic" shown.
    const q1 = questions[0]?.options[answers[0]] ?? "";
    return q1;
  }, [done, answers, questions]);

  function pick(optionIndex: number) {
    setAnswers((a) => [...a, optionIndex]);
    setStep((s) => s + 1);
  }

  function restart() {
    setStep(0);
    setAnswers([]);
  }

  return (
    <section id="ai-demo" className="bg-ink py-16 text-paper sm:py-24">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brandgreen">
            <Sparkles className="h-3.5 w-3.5" /> {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-sm text-paper/60 sm:text-base">{t("subtitle")}</p>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-10 max-w-xl overflow-hidden rounded-card border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs font-semibold text-brandgreen">
                  {step + 1} / {questions.length}
                </p>
                <h3 className="mt-2 font-heading text-lg font-medium leading-snug sm:text-xl">
                  {questions[step]?.text}
                </h3>
                <div className="mt-5 grid gap-2.5">
                  {questions[step]?.options.map((opt, i) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(i)}
                      className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-left text-sm text-paper/85 transition-colors hover:border-brandgreen/50 hover:bg-brandgreen/10 cursor-pointer"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                  <Sparkles className="h-6 w-6 text-gold" />
                </span>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-paper/50">
                  {t("resultTitle")}
                </p>
                <p className="mt-1 font-heading text-2xl font-bold text-gold">{weakTopic}</p>
                <p className="mx-auto mt-4 max-w-sm text-sm text-paper/60">{t("resultSubtitle")}</p>
                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a
                    href="#pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-brandgreen px-6 py-3 text-sm font-semibold text-white cursor-pointer"
                  >
                    {t("resultCta")} <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={restart}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-paper/70 hover:text-paper cursor-pointer"
                  >
                    <RotateCcw className="h-4 w-4" /> {t("restart")}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
