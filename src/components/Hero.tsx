"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import Marquee from "@/components/ui/Marquee";
import { marqueeSkills } from "@/lib/data";

export default function Hero() {
  const portraitSrc = profile.imageCutout ?? profile.image;

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center overflow-hidden bg-black pt-24">
      <div className="relative flex w-full flex-col items-center px-1 pb-20 pt-8 sm:px-2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="eyebrow mb-5 text-center text-gold"
        >
          Introducing
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="font-script mb-8 text-center text-3xl text-white/90 sm:text-4xl md:text-5xl"
        >
          Engineer & Developer
        </motion.p>

        {/* Full-width two-line name + portrait sandwiched inside text bounds */}
        <div className="hero-name-stack relative w-full max-w-[100vw] overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-0"
            aria-hidden
          >
            <span className="hero-line-1 block w-full text-center">DIVYANG</span>
            <span className="hero-line-2 block w-full text-center">PALSHETKAR</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
          >
            <div className="hero-portrait-frame relative">
              <Image
                src={portraitSrc}
                alt={profile.name}
                fill
                className="object-contain object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
                priority
                sizes="(max-width: 768px) 42vw, 320px"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.9 }}
            className="pointer-events-none absolute inset-0 z-30 flex flex-col items-center justify-center gap-0"
            aria-hidden
          >
            <span className="hero-line-1 hero-line-outline block w-full text-center">DIVYANG</span>
            <span className="hero-line-2 hero-line-outline block w-full text-center">PALSHETKAR</span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="body-lg mt-10 max-w-xl px-4 text-center"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View Work
          </a>
          <a href="#research" className="btn-outline">
            Thesis
          </a>
        </motion.div>
      </div>

      <div className="w-full border-t border-white/10 py-4">
        <Marquee items={marqueeSkills} />
      </div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-1 text-white/30"
      >
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <ArrowDown size={14} />
      </motion.div>
    </section>
  );
}
