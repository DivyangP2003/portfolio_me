"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/SocialIcons";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section-padding section-alt">
      <div className="section-container">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="heading-section mb-10 sm:mb-12 lg:mb-14 text-center"
        >
          Contact
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-light mx-auto max-w-3xl overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="border-b border-neutral-200 p-6 sm:p-8 md:p-10 lg:border-b-0 lg:border-r">
              <h3 className="heading-card text-xl">Get in touch</h3>
              <p className="body-on-light mt-3 text-sm">
                Open to climate risk, GIS, fire science, and full-stack AI product roles.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  { icon: Mail, text: profile.email, href: `mailto:${profile.email}` },
                  { icon: Phone, text: profile.phone },
                  { icon: MapPin, text: profile.location },
                ].map(({ icon: Icon, text, href }) => (
                  <li key={text}>
                    {href ? (
                      <a href={href} className="flex items-center gap-3 text-sm text-neutral-600 hover:text-black">
                        <Icon size={16} className="text-neutral-400" />
                        {text}
                      </a>
                    ) : (
                      <span className="flex items-center gap-3 text-sm text-neutral-600">
                        <Icon size={16} className="text-neutral-400" />
                        {text}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-center gap-3 p-6 sm:p-8 md:p-10">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 px-5 py-4 text-sm text-neutral-700 transition hover:border-black"
              >
                <GitHubIcon size={20} />
                GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg border border-neutral-200 px-5 py-4 text-sm text-neutral-700 transition hover:border-black"
              >
                <LinkedInIcon size={20} />
                LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}?subject=Collaboration%20Opportunity&body=Hi%20Divyang,%0D%0A%0D%0AI%20would%20like%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0D%0A%0D%0APlease%20feel%20free%20to%20get%20back%20to%20me.%0D%0A%0D%0AThank%20you`}
                className="btn-primary mt-2 justify-center !bg-black !text-white"
              >
                <Send size={16} />
                Send Email
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
