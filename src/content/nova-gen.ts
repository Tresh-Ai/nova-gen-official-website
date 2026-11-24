/**
 * Nova Gen site content. Single source of truth for copy, nav, and asset URLs.
 * Browser-safe: no server-only imports, no process.env.
 */

const ASSET = "/__l5e/assets-v1";

export const LOGO = `${ASSET}/6f3dad5c-67da-46bf-ba8e-62645c29e07d/novagen-mark.jpeg`;
export const CHALLENGE_ART = `${ASSET}/cbe37224-365e-4e6f-9910-87c00236339b/challenge-task-03-04.png`;

const GATHERING_01 = `${ASSET}/75e5461c-9031-4686-b23f-1bb2d6d5b87f/community-gathering-01.jpg`;
const GATHERING_02 = `${ASSET}/340efc61-ee78-4d18-82f9-e0cdd69f1272/community-gathering-02.jpg`;
const GATHERING_03 = `${ASSET}/08c2cc37-cf2c-4c54-bf6f-622ba1462cf8/community-gathering-03.jpg`;
const EVENT_04 = `${ASSET}/db88887d-7bd7-4dee-bf1e-e36e297f5393/community-event-04.jpg`;
const EVENT_05 = `${ASSET}/726c47c7-035a-4850-8d81-a2ab08e4c587/community-event-05.jpg`;

export const SITE = {
  name: "Nova Gen",
  shortName: "NovaGen",
  claim: "A self-driven African technology community.",
  description:
    "Nova Gen is a self-driven African technology community where members build, review, and grow together through bi-weekly challenges, project reviews, and shared opportunities.",
  tallyUrl: "https://tally.so/r/xVJBLr",
  xUrl: "https://x.com/NovaGenHQ",
  xHandle: "@NovaGenHQ",
  whatsapp: "@NovaGen Whatsapp Community",
  year: 2026,
} as const;

export const NAV = [
  { label: "About", to: "/about" },
  { label: "Community", to: "/community" },
  { label: "Challenge", to: "/initiatives/bi-weekly-challenge" },
  { label: "Events", to: "/events" },
  { label: "Partnerships", to: "/partnerships" },
] as const;

export const DISCIPLINES = [
  "Developers",
  "UI/UX Designers",
  "Product Thinkers",
  "Data Analysts",
  "AI/ML Builders",
  "No-Code Creators",
  "Founders",
  "Creatives",
] as const;

export const PHILOSOPHY = {
  quote: "We provide the structure. The members create the activity.",
  note: "Nova Gen is not a classroom and not an audience. It is a working community with a rhythm: a challenge every two weeks, a review, a shared space, and opportunities that move through it.",
} as const;

export const PRINCIPLES = [
  {
    index: "01",
    title: "Growth Through Community",
    body: "Skills compound faster in public. Members learn by shipping alongside other members, not by consuming content alone.",
  },
  {
    index: "02",
    title: "Collaboration Over Isolation",
    body: "Every challenge invites a second pair of eyes. Reviews, feedback, and build-partners are part of the default rhythm.",
  },
  {
    index: "03",
    title: "Opportunities Through Connection",
    body: "Jobs, leads, events, and collaborations circulate inside the community first, so access is not decided by who you already know.",
  },
] as const;

export const ECOSYSTEM = [
  {
    title: "Bi-Weekly Challenges",
    body: "A scoped task lands every two weeks. Members build it, submit it, and get it reviewed.",
  },
  {
    title: "Project Reviews",
    body: "Work in progress gets honest, structured feedback from members and moderators.",
  },
  {
    title: "Jobs & Opportunities",
    body: "Roles, internships, contracts, and leads shared by members and partners before they go public.",
  },
  {
    title: "Events & Resources",
    body: "Sessions, workshops, and curated resources that members can use the same week.",
  },
  {
    title: "Community Connections",
    body: "Introductions, build-partners, and accountability across disciplines and time zones.",
  },
  {
    title: "Collaboration & Building",
    body: "Members team up on real products, prototypes, and content instead of building alone.",
  },
] as const;

export const CHANNELS = [
  {
    name: "General Chat",
    body: "The main floor: introductions, questions, and everyday community conversation.",
  },
  {
    name: "Jobs & Leads",
    body: "Open roles, contracts, and leads posted by members and partners.",
  },
  {
    name: "Events & Resources",
    body: "Upcoming sessions and useful resources, shared in one place.",
  },
  {
    name: "Announcements",
    body: "Official updates from the community team: challenges, deadlines, and changes.",
  },
  {
    name: "Innovation Team",
    body: "Where members push new ideas forward and shape what the community runs next.",
  },
  {
    name: "Content Creators",
    body: "Writers, designers, and video makers documenting what the community builds.",
  },
  {
    name: "Project Reviews",
    body: "Submit work in progress and receive structured feedback.",
  },
] as const;

