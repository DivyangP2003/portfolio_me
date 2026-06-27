"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { resumes } from "@/lib/data";

export default function Resumes() {
  return (
    <section id="resumes" className="section-padding bg-black">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-section mb-14"
        >
          Documents
        </motion.h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {resumes.map((resume, i) => (
            <motion.a
              key={resume.title}
              href={resume.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -2 }}
              className="card-light group flex items-center gap-5 p-6 transition hover:shadow-xl"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700">
                <FileText size={20} />
              </div>
              <div className="flex-1">
                <h3 className="heading-card text-base">{resume.title}</h3>
                <p className="body-on-light mt-1 text-sm">{resume.description}</p>
              </div>
              <Download size={18} className="shrink-0 text-neutral-400 group-hover:text-black" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
