import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

import { LOGO, NAV, SITE } from "@/content/nova-gen";
import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Nova Gen home"
    >
      <img
        src={LOGO}
        alt="Nova Gen emblem"
        className="h-9 w-9 rounded-sm object-cover transition group-hover:opacity-80"
      />
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        Nova<span className="text-primary">Gen</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-dim transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.tallyUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110 sm:inline-flex"
          >
            Join Nova Gen
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-surface md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-line py-3 text-sm text-foreground last:border-b-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={SITE.tallyUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 mb-1 inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Join Nova Gen
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm text-dim">{SITE.description}</p>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-dim transition-colors hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/join" className="text-dim transition-colors hover:text-primary">
                Join
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Connect</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={SITE.xUrl}
                target="_blank"
                rel="noreferrer"
                className="text-dim transition-colors hover:text-primary"
              >
                X · {SITE.xHandle}
              </a>
            </li>
            <li>
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="text-dim transition-colors hover:text-primary"
              >
                Apply to join
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-dim sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {SITE.year} {SITE.name}. All rights reserved.
          </span>
          <span className="font-mono tracking-widest uppercase">Built by the community</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">{title}</h2>
      {intro ? <p className="mt-4 text-base text-dim">{intro}</p> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  body,
  children,
}: {
  eyebrow: string;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <p className="eyebrow rise">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl leading-[1.05] font-semibold text-foreground sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-dim">{body}</p>
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
