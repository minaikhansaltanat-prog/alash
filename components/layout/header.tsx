"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowRight, Menu } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { LangSwitch } from "@/components/layout/lang-switch";

const NAV_KEYS = ["features", "pricing", "results", "teachers", "faq"] as const;
const NAV_HREF: Record<(typeof NAV_KEYS)[number], string> = {
  features: "#features",
  pricing: "#pricing",
  results: "#results",
  teachers: "#teachers",
  faq: "#faq",
};

export function Header() {
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-ink/10 bg-paper/95 backdrop-blur supports-backdrop-filter:bg-paper/80">
      <div className="mx-auto flex h-16 max-w-container items-center justify-between container-px">
        <Link href="/" aria-label="ALASH BRIDGE" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_KEYS.map((key) => (
            <a
              key={key}
              href={NAV_HREF[key]}
              className="text-xs font-bold uppercase tracking-wide text-ink/70 transition-colors hover:text-emerald cursor-pointer"
            >
              {t(key)}
            </a>
          ))}
        </nav>

        {/* Desktop right cluster */}
        <div className="hidden items-center gap-3 lg:flex">
          <LangSwitch />
          <button
            type="button"
            aria-disabled="true"
            title="Жақында / Скоро"
            className="rounded-full border border-ink/15 px-4 py-2 text-xs font-bold uppercase tracking-wide text-ink/50 cursor-not-allowed"
          >
            {t("login")}
          </button>
          <Button
            render={<a href="#hero-cta" />}
            nativeButton={false}
            size="lg"
            className="gap-1.5 rounded-full bg-brandgreen px-5 text-xs font-bold uppercase tracking-wide text-white hover:bg-brandgreen/90"
          >
            {t("freeTest")}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile: lang switch + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangSwitch />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              aria-label="Меню"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[85vw] max-w-xs flex-col bg-paper p-0">
              <SheetHeader className="border-b border-ink/10 px-5 py-4">
                <SheetTitle>
                  <Logo />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-1 flex-col gap-1 px-5 py-4">
                {NAV_KEYS.map((key) => (
                  <SheetClose
                    key={key}
                    render={<a href={NAV_HREF[key]} />}
                    nativeButton={false}
                    className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-emerald/5 hover:text-emerald cursor-pointer"
                  >
                    {t(key)}
                  </SheetClose>
                ))}
              </nav>
              <div className="flex flex-col gap-3 border-t border-ink/10 px-5 py-5">
                <SheetClose
                  render={<a href="#hero-cta" />}
                  nativeButton={false}
                  className="flex w-full items-center justify-center rounded-full bg-brandgreen px-5 py-3 text-base font-semibold text-white hover:bg-brandgreen/90 cursor-pointer"
                >
                  {t("freeTestFull")}
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
