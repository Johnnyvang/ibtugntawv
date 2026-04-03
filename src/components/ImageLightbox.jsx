import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImageLightbox({ src, alt, onClose }) {
  useEffect(() => {
    if (!src) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged cover"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-forest-950/85 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close"
          />
          <motion.div
            className="relative max-h-[90vh] max-w-3xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 380, damping: 28 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute -right-2 -top-10 rounded-full border border-forest-700 bg-forest-900 px-3 py-1 text-xs font-medium text-forest-100 shadow-lg hover:bg-forest-800 sm:-right-3 sm:-top-3 sm:px-2 sm:py-2"
            >
              Close
            </button>
            <img
              src={src}
              alt={alt}
              className="max-h-[85vh] w-auto max-w-full rounded-lg border border-forest-700 object-contain shadow-2xl"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
