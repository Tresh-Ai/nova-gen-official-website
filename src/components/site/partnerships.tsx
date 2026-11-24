import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { MOMENTS, PARTNERSHIPS, SITE } from "@/content/nova-gen";

export function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Partnerships"
        title="Work with a community that already builds."
        body="Nova Gen works with partners who want to reach African technologists where the work is actually happening — in the challenge threads, the reviews, and the build rooms."
      >
        <a
          href={SITE.xUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Areas we're open to"
            title="Four ways a partnership could look"
            intro="These are areas Nova Gen is open to exploring with partners — not programmes already in place."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {PARTNERSHIPS.pillars.map((pillar, i) => (
              <div key={pillar.title} className="rounded-xl surface-card p-7">
                <span className="font-mono text-xs tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm text-dim">{pillar.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-dim">{PARTNERSHIPS.note}</p>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Work already done"
            title={PARTNERSHIPS.lead.title}
            intro={PARTNERSHIPS.lead.body}
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl hairline bg-background p-6">
              <p className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                Collaborator
              </p>
              <p className="mt-3 text-sm text-foreground">Harness</p>
            </div>
            <div className="rounded-xl hairline bg-background p-6">
              <p className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                Through
              </p>
              <p className="mt-3 text-sm text-foreground">ARISE</p>
            </div>
            <div className="rounded-xl hairline bg-background p-6">
              <p className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">Host</p>
              <p className="mt-3 text-sm text-foreground">Nonye Victory</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="In the room"
            title="Where the community already shows up"
            intro="Expos, campus days, and ecosystem sessions — the same rooms partners are already in."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOMENTS.slice(0, 3).map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-xl surface-card">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="p-4 text-sm text-dim">{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-2xl bg-primary p-8 sm:p-12">
            <h2 className="max-w-2xl text-2xl font-semibold text-primary-foreground sm:text-4xl">
              Tell us what you have in mind
            </h2>
            <p className="mt-4 max-w-xl text-sm text-primary-foreground/80">
              Sessions, sponsored challenges, talent pipelines, or joint events — reach the team
              directly and we'll take it from there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.xUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-2"
              >
                Message {SITE.xHandle} on X
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                See community events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
