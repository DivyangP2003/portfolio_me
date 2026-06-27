"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { education, experience } from "@/lib/data";
import { cn } from "@/lib/utils";

function isHighlightMeta(text: string): boolean {
  return /cgpa|rank|%|9\.5|8\.3|94\.6|97\.4/i.test(text);
}

function MetaTag({ label }: { label: string }) {
  const highlighted = isHighlightMeta(label);
  return (
    <span
      className={cn(
        "tag",
        highlighted
          ? "!border-[var(--gold)]/45 !text-gold"
          : "!border-white/20 !text-white/70"
      )}
    >
      {label}
    </span>
  );
}

function TimelineColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-display mb-10 text-3xl tracking-[0.12em] text-white uppercase sm:text-4xl">
        <span className="text-gold">{title.split(" ")[0]}</span>
        {title.includes(" ") ? ` ${title.split(" ").slice(1).join(" ")}` : ""}
      </h3>
      <div className="relative space-y-0">{children}</div>
    </div>
  );
}

function TimelineItem({
  year,
  title,
  subtitle,
  meta,
  children,
  index,
  isLast,
}: {
  year: string;
  title: string;
  subtitle: string;
  meta?: string[];
  children?: React.ReactNode;
  index: number;
  isLast?: boolean;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {!isLast && (
        <span
          className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-[var(--gold)]/50 to-white/5"
          aria-hidden
        />
      )}
      <span className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-[var(--gold)]/50 bg-black">
        <span className="h-2 w-2 rounded-full bg-[var(--gold)]" />
      </span>

      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-display text-4xl leading-none text-gold/40 sm:text-5xl">{year}</span>
        <div className="min-w-0 flex-1">
          <h4 className="font-display text-xl tracking-wide text-white uppercase sm:text-2xl">{title}</h4>
          <p className="mt-1 text-sm text-white/50">{subtitle}</p>
        </div>
      </div>

      {meta && meta.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {meta.map((m) => (
            <MetaTag key={m} label={m} />
          ))}
        </div>
      )}

      {children && <div className="mt-4">{children}</div>}
    </motion.article>
  );
}

export default function Journey() {
  const eduSorted = [...education].sort((a, b) => b.sortYear - a.sortYear);
  const expSorted = [...experience].sort((a, b) => b.sortYear - a.sortYear);

  return (
    <section id="journey" className="section-padding section-alt">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="heading-section">
            Education & <span className="text-gold">Experience</span>
          </h2>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <TimelineColumn title="Education">
            {eduSorted.map((edu, i) => (
              <TimelineItem
                key={edu.degree + edu.period}
                year={edu.sortYear.toString()}
                title={edu.degree}
                subtitle={`${edu.institute}${edu.field ? ` · ${edu.field}` : ""}`}
                meta={[edu.period, edu.cgpa, edu.rank].filter(Boolean) as string[]}
                index={i}
                isLast={i === eduSorted.length - 1}
              >
                {edu.coursework && edu.coursework.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((c) => (
                      <span key={c} className="text-[11px] tracking-wide text-white/35 uppercase">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
              </TimelineItem>
            ))}
          </TimelineColumn>

          <TimelineColumn title="Experience">
            {expSorted.map((exp, i) => (
              <TimelineItem
                key={exp.company + exp.role}
                year={exp.sortYear.toString()}
                title={exp.role}
                subtitle={`${exp.company}${exp.location ? ` · ${exp.location}` : ""}`}
                meta={[exp.period, ...exp.tags.slice(0, 2)]}
                index={i}
                isLast={i === expSorted.length - 1}
              >
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li key={h} className="body-md !text-sm !text-white/55">
                      {h}
                    </li>
                  ))}
                </ul>
                {"report" in exp && exp.report && (
                  <a
                    href={exp.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs tracking-wider text-white/50 uppercase hover:text-white"
                  >
                    <FileText size={12} />
                    Internship Report
                  </a>
                )}
              </TimelineItem>
            ))}
          </TimelineColumn>
        </div>
      </div>
    </section>
  );
}
