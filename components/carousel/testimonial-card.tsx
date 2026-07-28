"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Play, Mic, Quote, TrendingUp } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialCard({ item }: { item: Testimonial }) {
  const locale = useLocale() as "kk" | "ru";
  const t = useTranslations("results");
  const quote = item.quote[locale];

  const badge = (
    <div className="flex items-center gap-1.5 rounded-full bg-gold/15 px-2.5 py-1 text-[11px] font-semibold text-gold">
      <TrendingUp className="h-3 w-3" />
      {item.before} → {item.after} {t("grantBadge")}
    </div>
  );

  if (item.type === "written") {
    return (
      <div className="flex h-full flex-col rounded-card border border-ink/8 bg-white p-6 shadow-sm">
        <Quote className="h-6 w-6 text-emerald/30" />
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{quote}</p>
        <div className="mt-5 flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image src={item.photo} alt={item.name} fill sizes="44px" className="object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{item.name}</p>
            <p className="text-xs text-ink/45">{t("period")}</p>
          </div>
        </div>
        <div className="mt-3">{badge}</div>
      </div>
    );
  }

  const comingSoonLabel = item.type === "video" ? t("comingSoonVideo") : t("comingSoonAudio");

  return (
    <Dialog>
      <DialogTriggerCard item={item} badge={badge} quote={quote} />
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{item.name}</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-3 rounded-xl bg-paper-dark px-4 py-10 text-center">
          {item.type === "video" ? (
            <Play className="h-8 w-8 text-emerald/40" />
          ) : (
            <Mic className="h-8 w-8 text-emerald/40" />
          )}
          <p className="text-sm font-medium text-ink/60">{comingSoonLabel}</p>
        </div>
        <p className="text-sm leading-relaxed text-ink/70">{quote}</p>
      </DialogContent>
    </Dialog>
  );
}

function DialogTriggerCard({
  item,
  badge,
  quote,
}: {
  item: Testimonial;
  badge: React.ReactNode;
  quote: string;
}) {
  const t = useTranslations("results");
  return (
    <DialogTrigger
      className="group flex h-full w-full flex-col overflow-hidden rounded-card border border-ink/8 bg-white text-left shadow-sm transition-shadow hover:shadow-md cursor-pointer"
      aria-label={t("play")}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink">
        <Image
          src={item.photo}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 85vw, 33vw"
          className="object-cover opacity-80 transition-opacity group-hover:opacity-60"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-emerald shadow-lg">
            {item.type === "video" ? <Play className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </span>
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm font-semibold text-ink">{item.name}</p>
        <p className="mt-2 line-clamp-2 flex-1 text-xs leading-relaxed text-ink/55">
          {quote}
        </p>
        <div className="mt-3">{badge}</div>
      </div>
    </DialogTrigger>
  );
}
