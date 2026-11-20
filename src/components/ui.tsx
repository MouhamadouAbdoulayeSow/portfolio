import type { ReactNode } from "react";

export function Section({ id, title, kicker, children }: { id: string; title: string; kicker: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{kicker}</p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function Tag({ children, strong = false }: { children: ReactNode; strong?: boolean }) {
  return (
    <span
      className={
        strong
          ? "rounded-md border border-accent/40 bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent"
          : "rounded-md border border-line bg-surface px-2.5 py-1 text-xs text-muted"
      }
    >
      {children}
    </span>
  );
}

const paths: Record<string, string> = {
  github:
    "M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z",
  linkedin:
    "M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2.5 7v7.5H9V10zm1.2-3.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zM11 10v7.5h2.5v-4c0-1 .4-1.8 1.5-1.8s1.3.9 1.3 1.8v4h2.5v-4.6c0-2.3-1.3-3.1-2.9-3.1-1.3 0-2 .6-2.4 1.2V10z",
  mail: "M2 5h20v14H2zm2 2v.5l8 5 8-5V7zm16 2.8-8 5-8-5V17h16z",
  pin: "M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z",
  download: "M11 3h2v9.2l3.6-3.6L18 10l-6 6-6-6 1.4-1.4 3.6 3.6zM4 18h16v2H4z",
};

export function Icon({ name, className = "h-4 w-4" }: { name: keyof typeof paths | string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`${className} fill-current`}>
      <path d={paths[name]} />
    </svg>
  );
}
