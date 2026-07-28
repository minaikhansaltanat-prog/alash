import { useTranslations } from "next-intl";
import { BrainCircuit, Video, FileQuestion, Radio, UserCheck, Users, Trophy, Compass } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

const ICONS = [BrainCircuit, Video, FileQuestion, Radio, UserCheck, Users, Trophy, Compass];

export function Features() {
  const t = useTranslations("features");
  const cards = t.raw("cards") as { title: string; text: string }[];

  return (
    <section id="features" className="scroll-mt-16 bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t("eyebrow")}</span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-sm text-ink/55 sm:text-base">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => {
            const Icon = ICONS[i] ?? BrainCircuit;
            return (
              <Reveal key={c.title} delay={(i % 4) * 0.06}>
                <div className="h-full rounded-card border border-ink/8 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald/8">
                    <Icon className="h-5 w-5 text-emerald" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-ink">{c.title}</h3>
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
