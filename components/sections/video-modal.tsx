"use client";

import { useTranslations } from "next-intl";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Swap the placeholder block below for a real <video> or embedded
// player once the presentation video is ready — the trigger and
// dialog chrome stay as-is.
export function VideoModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const t = useTranslations("hero");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl overflow-hidden border-none bg-ink p-0 sm:rounded-card">
        <DialogHeader className="px-5 pt-5">
          <DialogTitle className="font-heading text-paper">{t("videoModalTitle")}</DialogTitle>
        </DialogHeader>
        <div className="mx-5 mb-5 mt-3 flex aspect-video items-center justify-center rounded-xl border border-paper/10 bg-gradient-to-br from-emerald to-ink">
          <div className="flex flex-col items-center gap-3 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-paper/10">
              <Play className="h-7 w-7 fill-paper text-paper" />
            </span>
            <p className="max-w-xs text-sm text-paper/60">{t("videoModalNote")}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
