"use client";

export default function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="aurora-blob absolute -left-32 top-0 h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="aurora-blob-delayed absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[100px]" />
      <div className="aurora-blob absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan-500/8 blur-[90px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#030712_75%)]" />
    </div>
  );
}
