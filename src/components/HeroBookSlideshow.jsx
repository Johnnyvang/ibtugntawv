import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SLIDES = [
  {
    src: "/front.png",
    alt: "IB HAIV NEEG IB TUG NTAWV — front cover",
    label: "Main guide · front",
  },
  {
    src: "/back.png",
    alt: "IB HAIV NEEG IB TUG NTAWV — back cover",
    label: "Main guide · back",
  },
  {
    src: "/new.png",
    alt: "KAWM NTAWV HMOOB — cover",
    label: "Kawm Ntawv",
  },
];

const INTERVAL_MS = 4800;

export default function HeroBookSlideshow({ onOpen, fillColumn = false }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  const slide = SLIDES[index];

  const shell = fillColumn
    ? "flex h-full min-h-0 w-full flex-col"
    : "flex w-full max-w-[min(100%,380px)] flex-col items-center justify-center lg:max-w-[420px]";

  const frame = fillColumn
    ? "relative min-h-0 flex-1 overflow-hidden rounded-2xl border border-forest-700/80 bg-forest-900/50 shadow-xl shadow-black/30 ring-1 ring-white/5"
    : "relative aspect-[3/4] w-full overflow-hidden rounded-2xl border border-forest-700/80 bg-forest-900/50 shadow-2xl shadow-black/40 ring-1 ring-white/5";

  return (
    <div
      className={shell}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={frame}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={slide.src}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={
              fillColumn
                ? "absolute inset-0 flex items-center justify-center p-1"
                : "absolute inset-0"
            }
          >
            <button
              type="button"
              onClick={() => onOpen?.(slide.src, slide.alt)}
              className={`group relative flex focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                fillColumn
                  ? "h-full max-h-full w-full items-center justify-center"
                  : "h-full w-full"
              }`}
              aria-label={`Enlarge: ${slide.alt}`}
            >
              <img
                src={slide.src}
                alt=""
                className={
                  fillColumn
                    ? "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                    : "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                }
                draggable={false}
              />
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/90 to-transparent text-center text-xs font-medium text-forest-100/90 opacity-0 transition-opacity group-hover:opacity-100 ${
                  fillColumn ? "py-2 pt-8" : "py-4 pt-12"
                }`}
              >
                Click to enlarge
              </span>
            </button>
          </motion.div>
        </AnimatePresence>
      </div>

      <div
        className={`flex shrink-0 items-center justify-center gap-2 ${fillColumn ? "mt-2" : "mt-4"}`}
        role="group"
        aria-label="Slide indicators"
      >
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-current={i === index ? "true" : undefined}
            aria-label={`${s.label}${i === index ? " (current)" : ""}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-accent" : "w-2 bg-forest-600 hover:bg-forest-500"
            }`}
          />
        ))}
      </div>
      <p
        className={`shrink-0 text-center text-xs text-forest-100/50 ${fillColumn ? "mt-1 leading-tight" : "mt-2"}`}
      >
        {slide.label}
      </p>
    </div>
  );
}
