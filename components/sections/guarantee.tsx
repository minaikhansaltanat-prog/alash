import { useTranslations } from "next-intl";
import { ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function Guarantee() {
  const t = useTranslations("guarantee");

  return (
    <section className="bg-paper py-14 sm:py-16">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="flex flex-col items-center gap-6 rounded-card border-2 border-gold/30 bg-gold/5 p-8 text-center sm:flex-row sm:text-left">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gold/15">
            <ShieldCheck className="h-8 w-8 text-gold" />
          </span>
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t("eyebrow")}</span>
            <h2 className="mt-2 text-balance font-heading text-xl font-semibold text-ink sm:text-2xl">{t("title")}</h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/60">{t("text")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
