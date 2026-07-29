import Image from "next/image";
import { cn } from "@/lib/utils";

// Source mark is 480x316px (cropped from the SS.png brand lockup).
const MARK_RATIO = 316 / 480;

export function Logo({ className, mark = "dark" }: { className?: string; mark?: "dark" | "light" }) {
  const textColor = mark === "dark" ? "text-ink" : "text-paper";
  const iconWidth = mark === "dark" ? 52 : 40;
  const iconHeight = Math.round(iconWidth * MARK_RATIO);

  const icon = (
    <Image
      src="/logo/mark.png"
      alt=""
      width={iconWidth}
      height={iconHeight}
      priority
      className="shrink-0 object-contain"
    />
  );

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {mark === "light" ? (
        <span className="flex shrink-0 items-center justify-center rounded-xl bg-paper p-1.5 shadow-sm">
          {icon}
        </span>
      ) : (
        icon
      )}
      <span className={cn("font-heading text-[17px] font-semibold leading-none tracking-tight", textColor)}>
        ALASH
        <span
          className={cn(
            "block text-[9px] font-sans font-bold tracking-[0.3em]",
            mark === "dark" ? "text-brandgreen" : "text-gold"
          )}
        >
          BRIDGE
        </span>
      </span>
    </span>
  );
}
