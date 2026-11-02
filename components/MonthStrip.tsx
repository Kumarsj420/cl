import type { MonthRating } from "@/content/types";

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const style: Record<MonthRating, { label: string; cell: string; mark: string }> = {
  best: { label: "Best", cell: "bg-yolk", mark: "●" },
  okay: { label: "Okay", cell: "bg-sky-100", mark: "◐" },
  avoid: { label: "Not ideal", cell: "bg-paper ring-1 ring-inset ring-line", mark: "○" },
};

/** A year at a glance. Each month carries a symbol as well as a colour. */
export function MonthStrip({ ratings }: { ratings: MonthRating[] }) {
  return (
    <div>
      <ol className="grid grid-cols-4 gap-1.5 sm:grid-cols-6 lg:grid-cols-12">
        {ratings.map((rating, index) => (
          <li key={months[index]} className={`rounded-md px-1 py-3 text-center ${style[rating].cell}`}>
            <span aria-hidden="true" className="block font-display font-bold">{months[index]}</span>
            <span aria-hidden="true" className="block text-sm">{style[rating].mark}</span>
            <span className="sr-only">{fullMonths[index]}: {style[rating].label}</span>
          </li>
        ))}
      </ol>
      <ul className="mt-3 flex flex-wrap gap-x-5 text-sm text-ink-soft" aria-hidden="true">
        {(Object.keys(style) as MonthRating[]).map((rating) => (
          <li key={rating}>{style[rating].mark} {style[rating].label}</li>
        ))}
      </ul>
    </div>
  );
}
