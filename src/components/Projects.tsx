"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import {
  allProjects,
  categoryFilters,
  getProjectImage,
  type ProjectCategory,
  type Project,
} from "@/lib/data";
import ProjectDetailModal from "./ProjectDetailModal";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

const gradients: Record<string, string> = {
  fullstack: "from-indigo-950/70 via-violet-900/50 to-purple-950/70",
  ai: "from-teal-950/70 via-cyan-900/50 to-emerald-950/70",
  data: "from-blue-950/70 via-slate-900/50 to-indigo-950/70",
  civil: "from-orange-950/70 via-amber-900/50 to-red-950/70",
  research: "from-emerald-950/70 via-green-900/50 to-teal-950/70",
};

function EditorialCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  const grad = gradients[project.category] ?? "from-neutral-950/70 to-neutral-900/70";
  const imageSrc = getProjectImage(project);
  const isRemote = imageSrc.startsWith("http");

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="project-card-editorial group cursor-pointer"
      onClick={() => onOpen(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(project)}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${project.name} preview`}
          fill
          className="object-cover object-top transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
          unoptimized={isRemote}
        />
        <div className={cn("absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 opacity-80", grad)} />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col justify-end p-7 sm:p-9">
        {project.tier && (
          <span className="mb-3 w-fit text-[10px] tracking-[0.25em] text-gold/80 uppercase">{project.tier}</span>
        )}
        <h3 className="font-display text-3xl leading-none tracking-wide text-white uppercase sm:text-4xl lg:text-5xl">
          {project.name}
        </h3>
        <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-white/70 sm:text-base">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((s) => (
            <span key={s} className="text-[10px] tracking-wider text-white/45 uppercase">
              {s}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase group-hover:text-gold">
            Click to explore
          </span>
          <div className="flex items-center gap-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white"
                onClick={(e) => e.stopPropagation()}
                aria-label="GitHub"
              >
                <GitHubIcon size={16} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white"
                onClick={(e) => e.stopPropagation()}
                aria-label="Live demo"
              >
                <ExternalLink size={16} />
              </a>
            )}
            <ArrowUpRight size={18} className="text-gold/60 group-hover:text-gold" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered =
    filter === "all" ? allProjects : allProjects.filter((p) => p.category === filter);

  const display = filtered.filter((p) => p.featured);
  const shown = display.length > 0 ? display : filtered;

  return (
    <section id="projects" className="section-padding bg-black">
      <div className="section-container">
        <SectionHeader title="Projects" mega align="left" className="mb-16" />

        <div className="mb-12 flex flex-wrap gap-3">
          {categoryFilters.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setFilter(cat.key)}
              className={cn(
                "text-xs tracking-[0.2em] uppercase transition-colors",
                filter === cat.key ? "text-gold" : "text-white/35 hover:text-white/65"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
          >
            {shown.map((p) => (
              <EditorialCard key={p.name} project={p} onOpen={setSelected} />
            ))}
          </motion.div>
        </AnimatePresence>

        <p className="body-md mt-14 text-center">
          {shown.length} projects ·{" "}
          <a
            href="https://github.com/DivyangP2003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 underline underline-offset-4 hover:text-gold"
          >
            View all on GitHub
          </a>
        </p>
      </div>

      <ProjectDetailModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
