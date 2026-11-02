"use client";

import Link from "next/link";
import { useState } from "react";
import { Stamp } from "./Stamp";
import type { Mood } from "@/content/types";

export type ExplorerItem = { slug: string; name: string; blurb: string; moods: Mood[]; src: string; alt: string; trips: number };

const chips: { id: Mood | "all"; label: string }[] = [
  { id: "all", label: "Show me everything" },
  { id: "snow", label: "Snow" },
  { id: "mountains", label: "Mountains" },
  { id: "beach", label: "Beaches" },
  { id: "culture", label: "Forts and temples" },
  { id: "wildlife", label: "Wildlife" },
  { id: "honeymoon", label: "Honeymoon" },
  { id: "family", label: "With family" },
  { id: "abroad", label: "Abroad" },
];

/** Destinations as a sheet of stamps, narrowed by what the traveller is in the mood for. */
export function DestinationExplorer({ items }: { items: ExplorerItem[] }) {
  const [mood, setMood] = useState<Mood | "all">("all");
  const shown = mood === "all" ? items : items.filter((item) => item.moods.includes(mood));

  return (
    <div>
      <div role="group" aria-label="Filter destinations by mood" className="flex flex-wrap gap-2">
        {chips.map((chip) => (
          <button
            key={chip.id}
            type="button"
            aria-pressed={mood === chip.id}
            onClick={() => setMood(chip.id)}
            className="min-h-11 cursor-pointer rounded-full bg-paper px-4 font-medium ring-1 ring-inset ring-field transition-transform duration-150 ease-bounce hover:-translate-y-0.5 aria-pressed:bg-ink aria-pressed:text-paper"
          >
            {chip.label}
          </button>
        ))}
      </div>
      <p role="status" className="mt-4 text-ink-soft">{shown.length} {shown.length === 1 ? "destination" : "destinations"}</p>
      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-4">
        {shown.map((item, index) => (
          <li key={item.slug}>
            <Link href={`/${item.slug}`} className="group block rounded-md">
              <Stamp src={item.src} alt="" index={index} value={`${item.trips} trips`} sizes="(min-width: 1024px) 270px, (min-width: 768px) 30vw, 46vw" />
              <span className="mt-4 block font-display text-xl font-bold group-hover:underline">{item.name}</span>
              <span className="mt-0.5 block text-ink-soft">{item.blurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
