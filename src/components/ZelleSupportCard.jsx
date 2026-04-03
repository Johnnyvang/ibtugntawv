import { useState } from "react";
import { motion } from "framer-motion";
import CopyField from "./CopyField";

const ZELLE_EMAIL = "dablaugzaj@gmail.com";
const ZELLE_QR = "/zelle.png";
const QR_FALLBACK = "/zelle-qr-placeholder.svg";

export default function ZelleSupportCard({ reduceMotion }) {
  const [qrSrc, setQrSrc] = useState(ZELLE_QR);

  function handleQrError() {
    setQrSrc((prev) => (prev === ZELLE_QR ? QR_FALLBACK : prev));
  }

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { y: -2 }}
      className="rounded-2xl border border-forest-800 bg-forest-900/40 p-5 transition-colors hover:border-forest-700 sm:p-6"
    >
      <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">Zelle</h3>
      <p className="mt-2 text-sm leading-relaxed text-forest-100/80">
        Become a supporter: scan the QR code in your banking app (Zelle), or send to the email
        below.
      </p>

      <div className="mt-6 grid gap-8 sm:grid-cols-[auto,minmax(0,1fr)] sm:items-center sm:gap-10">
        <div className="flex flex-col items-center sm:items-start">
          <div className="rounded-xl bg-white p-3 shadow-inner ring-1 ring-black/5">
            <img
              src={qrSrc}
              alt="Zelle QR code for payment"
              width={208}
              height={208}
              className="h-44 w-44 object-contain sm:h-52 sm:w-52"
              onError={handleQrError}
              loading="lazy"
            />
          </div>
          <p className="mt-2 max-w-[14rem] text-center text-xs leading-snug text-forest-100/50 sm:text-left">
            Zelle app or your bank&apos;s Zelle screen → scan QR
          </p>
        </div>

        <div className="min-w-0 border-t border-forest-800/80 pt-6 sm:border-l sm:border-t-0 sm:pl-8 sm:pt-0">
          <CopyField embedded label="Zelle email" value={ZELLE_EMAIL} />
        </div>
      </div>
    </motion.div>
  );
}
