import { useTranslations } from "next-intl";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function ParentsBlock() {
  const t = useTranslations("parents");
  const bullets = [t("bullet1"), t("bullet2"), t("bullet3")];

  return (
    <section className="bg-emerald py-16 text-paper sm:py-24">
      <div className="mx-auto grid max-w-container items-center gap-10 container-px lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{t("eyebrow")}</span>
          <h2 className="mt-3 text-balance font-heading text-2xl font-semibold sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-paper/70 sm:text-base">{t("text")}</p>

          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-paper/85">
                <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brandgreen" />
                {b}
              </li>
            ))}
          </ul>

          <a
            href="/parents"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink cursor-pointer"
          >
            {t("cta")}
          </a>
        </Reveal>

        <Reveal delay={0.1} className="relative mx-auto aspect-[5/4] w-full max-w-md overflow-hidden rounded-card border border-white/10">
          <Image
            src="/photos/teacher-1.jpg"
            alt={t("title")}
            fill
            sizes="(max-width: 1024px) 90vw, 480px"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
