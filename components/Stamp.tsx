import Image from "next/image";

const tilts = ["tilt-a", "tilt-b", "tilt-c", "tilt-d"];

/** A destination photo framed as a postage stamp. `value` sits where a stamp shows its price. */
export function Stamp({
  src,
  alt,
  index = 0,
  value,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  index?: number;
  value?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`stamp-shadow ${tilts[index % tilts.length]} ${className}`}>
      <div className="stamp">
        <div className="relative aspect-4/5 overflow-hidden bg-sky-100">
          <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
          {value ? (
            <span className="absolute top-2 right-2 rounded-sm bg-paper px-2 py-0.5 font-display text-sm font-bold text-ink tabular-nums">
              {value}
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
