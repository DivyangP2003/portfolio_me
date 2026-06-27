"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      for (const item of [...navItems].reverse()) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "bg-black/90 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      )}
    >
      <nav className="section-container flex items-center justify-between py-5 lg:py-6">
        <a href="#" className="text-sm font-semibold tracking-[0.15em] text-white uppercase">
          {profile.shortName.split(" ")[0]}
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {navItems.map((link) => {
            const id = link.href.replace("#", "");
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "text-xs font-medium tracking-[0.25em] uppercase transition-colors",
                    active === id ? "text-white" : "text-white/45 hover:text-white/80"
                  )}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <p className="hidden text-right text-[11px] leading-relaxed tracking-wide text-white/40 xl:block">
          {profile.title}
        </p>

        <button
          type="button"
          aria-label="Menu"
          className="text-white/70 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="border-t border-white/10 bg-black px-6 py-6 lg:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.2em] text-white/70 uppercase"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}
