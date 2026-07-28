import { useTranslations } from "next-intl";
import { Reveal } from "@/components/motion/reveal";

export function HowItWorks() {
  const t = useTranslations("howItWorks");
  const steps = t.raw("steps") as { n: string; title: string; text: string }[];

  return (
    <section className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t("eyebrow")}</span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-sm text-ink/55 sm:text-base">{t("subtitle")}</p>
        </Reveal>

        <div className="relative mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 lg:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald/25 bg-paper font-heading text-lg font-bold text-emerald">
                {s.n}
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink/60">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
