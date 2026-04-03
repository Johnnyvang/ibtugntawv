function formatUsd(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function DonorList({ donors, startRank = 1 }) {
  return (
    <ul className="divide-y divide-forest-800/80 rounded-xl border border-forest-800 bg-forest-900/40 overflow-hidden">
      {donors.map((d, i) => (
        <li
          key={d.id}
          className="flex flex-col gap-1 px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4"
        >
          <div className="flex items-baseline gap-3 min-w-0">
            <span className="shrink-0 font-mono text-xs tabular-nums text-accent/90">
              #{startRank + i}
            </span>
            <div className="min-w-0">
              <p className="font-medium text-forest-50 truncate">{d.name}</p>
              {d.note ? (
                <p className="text-xs text-forest-100/50 truncate">{d.note}</p>
              ) : null}
            </div>
          </div>
          <p className="shrink-0 text-sm font-semibold tabular-nums text-forest-100 sm:text-right">
            {formatUsd(d.amountUsd)}
          </p>
        </li>
      ))}
    </ul>
  );
}
