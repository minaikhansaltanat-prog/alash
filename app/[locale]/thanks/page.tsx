import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";
import { Link } from "@/i18n/navigation";

export default function ThanksPage() {
  const t = useTranslations("thanksPage");

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center container-px py-20 text-center">
      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brandgreen/10">
        <CheckCircle2 className="h-8 w-8 text-brandgreen" />
      </span>
      <h1 className="mt-5 text-balance font-heading text-2xl font-semibold text-ink sm:text-3xl">{t("title")}</h1>
      <p className="mt-3 text-sm text-ink/60 sm:text-base">{t("subtitle")}</p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://wa.me/77763011110"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white cursor-pointer"
        >
          {t("whatsappCta")}
        </a>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-ink/15 px-6 py-3 text-sm font-semibold text-ink cursor-pointer"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
