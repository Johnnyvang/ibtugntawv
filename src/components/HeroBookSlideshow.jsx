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
const SLIDE_PX = 26;

const slideTransition = {
  duration: 0.32,
  ease: [0.32, 0.72, 0, 1],
};

const variants = {
  enter: (dir) => ({
    x: dir * SLIDE_PX,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir) => ({
    x: dir * -SLIDE_PX,
    opacity: 0,
  }),
};

function stepDirection(from, to, len) {
  if (from === to) return 1;
  const forward = (to - from + len) % len;
  const backward = (from - to + len) % len;
  return forward <= backward ? 1 : -1;
}

function SlideImageButton({ slide, fillColumn, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen?.(slide.src, slide.alt)}
      className={`group relative flex focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/35 focus-visible:ring-offset-1 focus-visible:ring-offset-forest-950 ${
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
            ? "max-h-full max-w-full object-contain drop-shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            : "h-full w-full object-cover drop-shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        }
        draggable={false}
      />
      <span
        className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-950/75 to-transparent text-center text-xs font-medium text-forest-100/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
          fillColumn ? "py-2 pt-8" : "py-4 pt-12"
        }`}
      >
        Click to enlarge
      </span>
    </button>
  );
}

export default function HeroBookSlideshow({ onOpen, fillColumn = false }) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  const goToSlide = (i) => {
    if (i === index) return;
    setDirection(stepDirection(index, i, SLIDES.length));
    setIndex(i);
  };

  const slide = SLIDES[index];

  const shell = fillColumn
    ? "flex h-full min-h-0 w-full flex-col"
    : "flex w-full max-w-[min(100%,380px)] flex-col items-center justify-center lg:max-w-[420px]";

  const frame = fillColumn
    ? "relative min-h-0 flex-1 overflow-hidden rounded-lg"
    : "relative aspect-[3/4] w-full overflow-hidden rounded-lg";

  return (
    <div
      className={shell}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={frame}>
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          {reduceMotion ? (
            <motion.div
              key={slide.src}
              className={
                fillColumn
                  ? "absolute inset-0 flex items-center justify-center"
                  : "absolute inset-0"
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
            >
              <SlideImageButton slide={slide} fillColumn={fillColumn} onOpen={onOpen} />
            </motion.div>
          ) : (
            <motion.div
              key={slide.src}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={slideTransition}
              className={
                fillColumn
                  ? "absolute inset-0 flex items-center justify-center"
                  : "absolute inset-0"
              }
            >
              <SlideImageButton slide={slide} fillColumn={fillColumn} onOpen={onOpen} />
            </motion.div>
          )}
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
            onClick={() => goToSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ease-out ${
              i === index ? "w-7 bg-accent/90" : "w-1.5 bg-forest-600/80 hover:bg-forest-500"
            }`}
          />
        ))}
      </div>
      <p
        className={`shrink-0 text-center text-xs text-forest-100/45 ${fillColumn ? "mt-1 leading-tight" : "mt-2"}`}
      >
        {slide.label}
      </p>
    </div>
  );
}
