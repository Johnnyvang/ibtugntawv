import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as: Component = motion.div,
}) {
  const reduce = useReducedMotion();

  return (
    <Component
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px 0px" }}
      transition={{
        duration: reduce ? 0 : 0.5,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
