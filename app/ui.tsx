import type { ReactNode } from "react";

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-xs text-ink/40 dark:text-white/40 pb-3 mb-10 border-b border-ink/10 dark:border-white/10">
      {children}
    </h2>
  );
}

export function Project({
  title,
  stack,
  meta,
  children,
}: {
  title: string;
  stack: string[];
  meta?: string;
  children: ReactNode;
}) {
  return (
    <article className="space-y-6">
      <header className="flex items-start justify-between gap-4">
        <div className="space-y-2">
          <h3 className="font-display text-2xl font-semibold">{title}</h3>
          <p className="font-mono text-xs text-ink/50 dark:text-white/50">
            {stack.join("  /  ")}
          </p>
        </div>
        {meta ? (
          <span className="font-mono text-xs text-ink/40 dark:text-white/40 whitespace-nowrap pt-1">
            {meta}
          </span>
        ) : null}
      </header>
      {children}
    </article>
  );
}

export function Metrics({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <dl className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-8 border-y border-ink/10 dark:border-white/10 py-7">
      {items.map((m) => (
        <div key={m.label} className="space-y-1.5">
          <dt className="font-display text-2xl font-semibold tabular leading-none">
            {m.value}
          </dt>
          <dd className="font-mono text-[11px] leading-snug text-ink/50 dark:text-white/50">
            {m.label}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function Steps({
  caption,
  items,
}: {
  caption?: string;
  items: { title: string; body: string }[];
}) {
  return (
    <div className="space-y-5">
      {caption ? (
        <p className="font-mono text-xs text-ink/40 dark:text-white/40">
          {caption}
        </p>
      ) : null}
      <ol className="space-y-4">
        {items.map((s, i) => (
          <li key={s.title} className="flex gap-4">
            <span className="font-mono text-xs text-moss dark:text-moss-light pt-1 w-4 shrink-0">
              {i + 1}
            </span>
            <div className="space-y-1">
              <p className="font-display text-sm font-semibold">{s.title}</p>
              <p className="text-ink/70 dark:text-white/70 leading-relaxed">
                {s.body}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <p className="text-ink/75 dark:text-white/75 leading-relaxed">{children}</p>
  );
}

/** Placeholder for imagery Raju has not supplied yet. */
export function ImageSlot({
  name,
  spec,
  note,
  className = "",
}: {
  name: string;
  spec: string;
  note: string;
  className?: string;
}) {
  return (
    <figure
      className={`border border-dashed border-ink/20 dark:border-white/20 rounded-sm flex flex-col items-center justify-center text-center gap-1 p-6 ${className}`}
    >
      <figcaption className="font-mono text-xs text-ink/50 dark:text-white/50">
        {name}
      </figcaption>
      <span className="font-mono text-[11px] text-ink/35 dark:text-white/35">
        {spec}
      </span>
      <span className="font-mono text-[11px] text-ink/35 dark:text-white/35">
        {note}
      </span>
    </figure>
  );
}
