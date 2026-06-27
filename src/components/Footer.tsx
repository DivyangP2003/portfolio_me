import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-display text-2xl tracking-widest text-white uppercase">{profile.shortName.split(" ")[0]}</p>
        <p className="text-xs tracking-[0.2em] text-white/30 uppercase">
          © {new Date().getFullYear()} · Designed & Built by Divyang
        </p>
      </div>
    </footer>
  );
}
