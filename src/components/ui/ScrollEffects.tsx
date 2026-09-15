"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollEffects — drives three premium scroll behaviours:
 *
 *  1. **Scroll Progress Bar** — a thin orange gradient line fixed at the
 *     very top of the viewport that fills left→right as the user scrolls.
 *
 *  2. **Parallax via CSS custom property** — sets `--scroll-offset` on the
 *     documentElement so any element with the `parallax-slow` or
 *     `parallax-fast` class automatically translates.
 *
 *  3. **Section Reveal** — observes every `.section-reveal` element and
 *     toggles the `.visible` class when it enters the viewport.
 */
export function ScrollEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    /* ── Intersection Observer for section reveals ─── */
    const revealEls = document.querySelectorAll(".section-reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => observer.observe(el));

    /* ── Scroll handler (rAF‑throttled) ─── */
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? scrollY / docHeight : 0;

        // 1. progress bar
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${progress})`;
        }

        // 2. parallax custom property
        document.documentElement.style.setProperty(
          "--scroll-offset",
          String(scrollY)
        );

        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // init

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="scroll-progress"
      style={{ transform: "scaleX(0)" }}
    />
  );
}
