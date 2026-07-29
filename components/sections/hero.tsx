"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, Play, TrendingUp } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { VideoModal } from "@/components/sections/video-modal";

const AVATARS = ["/photos/student-1.jpg", "/photos/student-2.jpg", "/photos/student-3.jpg"];

export function Hero() {
  const t = useTranslations("hero");
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="hero" className="relative overflow-hidden bg-paper pb-14 pt-12 sm:pb-20 sm:pt-16 lg:pb-24">
      <div className="mx-auto grid max-w-container items-center gap-10 container-px lg:grid-cols-[1fr_1.15fr] lg:gap-6 xl:gap-10">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.14em] text-gold">
              <span className="h-2 w-2 rotate-45 bg-gold" aria-hidden="true" />
              {t("eyebrow")}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-balance font-heading text-[2.4rem] font-bold leading-[1.1] text-ink sm:text-5xl lg:text-[3.3rem]">
              {t("h1Line1")}
              <br />
              {t("h1Line2")}
              <br />
              <span className="text-emerald">{t("h1Accent")}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-balance text-base leading-relaxed text-ink/65 sm:text-lg">
              {t("subtitle")}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                id="hero-cta"
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brandgreen px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-brandgreen/25 transition-transform hover:scale-[1.02] cursor-pointer"
              >
                {t("ctaPrimary")}
                <ArrowRight className="h-4.5 w-4.5" />
              </a>
              <button
                type="button"
                onClick={() => setVideoOpen(true)}
                className="inline-flex items-center gap-2.5 text-left text-sm font-bold text-ink/75 transition-colors hover:text-emerald cursor-pointer"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Play className="ml-0.5 h-4 w-4 fill-emerald text-emerald" />
                </span>
                <span>
                  <span className="block uppercase tracking-wide">{t("ctaSecondary")}</span>
                  <span className="block text-xs font-normal normal-case text-ink/45">{t("videoNote")}</span>
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-lg lg:max-w-none lg:-mr-4 xl:-mr-10">
          <div className="relative aspect-[1250/768] w-full">
            <Image
              src="/hero/student-hero.png"
              alt="ALASH BRIDGE оқушысы — Арманыңдағы университетке жол ашамыз"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 55vw"
              className="object-contain object-center"
            />

            {/* These sit exactly over the baked-in card graphics from the source
                photo (see public/hero/student-hero.png) to replace them with
                real, translatable markup — they must stay visible and aligned
                to that position at every breakpoint, never hidden. */}
            <div className="absolute right-0 top-[7%] w-[42%] min-w-[8rem] max-w-[15.5rem] rounded-card border border-ink/5 bg-white p-2 shadow-xl sm:top-[10%] sm:w-[40%] sm:min-w-[10rem] sm:p-4">
              <p className="text-[8px] font-semibold uppercase leading-tight tracking-wide text-ink/40 sm:text-[11px]">
                {t("resultCardTitle")}
              </p>
              <p className="mt-0.5 flex items-end gap-1 sm:mt-1 sm:gap-1.5">
                <span className="font-heading text-sm font-bold text-emerald sm:text-2xl">
                  {t("resultCardValue")}
                </span>
                <span className="pb-0.5 text-[9px] font-medium text-ink/50 sm:text-xs">
                  {t("resultCardUnit")}
                </span>
                <TrendingUp className="ml-auto h-3 w-3 shrink-0 text-brandgreen sm:h-4 sm:w-4" />
              </p>
              <p className="mt-0.5 hidden text-xs font-medium leading-snug text-brandgreen sm:mt-1 sm:block">
                {t("resultCardDelta")}
              </p>
            </div>

            <div className="absolute bottom-[5%] right-0 w-[40%] min-w-[7.5rem] max-w-[13.5rem] rounded-card border border-ink/5 bg-white p-2 shadow-xl sm:bottom-[6%] sm:w-[38%] sm:min-w-[9.5rem] sm:p-4">
              <p className="text-[8px] font-semibold uppercase leading-tight tracking-wide text-ink/40 sm:text-[11px]">
                {t("grantCardTitle")}
              </p>
              <div className="mt-0.5 flex items-center justify-between gap-1.5 sm:mt-1 sm:gap-2">
                <span className="font-heading text-sm font-bold text-gold sm:text-2xl">
                  {t("grantCardValue")}
                </span>
                <span className="flex -space-x-1.5 sm:-space-x-2">
                  {AVATARS.map((src) => (
                    <span
                      key={src}
                      className="relative h-4 w-4 overflow-hidden rounded-full border-2 border-white sm:h-7 sm:w-7"
                    >
                      <Image src={src} alt="" fill sizes="28px" className="object-cover" />
                    </span>
                  ))}
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-white bg-paper-dark text-[7px] font-bold text-ink/60 sm:h-7 sm:w-7 sm:text-[9px]">
                    +
                  </span>
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
}
