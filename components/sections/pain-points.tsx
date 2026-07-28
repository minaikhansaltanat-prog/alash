import { useTranslations } from "next-intl";
import { HelpCircle, Clock, EyeOff } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const ICONS = [HelpCircle, Clock, EyeOff];

export function PainPoints() {
  const t = useTranslations("pain");
  const cards = t.raw("cards") as { title: string; text: string }[];

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {cards.map((c, i) => {
            const Icon = ICONS[i] ?? HelpCircle;
            return (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="h-full rounded-card border border-coral/15 bg-coral/[0.04] p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-coral/10">
                    <Icon className="h-5 w-5 text-coral" />
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
