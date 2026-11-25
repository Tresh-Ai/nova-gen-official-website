import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import { MomentGallery } from "@/components/site/moments";
import { PageHero, SectionHeading } from "@/components/site/site-layout";
import {
  CHALLENGE,
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
    <section className="border-b border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
        <div>
          <p className="eyebrow rise">For African builders</p>
          <h1 className="mt-5 text-5xl leading-[0.95] font-semibold tracking-tight text-foreground sm:text-7xl">
            The Next Generation
            <br />
            Starts <span className="text-primary">Here.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-dim">
            Nova Gen brings African technologists together to build, share progress, review work,
            and find opportunities.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={SITE.tallyUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Join the community
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-sm hairline px-6 py-3 text-sm font-medium text-foreground transition hover:border-primary/40 hover:text-primary"
            >
              Discover Nova Gen
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <figure className="rise">
          <div className="overflow-hidden rounded-md">
            <img
              src={MOMENTS[0]?.src}
              alt="Nova Gen members with lanyards and community totes at an expo booth"
              className="h-72 w-full object-cover sm:h-96"
              loading="eager"
            />
          </div>
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
          "{PHILOSOPHY.quote}"
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
          eyebrow="How we work"
          title="Built around people doing the work"
          intro="Members learn by building, sharing progress, and helping one another improve."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {PRINCIPLES.map((item) => (
            <div key={item.index} className="py-2">
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
          eyebrow="The community"
          title="Six ways to take part"
          intro="Choose a place to start and take part at your own pace."
        />
        <div className="mt-12 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {ECOSYSTEM.map((item) => (
            <article key={item.title} className="border-t border-line py-5">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-dim">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChallengeSpotlight() {
  return (
    <section className="border-b border-line bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <div className="grid gap-8 rounded-md bg-surface p-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="eyebrow">Bi-weekly challenge</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
              A shared brief, every two weeks
            </h2>
            <p className="mt-4 text-base text-dim">
              The challenge starts on Monday. Members share their ideas and progress, get reviews,
              submit on Saturday, and share the work through Nova Gen on X.
            </p>
            <Link
              to="/initiatives/bi-weekly-challenge"
              className="mt-8 inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              See how the challenge works
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <dl className="flex flex-col justify-center gap-5 border-l border-line pl-6">
            <div>
              <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                Cadence
              </dt>
              <dd className="mt-2 text-sm font-medium text-foreground">{CHALLENGE.cadence}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.68rem] tracking-widest text-dim uppercase">
                Cycle
              </dt>
              <dd className="mt-2 text-sm font-medium text-foreground">Monday brief to Saturday submission</dd>
            </div>
          </dl>
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
          eyebrow="Community moments"
          title="Members building together"
          intro="A look at Nova Gen members showing up at community and technology events."
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
        <SectionHeading eyebrow="Our values" title="What guides the community" />
        <div className="mt-12 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((item) => (
            <div key={item.title} className="border-t border-line pt-4">
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
        <div className="grid gap-10 bg-surface p-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="eyebrow">Partnerships</p>
            <h2 className="mt-3 text-3xl font-semibold text-foreground">
              Build something with Nova Gen
            </h2>
            <p className="mt-4 text-base text-dim">
              Work with our community through events, creator campaigns, learning sessions, and
              opportunities.
            </p>
            <Link
              to="/partnerships"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Explore partnership options
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {PARTNERSHIPS.areas.slice(0, 4).map((pillar) => (
              <li key={pillar.title} className="border-t border-line pt-4">
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
        <div className="bg-primary p-8 sm:p-14">
          <div>
            <h2 className="max-w-2xl text-3xl leading-tight font-semibold text-primary-foreground sm:text-5xl">
              You do not have to build alone.
            </h2>
            <p className="mt-5 max-w-xl text-base text-primary-foreground/80">
              Join a community where members share work, feedback, and opportunities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={SITE.tallyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-sm bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-surface-2"
              >
                Apply to join
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <Link
                to="/join"
                className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/25 px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-primary-foreground/10"
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
