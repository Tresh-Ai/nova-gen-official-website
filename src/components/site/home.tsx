import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { MomentGallery } from "@/components/site/moments";
import { PageHero, SectionHeading } from "@/components/site/site-layout";
import {
  CHALLENGE,
  CHALLENGE_ART,
  DISCIPLINES,
  ECOSYSTEM,
  MOMENTS,
  PARTNERSHIPS,
  PHILOSOPHY,
  PRINCIPLES,
  SITE,
  VALUES,
} from "@/content/nova-gen";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-52 left-1/3 h-[30rem] w-[60rem] rounded-full bg-primary/10 blur-[130px]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="eyebrow rise">Building the next generation</p>
          <h1 className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-7xl">
            The Next Generation
            <br />
            Starts <span className="text-primary">Here.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-dim">
            Nova Gen is a self-driven African technology community. Members ship a challenge every
            two weeks, review each other's work, and move opportunities through the group.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={SITE.tallyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Join the community
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full hairline px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Discover Nova Gen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <figure className="rise">
          <div className="overflow-hidden rounded-2xl surface-card">
            <img
              src={MOMENTS[0]?.src}
              alt="Nova Gen members with lanyards and community totes at an expo booth"
              className="h-72 w-full object-cover sm:h-96"
              loading="eager"
            />
          </div>
          <figcaption className="mt-3 flex items-center justify-between font-mono text-[0.68rem] tracking-widest text-dim uppercase">
            <span>On the floor</span>
            <span>{SITE.xHandle}</span>
          </figcaption>
        </figure>
      </div>

      <div className="overflow-hidden border-t border-line bg-surface py-3">
        <div className="ticker-track flex w-max gap-8 whitespace-nowrap">
          {[...DISCIPLINES, ...DISCIPLINES].map((item, i) => (
            <span key={`${item}-${i}`} className="font-mono text-xs tracking-widest text-dim uppercase">
              {item} <span className="text-primary">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Philosophy() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-4xl px-5 py-20 text-center">
        <p className="eyebrow">The idea</p>
        <blockquote className="mt-6 font-display text-3xl leading-tight font-semibold text-foreground sm:text-5xl">
          “{PHILOSOPHY.quote}”
        </blockquote>
        <p className="mx-auto mt-6 max-w-2xl text-base text-dim">{PHILOSOPHY.note}</p>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Why it works"
          title="Three things Nova Gen is built on"
          intro="Not a course, not an audience — a working community with a rhythm members can hold."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl hairline bg-line md:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div key={item.index} className="bg-surface p-8">
              <span className="font-mono text-xs tracking-widest text-primary">{item.index}</span>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm text-dim">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="The ecosystem"
          title="Six ways members take part"
          intro="Every part of Nova Gen is open to members. Pick where you want to start — the rest follows."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.map((item, i) => (
            <div
              key={item.title}
              className="group rounded-xl surface-card p-6 transition hover:border-primary/40"
            >
              <span className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground group-hover:text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-dim">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeSpotlight() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-2xl hairline">
          <img
            src={CHALLENGE_ART}
            alt={`${CHALLENGE.code} — ${CHALLENGE.title} challenge poster`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="eyebrow">Bi-weekly challenge</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            {CHALLENGE.code}: {CHALLENGE.title}
          </h2>
          <p className="mt-4 text-base text-dim">{CHALLENGE.summary}</p>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl hairline bg-line sm:grid-cols-2">
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
          <Link
            to="/initiatives/bi-weekly-challenge"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            See how the challenge runs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Moments() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading
          eyebrow="Nova moments"
          title="Where the community has already been"
          intro="Members show up in person too — expos, campus days, and sessions across the ecosystem."
        />
        <MomentGallery />
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <SectionHeading eyebrow="Values that define us" title="Eight things we don't trade" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl hairline bg-line sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((item) => (
            <div key={item.title} className="bg-surface p-6">
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-dim">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partnership() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-10 rounded-2xl surface-card p-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="eyebrow">Partnerships</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              {PARTNERSHIPS.lead.title}
            </h2>
            <p className="mt-4 text-base text-dim">{PARTNERSHIPS.lead.body}</p>
            <Link
              to="/partnerships"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Work with Nova Gen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PARTNERSHIPS.pillars.map((pillar) => (
              <li key={pillar.title} className="rounded-lg hairline bg-background p-4">
                <p className="text-sm font-semibold text-foreground">{pillar.title}</p>
                <p className="mt-1 text-xs text-dim">{pillar.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FinalCall() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-primary p-10 sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -bottom-24 h-72 w-72 rounded-full bg-background/20 blur-3xl"
          />
          <div className="relative">
            <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-primary-foreground sm:text-5xl">
              You don't have to build alone.
            </h2>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80">
              Apply to join Nova Gen and get straight to the next challenge, the next review, and
              the next opportunity.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-2"
              >
                Apply to join
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
              >
                What joining looks like
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Principles />
      <Ecosystem />
      <ChallengeSpotlight />
      <Moments />
      <Values />
      <Partnership />
      <FinalCall />
    </>
  );
}
