"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Mail, Award } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { profile, metrics, leadership } from "@/lib/data";

export default function About() {
  const portraitSrc = profile.imageCutout ?? profile.image;

  return (
    <section id="about" className="relative section-padding overflow-hidden bg-black">
      <div className="about-grid-bg pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-0 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(201,169,98,0.12),transparent_70%)] blur-3xl"
        aria-hidden
      />

      <div className="section-container relative">
        <div className="mb-14 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="heading-section"
          >
            About Me
          </motion.h2>
        </div>

        {/* Portrait + bio — same row height */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="about-portrait-wrap about-card relative lg:col-span-4"
          >
            <span className="about-corner about-corner-tl" aria-hidden />
            <span className="about-corner about-corner-tr" aria-hidden />
            <span className="about-corner about-corner-bl" aria-hidden />
            <span className="about-corner about-corner-br" aria-hidden />

            <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-black/70 px-3 py-1.5 backdrop-blur-sm">
              <Award size={13} className="text-gold" />
              <span className="text-[10px] font-semibold tracking-[0.2em] text-gold uppercase">
                Dept. Rank 1
              </span>
            </div>

            <div className="relative aspect-[3/4] max-h-[380px] w-full px-3 pb-14 pt-10 sm:max-h-[400px]">
              <Image
                src={portraitSrc}
                alt={profile.name}
                fill
                className="object-contain object-bottom scale-110"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/60 px-5 py-3 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.25em] text-white/40 uppercase">IIT Jodhpur</p>
              <p className="mt-0.5 text-sm text-white/75">B.Tech & M.Tech · Civil & Environmental</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-card p-7 sm:p-9 lg:col-span-8"
          >
            <h3 className="text-xl font-semibold leading-snug text-white sm:text-2xl">
              Civil-Environmental engineer and full-stack developer
            </h3>

            <div className="body-lg mt-5 max-w-2xl space-y-4">
              <p>
                I completed my B.Tech–M.Tech dual degree at IIT Jodhpur in civil engineering
                with an environmental specialisation (Dept. Rank 1). My M.Tech thesis used
                WRF-Chem-Fire to simulate the 2024 Uttarakhand wildfires on the institute HPC
                cluster.
              </p>
              <p>
                Alongside research, I build full-stack and AI applications — personal finance
                tools, telemedicine, recipe platforms, and more. Several are live on Vercel and
                Streamlit.
              </p>
              <p className="text-sm text-white/50">
                Worked at EEKI Foods, Internship at AICOE (Ministry of Education), and Jal Jeevan Mission.
              </p>
            </div>
          </motion.div>
        </div>

        {/* All 6 metrics in one row */}
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:mt-5 lg:grid-cols-6">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="about-card flex min-h-[100px] flex-col items-center justify-center p-3 text-center sm:min-h-[110px] sm:p-4"
            >
              <p className="about-metric-value text-xl sm:text-2xl">{m.value}</p>
              <p className="mt-1.5 text-[8px] leading-snug tracking-wide text-white/45 uppercase sm:text-[9px]">
                {m.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-5 grid gap-4 lg:grid-cols-[1fr_auto]"
        >
          <div className="about-card p-6 sm:p-7">
            <p className="text-[10px] tracking-[0.3em] text-gold uppercase">Outside the lab</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {leadership.map((item) => (
                <div key={item.role} className="border-l border-[var(--gold)]/40 pl-4">
                  <p className="text-sm font-medium text-white">{item.role}</p>
                  <p className="mt-1 text-xs text-white/45">
                    {item.org} · {item.period}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-white/55">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-card flex flex-col justify-center gap-4 p-6 sm:p-7 lg:min-w-[300px]">
            <div className="flex items-center gap-3 text-sm text-white/60">
              <MapPin size={15} className="shrink-0 text-gold" />
              <span>{profile.location}</span>
            </div>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 text-sm text-white/60 transition hover:text-gold-light"
            >
              <Mail size={15} className="shrink-0 text-gold" />
              {profile.email}
            </a>
            <div className="mt-2 flex flex-col gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/55 transition hover:text-gold"
              >
                <GitHubIcon size={16} className="text-gold" />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/55 transition hover:text-gold"
              >
                <LinkedInIcon size={16} className="text-gold" />
                LinkedIn
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
