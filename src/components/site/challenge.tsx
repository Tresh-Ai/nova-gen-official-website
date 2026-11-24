import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { CHALLENGE, CHALLENGE_ART, SITE } from "@/content/nova-gen";

export function ChallengePage() {
  return (
    <>
      <PageHero
        eyebrow="Initiative"
        title="Bi-Weekly Challenge"
        body="Every two weeks the community posts one scoped task. Members build it, submit it before the deadline, and the entries are reviewed in the open."
      >
        <a
          href={SITE.tallyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Join to take part
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="overflow-hidden rounded-2xl hairline">
            <img
              src={CHALLENGE_ART}
              alt={`${CHALLENGE.code} — ${CHALLENGE.title} challenge poster`}
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div>
            <p className="eyebrow">Open now</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              {CHALLENGE.code}: {CHALLENGE.title}
            </h2>
            <p className="mt-4 text-base text-dim">{CHALLENGE.summary}</p>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-xl hairline bg-line sm:grid-cols-3">
              <div className="bg-background p-5">
                <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                  Status
                </dt>
                <dd className="mt-2 text-sm font-medium text-primary">Open</dd>
              </div>
              <div className="bg-background p-5">
                <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                  Deadline
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">{CHALLENGE.deadline}</dd>
              </div>
              <div className="bg-background p-5">
                <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                  Where
                </dt>
                <dd className="mt-2 text-sm font-medium text-foreground">{CHALLENGE.where}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="How it runs"
            title="Four steps, every two weeks"
            intro="The same rhythm each time, so nobody has to guess what happens next."
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {CHALLENGE.steps.map((step, i) => (
              <li key={step.title} className="rounded-xl surface-card p-6">
                <span className="font-mono text-xs tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-dim">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Archive"
            title="Challenges posted so far"
            intro="The list grows as each task closes and the next one is published."
          />
          <div className="mt-10 overflow-hidden rounded-2xl hairline">
            <table className="w-full text-left text-sm">
              <thead className="bg-surface">
                <tr>
                  <th className="px-5 py-4 font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                    Task
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                    Title
                  </th>
                  <th className="px-5 py-4 font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {CHALLENGE.archive.map((entry) => (
                  <tr key={entry.code} className="border-t border-line">
                    <td className="px-5 py-4 font-medium text-foreground">{entry.code}</td>
                    <td className="px-5 py-4 text-dim">{entry.title}</td>
                    <td className="px-5 py-4">
                      <span className="rounded-full bg-primary/15 px-3 py-1 font-mono text-[0.68rem] tracking-widest text-primary uppercase">
                        {entry.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-dim">
            Earlier tasks are added here as their entries are reviewed and the write-ups are posted
            in the community spaces.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-2xl surface-card p-8 sm:p-12">
            <h2 className="max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
              Want the next task before it's public?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-dim">
              Challenges are posted to the community first. Members see the brief, the deadline, and
              the review thread.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Apply to join
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 rounded-full hairline px-5 py-2.5 text-sm text-foreground transition hover:border-primary/40 hover:text-primary"
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
