import { useTranslations } from "next-intl";
import { Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface Tier {
  name: string;
  price: string;
  old: string;
  desc: string;
  features: string[];
}

export function Pricing() {
  const t = useTranslations("pricing");
  const tiers = t.raw("tiers") as Tier[];

  return (
    <section id="pricing" className="scroll-mt-16 bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-container container-px">
        <Reveal className="mx-auto max-w-xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald">{t("eyebrow")}</span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-sm text-ink/55 sm:text-base">{t("subtitle")}</p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3 lg:items-start">
          {tiers.map((tier, i) => {
            const popular = i === 1;
            return (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-card border p-7",
                    popular
                      ? "border-brandgreen bg-emerald text-paper shadow-2xl lg:-translate-y-3"
                      : "border-ink/10 bg-white text-ink"
                  )}
                >
                  {popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold text-ink">
                      {t("popular")}
                    </span>
                  )}
                  <h3 className="font-heading text-lg font-bold">{tier.name}</h3>
                  <p className={cn("mt-1.5 text-sm", popular ? "text-paper/65" : "text-ink/55")}>{tier.desc}</p>

                  <div className="mt-5 flex items-end gap-2">
                    <span className="font-heading text-3xl font-bold">{tier.price}</span>
                    <span className={cn("pb-1 text-sm line-through", popular ? "text-paper/40" : "text-ink/35")}>
                      {tier.old}
                    </span>
                  </div>
                  <p className={cn("mt-0.5 text-xs", popular ? "text-paper/50" : "text-ink/40")}>{t("perMonth")}</p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm">
                        <Check className={cn("mt-0.5 h-4 w-4 shrink-0", popular ? "text-brandgreen" : "text-emerald")} />
                        <span className={popular ? "text-paper/85" : "text-ink/70"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#faq"
                    className={cn(
                      "mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold cursor-pointer",
                      popular ? "bg-gold text-ink hover:bg-gold-light" : "bg-ink/5 text-ink hover:bg-ink/10"
                    )}
                  >
                    {t("cta")}
                  </a>

                  <div
                    className={cn(
                      "mt-4 flex items-center gap-1.5 text-xs font-medium",
                      popular ? "text-brandgreen" : "text-emerald"
                    )}
                  >
                    <ShieldCheck className="h-3.5 w-3.5" />
                    {t("guaranteeBadge")}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
