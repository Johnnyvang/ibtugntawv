import { motion } from "framer-motion";

function formatUsd(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -10 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DonorList({ donors, startRank = 1, animated = false }) {
  const Wrapper = animated ? motion.ul : "ul";
  const Item = animated ? motion.li : "li";

  const wrapperProps = animated
    ? {
        initial: "hidden",
        animate: "show",
        variants: listVariants,
      }
    : {};

  const itemProps = animated ? { variants: rowVariants } : {};

  return (
    <Wrapper
      className="divide-y divide-forest-800/80 rounded-xl border border-forest-800 bg-forest-900/40 overflow-hidden"
      {...wrapperProps}
    >
      {donors.map((d, i) => (
        <Item
          key={d.id}
          className="flex flex-col gap-1 px-4 py-3.5 transition-colors duration-200 hover:bg-forest-800/35 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
          {...itemProps}
        >
          <div className="flex min-w-0 items-baseline gap-3">
            <span className="shrink-0 font-mono text-xs tabular-nums text-accent/90">
              #{startRank + i}
            </span>
            <div className="min-w-0">
              <p className="truncate font-medium text-forest-50">{d.name}</p>
              {d.note ? <p className="truncate text-xs text-forest-100/50">{d.note}</p> : null}
            </div>
          </div>
          <p className="shrink-0 text-sm font-semibold tabular-nums text-forest-100 sm:text-right">
            {formatUsd(d.amountUsd)}
          </p>
        </Item>
      ))}
    </Wrapper>
  );
}
