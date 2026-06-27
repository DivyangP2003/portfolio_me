"use client";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  mega?: boolean;
}

export default function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  className,
  mega = false,
}: SectionHeaderProps) {
  return (
    <div
      id={id}
      className={cn(
        "mb-12",
        align === "center" && "mx-auto text-center",
        !mega && "max-w-2xl",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className={mega ? "heading-mega" : "heading-section"}>{title}</h2>
      {description && (
        <p className={cn("body-lg mt-6", align === "center" && "mx-auto max-w-xl")}>{description}</p>
      )}
    </div>
  );
}
