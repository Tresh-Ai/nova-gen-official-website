import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { PageHero, SectionHeading } from "@/components/site/site-layout";
import { PHILOSOPHY, SITE, TEAM } from "@/content/nova-gen";

const STORY = [
  {
    title: "Nova",
    body: "New. The part of the field that keeps moving: the tools, the ideas, and the people willing to try them first.",
  },
  {
    title: "Gen",
    body: "Generation. The people doing that work now: students, builders, designers, analysts, and founders across Africa.",
  },
];

const MISSION = [
  {
    title: "Mission",
    body: "Give African technologists a community where the work is done in the open, reviewed properly, and connected to real opportunity.",
  },
  {
    title: "Vision",
    body: "A generation of African builders who don't need permission because the structure, the feedback, and the network already exist here.",
  },
];

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Nova Gen"
        title="A community built by the generation it's naming."
        body="Nova Gen is a self-driven African technology community. Members set the pace, the team keeps the rhythm, and the work speaks for itself."
      >
        <a
          href={SITE.tallyUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Apply to join
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </PageHero>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="The name"
            title="Two words, one intention"
            intro="The name is the brief: this is where the new generation of African technology gets made."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {STORY.map((item) => (
              <div key={item.title} className="rounded-xl surface-card p-8">
                <p className="font-display text-2xl font-semibold text-primary">{item.title}</p>
                <p className="mt-3 text-sm text-dim">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-4 lg:grid-cols-2">
            {MISSION.map((item) => (
              <div key={item.title} className="rounded-xl hairline bg-background p-8">
                <p className="eyebrow">{item.title}</p>
                <p className="mt-4 text-lg text-foreground">{item.body}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-10 max-w-3xl font-display text-2xl leading-snug font-semibold text-foreground sm:text-3xl">
            “{PHILOSOPHY.quote}”
          </blockquote>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="The team"
            title="People behind the community"
            intro="The team supports members, community spaces, and shared work."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member) => (
              <div key={member.name} className="rounded-xl surface-card overflow-hidden">
                <div
                  aria-hidden
                  className="aspect-square w-full bg-primary/10 flex items-center justify-center"
                >
                  <span className="font-display text-4xl font-semibold text-primary">
                    {member.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part.charAt(0))
                      .join("")}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-base font-semibold text-foreground">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-3 text-sm text-dim">{member.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <SectionHeading
            eyebrow="What comes next"
            title="Built with the community"
            intro="Members continue to shape what Nova Gen does and how the community grows."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/community"
              className="inline-flex items-center gap-2 rounded-sm hairline px-5 py-2.5 text-sm text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              See the community spaces
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/initiatives/bi-weekly-challenge"
              className="inline-flex items-center gap-2 rounded-sm hairline px-5 py-2.5 text-sm text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              The bi-weekly challenge
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