export const VALUES = [
  {
    title: "Intentionality",
    body: "Members choose what they work on and show up for it.",
  },
  {
    title: "Access",
    body: "Opportunity should not depend on which room you already got into.",
  },
  {
    title: "Excellence",
    body: "Work is reviewed properly, because near-enough is how skills stall.",
  },
  {
    title: "Community",
    body: "The group's progress matters more than any single member's highlight.",
  },
  {
    title: "Curiosity",
    body: "Questions are welcome at every level, including from the people leading.",
  },
  {
    title: "Authenticity",
    body: "Members show real work, real gaps, and real progress.",
  },
  {
    title: "Global Mindset",
    body: "African by origin, building for and competing on a global stage.",
  },
  {
    title: "Reciprocity",
    body: "What members take from the community, they give back to the next member.",
  },
] as const;

export const MOMENTS = [
  {
    src: EVENT_04,
    caption: "Members with lanyards and Nova Gen totes at an indoor expo booth.",
    meta: "Expo day",
    wide: true,
  },
  {
    src: EVENT_05,
    caption: "In front of the AWS Student Builder Group backdrop at Lagos State University.",
    meta: "Campus",
    wide: true,
  },
  {
    src: GATHERING_01,
    caption: "Five members at a web3 milestone session — “20 Years of Bringing Africa On-Chain”.",
    meta: "On the floor",
    wide: false,
  },
  {
    src: GATHERING_02,
    caption: "Handing out community flyers between sessions.",
    meta: "Outreach",
    wide: false,
  },
  {
    src: GATHERING_03,
    caption: "The group in front of the adoption timeline banner.",
    meta: "Together",
    wide: false,
  },
] as const;

export const TEAM = [
  {
    name: "Tomiwa Sanni",
    role: "Founder & Community Lead",
    body: "Started Nova Gen and sets the direction of the community.",
  },
  {
    name: "Angel Batubo",
    role: "Second Community Lead",
    body: "Runs the community alongside the founder.",
  },
  {
    name: "Awoyale Olamilekan (Laycon)",
    role: "Community Manager",
    body: "Manages the day-to-day life of the community spaces.",
  },
  {
    name: "Valian Sajoh",
    role: "Community Moderator",
    body: "Keeps discussions useful and members supported.",
  },
  {
    name: "Sunday Esther (Essy)",
    role: "Community Moderator",
    body: "Keeps discussions useful and members supported.",
  },
] as const;

export const CHALLENGE = {
  code: "Task 03-04",
  title: "Farm to Future — The Scenario",
  deadline: "Saturday 14th Nov 2026",
  where: SITE.whatsapp,
  summary:
    "A scenario-based challenge on the agriculture value chain: members work the problem from farm to market and submit a solution built for the real constraints of the chain.",
  steps: [
    {
      title: "The task is posted",
      body: "A scoped scenario is published to the community with the brief and the deadline.",
    },
    {
      title: "Members build",
      body: "Work alone or in pairs, using the community spaces to unblock fast.",
    },
    {
      title: "Submissions open",
      body: "Members submit their entry through the community before the deadline.",
    },
    {
      title: "Review and feedback",
      body: "Entries are reviewed in the open, so the learning is shared, not private.",
    },
  ],
  archive: [
    { code: "Task 03-04", title: "Farm to Future — The Scenario", status: "Open" },
  ],
} as const;

export const PARTNERSHIPS = {
  lead: {
    title: "ARISE × Harness",
    body: "A collaboration with Harness delivered through ARISE, hosted by Nonye Victory, that brought a working session to the community.",
  },
  pillars: [
    {
      title: "Sessions & Workshops",
      body: "Partners run a session, workshop, or clinic for members.",
    },
    {
      title: "Challenge Sponsorship",
      body: "Partners set a bi-weekly challenge and review the entries.",
    },
    {
      title: "Talent & Opportunities",
      body: "Roles, internships, and contracts shared with the community first.",
    },
    {
      title: "Events & Hackrooms",
      body: "Joint events, build sprints, and on-campus or in-person days.",
    },
  ],
  note: "These are areas Nova Gen is open to working with partners on. They are not programmes already in place.",
} as const;

export const JOIN = {
  headline: "You don't have to build alone.",
  body: "Apply to join Nova Gen. Tell us what you work on and what you want to get better at — the team reviews every application.",
  formUrl: SITE.tallyUrl,
  steps: [
    {
      title: "Apply",
      body: "Fill in the application form: what you build, where you are, what you want.",
    },
    {
      title: "Get reviewed",
      body: "The community team reads applications and replies to every applicant.",
    },
    {
      title: "Join the spaces",
      body: "Accepted members are added to the community channels and the next challenge.",
    },
  ],
} as const;
