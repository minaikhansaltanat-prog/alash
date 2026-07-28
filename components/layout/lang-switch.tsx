"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LangSwitch({ className }: { className?: string }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex items-center rounded-full border border-ink/10 bg-white/60 p-0.5 text-xs font-semibold tracking-wide",
        className
      )}
      role="group"
      aria-label="Language switch"
    >
      {routing.locales.map((l) => (
        <button
          key={l}
          type="button"
          aria-pressed={locale === l}
          onClick={() => router.replace(pathname, { locale: l })}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors cursor-pointer",
            locale === l
              ? "bg-emerald text-paper"
              : "text-ink/60 hover:text-ink"
          )}
        >
          {l === "kk" ? "ҚАЗ" : "РУС"}
        </button>
      ))}
    </div>
  );
}
