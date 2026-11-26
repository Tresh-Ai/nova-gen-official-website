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
        body="Nova Gen works with partners who want to connect with African technologists through community sessions, project reviews, and shared build spaces."
      >
        <a
          href={SITE.xUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Start a conversation
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Areas we're open to"
            title="Ways a partnership could look"
            intro="These are areas Nova Gen is open to exploring with partners. They are not programmes already in place."
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {PARTNERSHIPS.areas.map((area) => (
              <div key={area.title} className="border-t border-line pt-5">
                <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="mt-2 text-sm text-dim">{area.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-dim">{PARTNERSHIPS.note}</p>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow">Previous collaboration</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">{PARTNERSHIPS.lead.title}</h2>
            <p className="mt-4 text-base text-dim">{PARTNERSHIPS.lead.body}</p>
            <p className="mt-4 text-sm text-dim">Hosted by Nonye Victory, with Harness through ARISE.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Community moments"
            title="Members at community events"
            intro="Photos of Nova Gen members at community and technology gatherings."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MOMENTS.slice(0, 3).map((item) => (
              <figure key={item.src} className="overflow-hidden rounded-md">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="aspect-[3/2] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="bg-primary p-8 sm:p-12">
            <h2 className="max-w-2xl text-2xl font-semibold text-primary-foreground sm:text-4xl">
              Tell us what you have in mind
            </h2>
            <p className="mt-4 max-w-xl text-sm text-primary-foreground/80">
              Sessions, sponsored challenges, talent opportunities, or joint events. Reach the
              team to start a conversation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={SITE.xUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface-2"
              >
                Message {SITE.xHandle} on X
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
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
