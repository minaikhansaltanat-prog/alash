import { cn } from "@/lib/utils";

export function Logo({ className, mark = "dark" }: { className?: string; mark?: "dark" | "light" }) {
  const inkColor = mark === "dark" ? "#0E5C4A" : "#F7F4EE";
  const textColor = mark === "dark" ? "text-ink" : "text-paper";

  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M4 24V14C4 8.47715 8.47715 4 14 4H16C21.5228 4 26 8.47715 26 14V24"
          stroke={inkColor}
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path d="M4 24H26" stroke="#C9A227" strokeWidth="3.2" strokeLinecap="round" />
      </svg>
      <span className={cn("font-heading text-[17px] font-semibold leading-none tracking-tight", textColor)}>
        ALASH
        <span className="block text-[9px] font-sans font-bold tracking-[0.3em] text-brandgreen">
          BRIDGE
        </span>
      </span>
    </span>
  );
}
