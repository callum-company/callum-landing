/**
 * Instant feedback while a dashboard page renders on the server. Every page
 * here is force-dynamic, so without this boundary a click shows nothing until
 * the full response arrives. Next also prefetches this shell for sidebar links.
 */
export default function Loading() {
  const block = "rounded-2xl border border-border bg-card/50 motion-safe:animate-pulse";
  return (
    <div className="mx-auto max-w-6xl" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading…</span>
      <div className="h-7 w-40 rounded-lg bg-secondary motion-safe:animate-pulse" />
      <div className="mt-2 h-4 w-72 max-w-full rounded bg-secondary/70 motion-safe:animate-pulse" />
      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`${block} h-24`} />
        ))}
      </div>
      <div className={`${block} mt-6 h-72`} />
    </div>
  );
}
