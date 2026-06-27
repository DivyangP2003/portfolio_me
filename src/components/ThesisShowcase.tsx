"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  FlaskConical,
  X,
  ChevronRight,
  BookOpen,
  Layers,
  BarChart3,
  ImageIcon,
} from "lucide-react";
import { thesis } from "@/lib/data";
import { cn } from "@/lib/utils";

type Tab = "overview" | "simulation" | "methodology" | "results" | "figures";

const tabs: { id: Tab; label: string; icon: typeof BookOpen }[] = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "simulation", label: "Simulation", icon: FlaskConical },
  { id: "methodology", label: "Methodology", icon: Layers },
  { id: "results", label: "Results", icon: BarChart3 },
  { id: "figures", label: "Figures", icon: ImageIcon },
];

export default function ThesisShowcase() {
  const [tab, setTab] = useState<Tab>("overview");
  const [lightbox, setLightbox] = useState<(typeof thesis.figures)[0] | null>(null);
  const [figFilter, setFigFilter] = useState<string>("all");

  const filteredFigures =
    figFilter === "all"
      ? thesis.figures
      : thesis.figures.filter((f) => f.category === figFilter);

  return (
    <section id="research" className="section-padding bg-black">
      <div className="section-divider mb-16" />
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-mega mb-6"
        >
          <span className="text-gold">Research</span>
        </motion.h2>
        <p className="body-lg mb-14 max-w-2xl">
          M.Tech thesis — coupled WRF-Chem-Fire simulation of the 2024 Uttarakhand wildfire.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-light mb-10 p-7 sm:p-9"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.3em] text-neutral-400 uppercase">
                <FlaskConical size={13} />
                {thesis.meta.degree}
              </span>
              <h3 className="heading-card mt-4 text-xl sm:text-2xl">{thesis.title}</h3>
              <p className="mt-2 text-sm font-medium text-neutral-500">{thesis.subtitle}</p>
              <p className="body-on-light mt-5 text-sm">{thesis.abstract}</p>
            </div>
            <a
              href={thesis.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary shrink-0 !bg-black !text-white"
            >
              <Download size={16} />
              Download
              <ChevronRight size={14} />
            </a>
          </div>
        </motion.div>

        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {thesis.keyMetrics.map((m) => (
            <div key={m.label} className="card-dark p-4 text-center">
              <p className="font-display text-2xl text-gold">{m.value}</p>
              <p className="mt-1.5 text-[10px] leading-snug text-white/40">{m.label}</p>
            </div>
          ))}
        </div>

        {"simulationVideo" in thesis && thesis.simulationVideo && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mb-12 overflow-hidden rounded-lg border border-white/10 bg-black"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-orange-950/40 via-transparent to-emerald-950/30 pointer-events-none z-10" />
            <div className="flex flex-col gap-0 lg:flex-row">
              <div className="relative aspect-video w-full lg:w-2/3">
                <video
                  src={thesis.simulationVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1.5 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                  </span>
                  <span className="text-[10px] tracking-[0.25em] text-white/80 uppercase">Live Simulation</span>
                </div>
              </div>
              <div className="relative z-20 flex flex-col justify-center border-t border-white/10 p-7 lg:w-1/3 lg:border-t-0 lg:border-l">
                <p className="eyebrow mb-3 text-gold">Fire Spread Dynamics</p>
                <h4 className="font-display text-2xl tracking-wide text-white uppercase">
                  WRF-Chem-Fire FEMISS Run
                </h4>
                <p className="body-md mt-4 !text-sm">
                  {"simulationCaption" in thesis && thesis.simulationCaption
                    ? thesis.simulationCaption
                    : "Process-based wildfire spread simulation over complex Himalayan terrain."}
                </p>
                <p className="mt-6 text-xs tracking-wider text-white/35 uppercase">
                  ~470 km² burnt area · Phase 4 results
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <div className="mb-8 flex flex-wrap gap-4">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTab(t.id)}
              className={cn(
                "flex items-center gap-2 text-xs tracking-[0.15em] uppercase transition",
                tab === t.id ? "text-gold" : "text-white/35 hover:text-white/65"
              )}
            >
              <t.icon size={14} />
              {t.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "overview" && (
            <motion.div key="overview" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {thesis.conclusions.map((c, i) => (
                  <div key={c} className="card-dark flex gap-4 p-5">
                    <span className="font-mono text-sm text-white/30">{String(i + 1).padStart(2, "0")}</span>
                    <p className="body-md !text-white/60">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "simulation" && "simulationVideo" in thesis && thesis.simulationVideo && (
            <motion.div
              key="simulation"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              <div className="card-dark overflow-hidden">
                <video
                  src={thesis.simulationVideo}
                  controls
                  loop
                  playsInline
                  className="aspect-video w-full bg-black object-contain"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {thesis.phases
                  .filter((p) => p.id === "phase4")
                  .map((p) => (
                    <div key={p.id} className="card-dark p-6">
                      <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">{p.phase}</span>
                      <h5 className="mt-2 font-medium text-white">{p.title}</h5>
                      <p className="body-md mt-3 !text-sm">{p.description}</p>
                    </div>
                  ))}
                {thesis.conclusions.slice(-2).map((c) => (
                  <div key={c} className="card-dark p-6">
                    <p className="body-md !text-sm">{c}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "methodology" && (
            <motion.div key="methodology" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-4">
                {thesis.phases.map((p, i) => (
                  <div key={p.id} className="card-dark p-5">
                    <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">{p.phase}</span>
                    <h5 className="mt-2 font-medium text-white">{p.title}</h5>
                    <p className="body-md mt-2 !text-sm">{p.description}</p>
                  </div>
                ))}
              </div>
              <div className="card-light overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 bg-neutral-50 text-left text-[10px] tracking-[0.2em] text-neutral-400 uppercase">
                      <th className="px-5 py-3">Dataset</th>
                      <th className="px-5 py-3">Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    {thesis.datasets.map((d) => (
                      <tr key={d.name} className="border-b border-neutral-100">
                        <td className="px-5 py-3 font-medium text-black">{d.name}</td>
                        <td className="body-on-light px-5 py-3 text-xs">{d.use}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {tab === "results" && (
            <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {thesis.phases.slice(2).map((p) => (
                  <div key={p.id} className="card-dark p-6">
                    <span className="text-[10px] tracking-[0.2em] text-white/35 uppercase">{p.phase}</span>
                    <h5 className="mt-2 font-medium text-white">{p.title}</h5>
                    <p className="body-md mt-3 !text-sm">{p.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {tab === "figures" && (
            <motion.div key="figures" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="mb-6 flex flex-wrap gap-3">
                {["all", "context", "methodology", "validation", "results"].map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setFigFilter(f)}
                    className={cn(
                      "text-xs tracking-[0.15em] capitalize uppercase transition",
                      figFilter === f ? "text-white" : "text-white/35"
                    )}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredFigures.map((fig) => (
                  <button
                    key={fig.src}
                    type="button"
                    onClick={() => setLightbox(fig)}
                    className="card-dark group overflow-hidden text-left"
                  >
                    <div className="relative aspect-[4/3] bg-neutral-900">
                      <Image src={fig.src} alt={fig.caption} fill className="object-contain p-2" sizes="33vw" />
                    </div>
                    <p className="p-4 text-xs text-white/45 group-hover:text-white/70">{fig.caption}</p>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setLightbox(null)}
          >
            <button type="button" aria-label="Close" className="absolute right-5 top-5 rounded-full bg-white p-2" onClick={() => setLightbox(null)}>
              <X size={20} />
            </button>
            <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="card-light max-w-5xl p-4" onClick={(e) => e.stopPropagation()}>
              <Image src={lightbox.src} alt={lightbox.caption} width={1200} height={900} className="max-h-[75vh] w-auto object-contain" />
              <p className="body-on-light mt-4 text-center text-sm">{lightbox.caption}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
