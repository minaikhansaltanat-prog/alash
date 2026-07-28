import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("legal");
  const paragraphs = t.raw("privacyBody") as string[];

  return (
    <div className="mx-auto max-w-2xl container-px py-16 sm:py-20">
      <h1 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("privacyTitle")}</h1>
      <p className="mt-2 text-xs font-medium uppercase tracking-wide text-ink/40">{t("updated")}</p>
      <p className="mt-6 text-sm leading-relaxed text-ink/60">{t("privacyIntro")}</p>
      <div className="mt-6 space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-sm leading-relaxed text-ink/70">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
