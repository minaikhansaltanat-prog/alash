import { useTranslations } from "next-intl";
import { ParentsBlock } from "@/components/sections/parents-block";
import { Guarantee } from "@/components/sections/guarantee";
import { FinalCta } from "@/components/sections/final-cta";

export default function ParentsPage() {
  const t = useTranslations("parentsPage");

  return (
    <div>
      <div className="mx-auto max-w-2xl px-5 pb-4 pt-14 text-center sm:pt-20">
        <h1 className="text-balance font-heading text-2xl font-semibold text-ink sm:text-4xl">{t("title")}</h1>
        <p className="mt-3 text-sm text-ink/60 sm:text-base">{t("subtitle")}</p>
      </div>
      <ParentsBlock />
      <Guarantee />
      <FinalCta />
    </div>
  );
}
