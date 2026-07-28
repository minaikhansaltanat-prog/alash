import { useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

export function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section className="bg-ink py-16 text-paper sm:py-20">
      <div className="mx-auto max-w-2xl px-5 text-center">
        <Reveal>
          <h2 className="text-balance font-heading text-2xl font-semibold sm:text-3xl">{t("title")}</h2>
          <p className="mt-3 text-sm text-paper/60 sm:text-base">{t("text")}</p>
          <a
            href="#pricing"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-brandgreen px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brandgreen/20 transition-transform hover:scale-[1.02] cursor-pointer"
          >
            {t("cta")}
            <ArrowRight className="h-4.5 w-4.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
