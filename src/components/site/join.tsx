import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { CHANNELS, JOIN, SITE, VALUES } from "@/content/nova-gen";

export function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Join Nova Gen"
        title="Apply to join the community."
        body={JOIN.body}
      >
        <a
          href={JOIN.formUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Open the application form
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="What happens"
            title="Three steps from application to the spaces"
            intro="The form is short. The team reads every application and replies to every applicant."
          />
          <ol className="mt-12 grid gap-4 lg:grid-cols-3">
            {JOIN.steps.map((step, i) => (
              <li key={step.title} className="rounded-md bg-surface p-7">
                <span className="font-mono text-xs tracking-widest text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-dim">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">The form</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Tell us what you build and what you want next
            </h2>
            <p className="mt-4 text-base text-dim">
              Applications are collected on our form: what you work on, where you are, and what you
              want to get better at. It takes a few minutes.
            </p>
            <a
              href={JOIN.formUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Apply on the form
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-4 font-mono text-[0.68rem] tracking-widest text-dim uppercase">
              Opens in a new tab
            </p>
          </div>
          <div className="bg-background p-8">
            <p className="eyebrow">After you're in</p>
            <ul className="mt-5 space-y-3 text-sm">
              {CHANNELS.slice(0, 5).map((channel) => (
                <li key={channel.name} className="flex items-baseline gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <span className="font-medium text-foreground">{channel.name}</span>
                    <span className="text-dim"> · {channel.body}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Who it's for"
            title="Builders, learners, and people with work to show"
            intro="Developers, designers, product people, analysts, AI/ML builders, no-code creators, founders, and creatives."
          />
          <div className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-dim">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="rounded-md bg-surface p-8 sm:p-12">
            <h2 className="max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
              Not sure yet? Look around first.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-dim">
              Read how the community runs, see what the challenge looks like, or check where members
              have been.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/community"
                className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm text-foreground transition hover:text-primary"
              >
                The community spaces
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/initiatives/bi-weekly-challenge"
                className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm text-foreground transition hover:text-primary"
              >
                The bi-weekly challenge
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Apply now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
