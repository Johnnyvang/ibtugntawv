import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import DonorList from "../components/DonorList";
import Reveal from "../components/Reveal";
import { getDonorsSorted } from "../lib/donors";

const PAGE_SIZE = 10;

export default function Donors() {
  const all = useMemo(() => getDonorsSorted(), []);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const slice = all.slice(0, visible);
  const hasMore = visible < all.length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
      <Reveal>
        <Link
          to="/"
          className="inline-flex text-sm text-accent hover:underline underline-offset-2"
        >
          ← Back to home
        </Link>
        <h1 className="mt-6 font-display text-3xl font-semibold text-forest-50 sm:text-4xl">
          Supporters
        </h1>
        <p className="mt-3 max-w-2xl text-forest-100/75">
          We are grateful to everyone who helps bring these books to our communities. Names are
          ordered by contribution amount (highest first). Update the list in{" "}
          <code className="rounded bg-forest-800 px-1.5 py-0.5 text-xs text-forest-100/90">
            src/data/donors.json
          </code>{" "}
          as new supporters join.
        </p>
      </Reveal>

      <div className="mt-10">
        <DonorList donors={slice} startRank={1} />
      </div>

      {hasMore ? (
        <div className="mt-8 flex justify-center">
          <motion.button
            type="button"
            onClick={() => setVisible((v) => Math.min(v + PAGE_SIZE, all.length))}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-forest-950 shadow-lg shadow-accent/15 transition hover:bg-accent-soft"
          >
            Load more
          </motion.button>
        </div>
      ) : (
        <p className="mt-8 text-center text-sm text-forest-100/50">You have reached the end of the list.</p>
      )}
    </div>
  );
}
