// lib/useEmblaAutoplay.ts
import { useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

export function useEmblaAutoplay(
  embla: EmblaCarouselType | undefined,
  delay = 3000
) {
  useEffect(() => {
    if (!embla) return;

    const autoplay = () => {
      if (!embla.canScrollNext()) {
        embla.scrollTo(0);
      } else {
        embla.scrollNext();
      }
    };

    const interval = setInterval(autoplay, delay);

    return () => clearInterval(interval);
  }, [embla, delay]);
}
