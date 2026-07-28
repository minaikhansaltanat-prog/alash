"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

interface Question {
  id: string;
  text: string;
  options: string[];
}

interface LeadForm {
  name: string;
  phone: string;
}

const PHONE_RE = /^\+?\d[\d\s()-]{9,}$/;

export function DiagnosticQuiz() {
  const t = useTranslations("testPage");
  const tDemo = useTranslations("aiDemo");
  const questions = tDemo.raw("questions") as Question[];
  const router = useRouter();

  const [step, setStep] = useState(0);
  const totalSteps = questions.length + 1;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadForm>();

  function pick() {
    setStep((s) => s + 1);
  }

  function onSubmit() {
    router.push("/thanks");
  }

  const progress = Math.round(((step + 1) / totalSteps) * 100);
  const onQuestion = step < questions.length;

  return (
    <div>
      <h1 className="text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h1>
      <p className="mt-2 text-sm text-ink/55">{t("subtitle")}</p>

      <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-ink/10">
        <motion.div
          className="h-full rounded-full bg-brandgreen"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
      <p className="mt-2 text-xs font-medium text-ink/40">
        {t("step")} {step + 1} {t("of")} {totalSteps}
      </p>

      <div className="mt-8 rounded-card border border-ink/8 bg-white p-6 sm:p-8">
        <AnimatePresence mode="wait">
          {onQuestion ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <h2 className="font-heading text-lg font-medium text-ink">{questions[step]?.text}</h2>
              <div className="mt-5 grid gap-2.5">
                {questions[step]?.options.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => pick()}
                    className="rounded-xl border border-ink/10 px-4 py-3 text-left text-sm text-ink/80 transition-colors hover:border-emerald/50 hover:bg-emerald/5 cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.form
              key="lead-form"
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
            >
              <div>
                <label htmlFor="name" className="text-sm font-medium text-ink/70">
                  {t("nameLabel")}
                </label>
                <input
                  id="name"
                  placeholder={t("namePlaceholder")}
                  className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-emerald"
                  {...register("name", { required: true })}
                />
                {errors.name && <p className="mt-1 text-xs text-coral">{t("required")}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="text-sm font-medium text-ink/70">
                  {t("phoneLabel")}
                </label>
                <input
                  id="phone"
                  placeholder={t("phonePlaceholder")}
                  className="mt-1.5 w-full rounded-xl border border-ink/15 px-4 py-3 text-sm outline-none focus:border-emerald"
                  {...register("phone", { required: true, pattern: PHONE_RE })}
                />
                {errors.phone && <p className="mt-1 text-xs text-coral">{t("invalidPhone")}</p>}
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brandgreen px-6 py-3.5 text-sm font-semibold text-white cursor-pointer"
              >
                {t("submit")} <ArrowRight className="h-4 w-4" />
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
