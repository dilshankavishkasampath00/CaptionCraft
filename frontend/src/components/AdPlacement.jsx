export default function AdPlacement({ id, label, size, className = "" }) {
  return (
    <div
      id={id}
      className={`relative flex items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-center text-[11px] uppercase tracking-[0.22em] text-zinc-400/80 backdrop-blur-sm ${className}`}
      aria-label={`${label} advertisement`}
      title={`${label} advertisement`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.16),transparent_70%)]" />
      <div className="relative z-10 px-3 py-2">
        <span className="text-[10px] font-semibold tracking-[0.35em] text-zinc-400">Sponsored</span>
        <div className="mt-1 text-[10px] text-zinc-500">{size}</div>
      </div>
    </div>
  );
}
