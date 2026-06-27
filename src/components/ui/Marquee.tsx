"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="animate-marquee flex w-max gap-12">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-12 whitespace-nowrap text-xs tracking-[0.3em] text-white/30 uppercase"
          >
            {item}
            <span className="h-1 w-1 rounded-full bg-white/20" />
          </span>
        ))}
      </div>
    </div>
  );
}
