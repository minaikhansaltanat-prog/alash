import { useTranslations } from "next-intl";
import { Mail, Phone, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "@/components/layout/logo";

const NAV_KEYS = ["features", "pricing", "results", "teachers", "faq"] as const;
const NAV_HREF: Record<(typeof NAV_KEYS)[number], string> = {
  features: "#features",
  pricing: "#pricing",
  results: "#results",
  teachers: "#teachers",
  faq: "#faq",
};

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-paper-dark bg-ink text-paper/80">
      <div className="mx-auto grid max-w-container gap-10 container-px py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo mark="light" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
            {t("tagline")}
          </p>
          <div className="mt-4 flex items-center gap-1.5 text-xs text-paper/50">
            <ShieldCheck className="h-4 w-4 text-brandgreen" />
            {t("sslNote")}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-paper">{t("menuTitle")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_KEYS.map((key) => (
              <li key={key}>
                <a href={NAV_HREF[key]} className="text-paper/60 transition-colors hover:text-brandgreen cursor-pointer">
                  {tNav(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-paper">{t("contactTitle")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="mailto:bridgealash@gmail.com" className="flex items-center gap-2 text-paper/60 transition-colors hover:text-brandgreen cursor-pointer">
                <Mail className="h-4 w-4" /> bridgealash@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+77763011110" className="flex items-center gap-2 text-paper/60 transition-colors hover:text-brandgreen cursor-pointer">
                <Phone className="h-4 w-4" /> +7 776 301 1110
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold text-paper">{t("legalTitle")}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/privacy" className="text-paper/60 transition-colors hover:text-brandgreen cursor-pointer">
                {t("privacy")}
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-paper/60 transition-colors hover:text-brandgreen cursor-pointer">
                {t("terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/10 py-5 text-center text-xs text-paper/40">
        © {year} ALASH BRIDGE. {t("rights")}
      </div>
    </footer>
  );
}
