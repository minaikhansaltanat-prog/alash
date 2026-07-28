"use client";

import { useTranslations } from "next-intl";

const WHATSAPP_URL = "https://wa.me/77763011110";

export function WhatsAppButton() {
  const t = useTranslations("whatsapp");

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("label")}
      title={t("label")}
      className="group fixed bottom-6 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform cursor-pointer hover:scale-105 motion-reduce:hover:scale-100 sm:bottom-8 sm:right-8"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] motion-safe:animate-pulse-ring"
      />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-white" aria-hidden="true">
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.393.71 4.62 1.93 6.49L4.5 28.5l7.2-1.89A11.93 11.93 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.9c-1.98 0-3.83-.55-5.41-1.5l-.39-.23-4.28 1.12 1.14-4.17-.25-.43A9.9 9.9 0 0 1 5.1 15c0-5.46 4.44-9.9 9.9-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9Zm5.4-7.42c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.63.08-.3-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.73-1.63-2.03-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.75-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
