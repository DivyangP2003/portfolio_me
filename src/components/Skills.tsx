"use client";

import { motion } from "framer-motion";
import { skillGroups, leadership } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-padding section-alt">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-section mb-14"
        >
          Skills
        </motion.h2>

        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-dark p-7"
            >
              <h3 className="font-display text-xl tracking-wide text-white uppercase">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display mb-8 text-2xl tracking-wide text-white uppercase">Leadership</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            {leadership.map((item) => (
              <div key={item.role} className="card-dark p-6">
                <p className="font-medium text-white">{item.role}</p>
                <p className="mt-1 text-sm text-white/45">{item.org}</p>
                <p className="body-md mt-3">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
