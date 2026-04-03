import raw from "../data/donors.json";

/** Donors sorted by contribution (highest first). */
export function getDonorsSorted() {
  return [...raw].sort((a, b) => b.amountUsd - a.amountUsd);
}
