import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CopyField({ label, value, mono = true, embedded = false }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      className={
        embedded
          ? ""
          : "rounded-xl border border-forest-800 bg-forest-900/40 p-5 transition-colors hover:border-forest-700 hover:bg-forest-900/60"
      }
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">{label}</h3>
      <div className={`flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${embedded ? "mt-2" : "mt-3"}`}>
        <p className={`min-w-0 break-all text-forest-50 ${mono ? "font-mono text-sm" : ""}`}>
          {value}
        </p>
        <button
          type="button"
          onClick={copy}
          className="shrink-0 rounded-lg border border-forest-600 bg-forest-800/80 px-3 py-1.5 text-xs font-semibold text-forest-50 transition hover:border-accent/50 hover:bg-forest-700"
        >
          Copy
        </button>
      </div>
      <AnimatePresence>
        {copied ? (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-xs font-medium text-accent"
          >
            Copied to clipboard
          </motion.p>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
