import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { CHALLENGE, SITE } from "@/content/nova-gen";

export function ChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="Bi-weekly challenge"
        title={CHALLENGE.heroTitle}
        body={CHALLENGE.heroBody}
      >
        <a
          href={SITE.tallyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Join Nova Gen
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="How it works"
            title="From Monday's brief to Saturday's submission"
            intro="Members build during the week, get feedback from one another, and share the final work through the Nova Gen X account."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CHALLENGE.steps.map((step, i) => (
              <li key={step.title} className="rounded-xl surface-card p-6">
                <span className="font-mono text-xs tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                  {step.day}
                </p>
                <h3 className="mt-2 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-dim">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Challenge list"
            title={CHALLENGE.archiveTitle}
            intro={CHALLENGE.archiveIntro}
          />
          <div className="mt-10">
            {CHALLENGE.entries.length > 0 ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CHALLENGE.entries.map((entry) => (
                  <article key={entry.code} className="overflow-hidden rounded-xl hairline bg-background">
                    <img
                      src={entry.image}
                      alt={`${entry.code} challenge artwork`}
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <div className="p-6">
                      <p className="font-mono text-[0.68rem] tracking-widest text-primary uppercase">
                        {entry.status}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground">
                        {entry.code}: {entry.title}
                      </h3>
                      <p className="mt-2 text-sm text-dim">{entry.brief}</p>
                      <p className="mt-5 border-t border-line pt-4 font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                        Deadline · {entry.deadline}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-xl hairline bg-background p-12 text-center">
                <h3 className="text-lg font-semibold text-foreground">{CHALLENGE.emptyTitle}</h3>
                <p className="mt-3 max-w-md mx-auto text-sm text-dim">{CHALLENGE.emptyBody}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-2xl surface-card p-8 sm:p-12">
            <h2 className="max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
              Take part in the next challenge
            </h2>
            <p className="mt-3 max-w-xl text-sm text-dim">
              Challenge briefs are shared with the community. Join to post your idea, share
              progress, and get feedback.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Apply to join
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-sm hairline px-5 py-2.5 text-sm text-foreground transition hover:border-primary/40 hover:text-primary"
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
