import { useTranslations } from "next-intl";
import { BookOpen } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function Subjects() {
  const t = useTranslations("subjects");
  const chips = t.raw("chips") as string[];
  const formats = t.raw("formats") as string[];

  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-container container-px">
        <div className="grid gap-10 rounded-card border border-ink/8 bg-white p-7 sm:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t("eyebrow")}</span>
            <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h2>
            <p className="mt-3 max-w-md text-sm text-ink/55 sm:text-base">{t("subtitle")}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/5 px-3.5 py-1.5 text-xs font-medium text-emerald"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="rounded-card bg-paper-dark p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/45">{t("formatsTitle")}</p>
            <div className="mt-3 flex flex-col gap-2.5">
              {formats.map((f) => (
                <div key={f} className="rounded-lg bg-white px-4 py-3 text-sm font-semibold text-ink shadow-sm">
                  {f}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
