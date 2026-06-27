"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { GitHubIcon } from "@/components/icons/SocialIcons";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeImage, setActiveImage] = useState(0);
  const images = project?.images?.length ? project.images : project?.image ? [project.image] : [];

  useEffect(() => {
    setActiveImage(0);
  }, [project?.name]);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setActiveImage((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActiveImage((i) => (i - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose, images.length]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] flex items-end justify-center bg-black/85 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            className="relative flex max-h-[94dvh] w-full max-w-5xl flex-col overflow-hidden rounded-t-xl border border-white/10 bg-[#0a0a0a] sm:rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="absolute right-4 top-4 z-20 rounded-full border border-white/15 bg-black/70 p-2 text-white/70 transition hover:text-white"
            >
              <X size={18} />
            </button>

            {/* Gallery */}
            {images.length > 0 && (
              <div className="relative shrink-0 border-b border-white/10 bg-black">
                <div className="relative aspect-video w-full bg-neutral-950">
                  <Image
                    src={images[activeImage]}
                    alt={`${project.name} screenshot ${activeImage + 1}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 900px"
                    unoptimized={images[activeImage].startsWith("http")}
                  />
                </div>
                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label="Previous image"
                      onClick={() => setActiveImage((i) => (i - 1 + images.length) % images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white/70 hover:text-white"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Next image"
                      onClick={() => setActiveImage((i) => (i + 1) % images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/60 p-2 text-white/70 hover:text-white"
                    >
                      <ChevronRight size={18} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                      {images.map((img, i) => (
                        <button
                          key={img}
                          type="button"
                          aria-label={`View image ${i + 1}`}
                          onClick={() => setActiveImage(i)}
                          className={cn(
                            "h-1.5 rounded-full transition-all",
                            i === activeImage ? "w-6 bg-[var(--gold)]" : "w-1.5 bg-white/30"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Content */}
            <div className="overflow-y-auto p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  {project.tier && (
                    <span className="text-[10px] tracking-[0.25em] text-gold uppercase">{project.tier}</span>
                  )}
                  <h3 className="font-display mt-2 text-3xl tracking-wide text-white uppercase sm:text-4xl">
                    {project.name}
                  </h3>
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/15 px-4 py-2 text-xs tracking-wider text-white/70 uppercase transition hover:border-[var(--gold)]/40 hover:text-gold"
                    >
                      <GitHubIcon size={14} />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white px-4 py-2 text-xs font-semibold tracking-wider text-black uppercase"
                    >
                      Live
                      <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </div>

              <p className="body-lg mt-5 max-w-3xl">{project.overview ?? project.description}</p>

              {project.highlights && project.highlights.length > 0 && (
                <ul className="mt-6 space-y-2.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-sm text-white/60">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--gold)]" />
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <span key={s} className="tag !border-white/15 !text-white/55">
                    {s}
                  </span>
                ))}
              </div>

              {images.length > 1 && (
                <div className="mt-8 grid grid-cols-4 gap-2 sm:grid-cols-6">
                  {images.map((img, i) => (
                    <button
                      key={img}
                      type="button"
                      onClick={() => setActiveImage(i)}
                      className={cn(
                        "relative aspect-video overflow-hidden rounded border transition",
                        i === activeImage ? "border-[var(--gold)]" : "border-white/10 opacity-60 hover:opacity-100"
                      )}
                    >
                      <Image
                        src={img}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="80px"
                        unoptimized={img.startsWith("http")}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
