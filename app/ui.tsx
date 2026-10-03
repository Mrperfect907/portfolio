import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative z-[1] max-w-[1120px] mx-auto px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Section({
  id,
  alt = false,
  children,
}: {
  id?: string;
  alt?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative py-16 sm:py-20 lg:py-28 border-b border-line ${alt ? "bg-panel" : ""}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="max-w-[620px] mb-12 sm:mb-14">
      <h2 className="text-ink font-bold tracking-tight leading-tight text-[1.8rem] sm:text-[2.4rem]">
        {title}
      </h2>
      {lead ? <p className="mt-3.5 text-muted">{lead}</p> : null}
    </div>
  );
}

/** Small monospace label in the accent colour. */
export function FieldLabel({ children }: { children: ReactNode }) {
  return <span className="inline-block font-mono text-[0.82rem] text-accent mb-3">{children}</span>;
}

const btnBase =
  "inline-flex items-center justify-center gap-2.5 rounded font-semibold border transition-colors";

export function Button({
  href,
  variant = "primary",
  size = "lg",
  external = false,
  children,
}: {
  href: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "lg";
  external?: boolean;
  children: ReactNode;
}) {
  const look =
    variant === "primary"
      ? "bg-accent text-accent-ink border-transparent hover:bg-accent-hover"
      : "bg-transparent text-ink border-line-strong hover:border-ink";
  const pad = size === "lg" ? "px-7 py-3.5 text-[0.98rem]" : "px-5 py-2 text-[0.9rem]";
  return (
    <a
      href={href}
      className={`${btnBase} ${look} ${pad}`}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

/** Bordered stack of cards that share accent hairlines. */
export function CardStack({ children }: { children: ReactNode }) {
  return (
    <div className="border border-accent rounded overflow-hidden divide-y divide-accent">
      {children}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return <article className="bg-card p-6 sm:p-9">{children}</article>;
}

export function CardHead({ title, tag }: { title: string; tag?: string }) {
  return (
    <header className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-3">
      <h3 className="text-ink font-bold text-[1.2rem] leading-snug">{title}</h3>
      {tag ? <span className="font-mono text-[0.76rem] text-accent">{tag}</span> : null}
    </header>
  );
}

export function Badges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="font-mono text-[0.78rem] text-body bg-panel border border-line rounded px-2.5 py-1"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Check({ muted = false }: { muted?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`w-[15px] h-[15px] mt-[5px] shrink-0 ${muted ? "text-muted" : "text-accent"}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Highlights({ items, note }: { items: ReactNode[]; note?: ReactNode }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((h, i) => (
        <li key={i} className="flex gap-2.5 text-[0.94rem] text-body">
          <Check />
          <span>{h}</span>
        </li>
      ))}
      {note ? (
        <li className="flex gap-2.5 text-[0.9rem] text-muted">
          <Check muted />
          <span>{note}</span>
        </li>
      ) : null}
    </ul>
  );
}

/** Key figures from a study, as a compact bordered strip. */
export function Figures({ items }: { items: { value: string; label: string }[] }) {
  return (
    <dl className={`grid grid-cols-2 ${items.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-4"} border border-line rounded overflow-hidden bg-panel`}>
      {items.map((m) => (
        <div key={m.label} className="px-4 py-3.5 border-line [&:not(:first-child)]:border-l max-sm:[&:nth-child(3)]:border-l-0 max-sm:[&:nth-child(n+3)]:border-t">
          <dt className="font-mono font-semibold text-ink tabular leading-tight">{m.value}</dt>
          <dd className="mt-1 text-[0.76rem] text-muted leading-snug">{m.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-[0.88rem] font-semibold text-ink border-b border-line-strong pb-0.5 hover:text-accent hover:border-accent transition-colors"
    >
      {children}
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </a>
  );
}
