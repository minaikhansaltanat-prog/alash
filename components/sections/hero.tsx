import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, PlayCircle, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section id="hero" className="relative overflow-hidden bg-paper pb-16 pt-12 sm:pb-24 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] rounded-full bg-brandgreen/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-container items-center gap-12 container-px lg:grid-cols-2 lg:gap-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-gold">
              <TrendingUp className="h-3.5 w-3.5" />
              {t("eyebrow")}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-5 text-balance font-heading text-[2.35rem] font-semibold leading-[1.12] text-ink sm:text-5xl lg:text-[3.4rem]">
              {t("h1")}
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-lg text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                id="hero-cta"
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brandgreen px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brandgreen/25 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                {t("ctaPrimary")}
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <a
                href="#ai-demo"
                className="inline-flex items-center justify-center gap-2.5 text-sm font-semibold text-ink/70 transition-colors hover:text-emerald cursor-pointer"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm">
                  <PlayCircle className="h-5 w-5 text-emerald" />
                </span>
                <span>
                  {t("ctaSecondary")}
                  <span className="block text-xs font-normal text-ink/45">{t("videoNote")}</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] bg-emerald">
            <Image
              src="/photos/student-1.jpg"
              alt="ALASH BRIDGE оқушысы"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="relative z-10 object-cover object-top"
            />
          </div>

          <div className="absolute -left-4 top-6 z-20 w-52 rounded-card border border-ink/5 bg-white p-4 shadow-xl sm:-left-8 sm:w-60">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
              {t("resultCardTitle")}
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-emerald">{t("resultCardValue")}</p>
            <p className="mt-1 text-xs font-medium text-brandgreen">{t("resultCardDelta")}</p>
          </div>

          <div className="absolute -right-2 bottom-8 z-20 w-48 rounded-card border border-ink/5 bg-white p-4 shadow-xl sm:-right-6 sm:w-52">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">
              {t("grantCardTitle")}
            </p>
            <p className="mt-1 font-heading text-2xl font-bold text-gold">{t("grantCardValue")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
