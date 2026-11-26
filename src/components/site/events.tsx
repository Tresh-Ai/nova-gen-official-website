import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { MomentGallery } from "@/components/site/moments";
import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { PARTNERSHIPS, SITE } from "@/content/nova-gen";

const FORMATS = [
  {
    title: "Virtual sessions",
    body: "Online sessions, clinics, and review threads members can join from anywhere.",
  },
  {
    title: "In-person days",
    body: "Expos, campus days, and meetups where members represent the community in the room.",
  },
  {
    title: "Partner sessions",
    body: "Working sessions run with partners and ecosystem organisations.",
  },
];

export function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Sessions, campus days, and rooms members actually learn in."
        body="Nova Gen shows up in person and online: expos, campus sessions, and partner working sessions across the ecosystem."
      >
        <a
          href={SITE.tallyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Apply to join
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Formats"
            title="How the community gathers"
            intro="Members take part online, in person, or both."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {FORMATS.map((item) => (
              <div key={item.title} className="rounded-xl surface-card p-7">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-dim">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Previous collaboration</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">{PARTNERSHIPS.lead.title}</h2>
            <p className="mt-4 text-base text-dim">{PARTNERSHIPS.lead.body}</p>
            <dl className="mt-7 grid gap-5 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">Format</dt>
                <dd className="mt-2 text-foreground">Online conference</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">Collaborator</dt>
                <dd className="mt-2 text-foreground">Honest, through ARISE</dd>
              </div>
              <div>
                <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">Host</dt>
                <dd className="mt-2 text-foreground">Nonye Victory</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Community moments"
            title="Community events in pictures"
            intro="Photos of Nova Gen members at community and technology gatherings."
          />
          <MomentGallery />
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-md bg-surface p-8 sm:p-12">
            <h2 className="max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
              Run a session with the community
            </h2>
            <p className="mt-3 max-w-xl text-sm text-dim">
              Partners and ecosystem organisations can host a session, workshop, or clinic for
              members.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/partnerships"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Partnership areas
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.xUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm text-foreground transition hover:text-primary"
              >
                Message {SITE.xHandle}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
