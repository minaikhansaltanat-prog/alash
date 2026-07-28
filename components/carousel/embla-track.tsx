"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmblaTrackProps {
  slides: ReactNode[];
  ariaLabel: string;
}

export function EmblaTrack({ slides, ariaLabel }: EmblaTrackProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: false, skipSnaps: false },
    [Autoplay({ delay: 3600, stopOnInteraction: false, stopOnMouseEnter: true })]
  );
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef} role="region" aria-label={ariaLabel}>
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-0 shrink-0 grow-0 basis-[85%] pl-4 first:pl-0 sm:basis-[60%] lg:basis-[33%]"
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => emblaApi?.scrollPrev()}
        disabled={!canScrollPrev}
        className={cn(
          "absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-ink/10 bg-white p-2.5 text-ink shadow-md transition-opacity cursor-pointer sm:flex",
          "hover:bg-emerald hover:text-paper disabled:cursor-not-allowed disabled:opacity-30"
        )}
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => emblaApi?.scrollNext()}
        disabled={!canScrollNext}
        className={cn(
          "absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-ink/10 bg-white p-2.5 text-ink shadow-md transition-opacity cursor-pointer sm:flex",
          "hover:bg-emerald hover:text-paper disabled:cursor-not-allowed disabled:opacity-30"
        )}
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-5 flex justify-center gap-3 sm:hidden">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => emblaApi?.scrollPrev()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-sm cursor-pointer"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => emblaApi?.scrollNext()}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink shadow-sm cursor-pointer"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
