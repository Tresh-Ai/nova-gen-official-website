import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { CHANNELS, PHILOSOPHY, PRINCIPLES, SITE } from "@/content/nova-gen";

const PRINCIPLES_OF_PARTICIPATION = [
  {
    title: "Show your work",
    body: "Post what you're building, even when it isn't finished. That's how reviews and help start.",
  },
  {
    title: "Answer someone",
    body: "If you know the answer to a question in the spaces, reply. The community runs on that.",
  },
  {
    title: "Keep it useful",
    body: "Moderators keep the channels focused so opportunities and feedback don't get buried.",
  },
];

export function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="One community, six spaces."
        body="Community channels make conversation, challenges, reviews, and opportunities easier to follow."
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
            eyebrow="The spaces"
            title="Where the community talks"
            intro="Each channel has one job, so the right people see the right thing."
          />
          <div className="mt-12 grid gap-x-10 md:grid-cols-2">
            {CHANNELS.map((channel) => (
              <div key={channel.name} className="border-t border-line py-6">
                <h3 className="text-lg font-semibold text-foreground">{channel.name}</h3>
                <p className="mt-2 text-sm text-dim">{channel.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="Participation"
            title="How members behave in the spaces"
            intro="Three habits keep the community useful."
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {PRINCIPLES_OF_PARTICIPATION.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-dim">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading eyebrow="Shared principles" title="How we build together" />
          <ol className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((item) => (
              <li key={item.index} className="border-t border-line pt-5">
                <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-dim">{item.body}</p>
              </li>
            ))}
          </ol>
          <blockquote className="mt-12 max-w-3xl font-display text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
            “{PHILOSOPHY.quote}”
          </blockquote>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="bg-surface p-8 sm:p-12">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 max-w-xl text-2xl font-semibold text-foreground sm:text-3xl">
              Get into the spaces
            </h2>
            <p className="mt-3 max-w-xl text-sm text-dim">
              Applications open to anyone building or learning to build. The team reads every one.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
              >
                Apply on the form
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-sm px-5 py-2.5 text-sm text-foreground transition hover:text-primary"
              >
                Read the join page
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
