/**
 * Nova Gen site content. Single source of truth for copy, nav, and asset URLs.
 * Browser-safe: no server-only imports, no process.env.
 */

export const LOGO = "/images/novagen-mark.jpeg";
export const CHALLENGE_ART = "/images/challenge-task-03-04.png";

const GATHERING_01 = "/images/community-gathering-01.jpg";
const GATHERING_02 = "/images/community-gathering-02.jpg";
const GATHERING_03 = "/images/community-gathering-03.jpg";
const EVENT_04 = "/images/community-event-04.jpg";
const EVENT_05 = "/images/community-event-05.jpg";

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
    caption: "Five members at a web3 milestone session, 20 Years of Bringing Africa On-Chain.",
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
  cadence: "Every two weeks",
  heroTitle: "A clear rhythm for building together.",
  heroBody:
    "Every two weeks, a new brief gives members time to plan, build, share progress, get reviews, and submit finished work.",
  steps: [
    {
      day: "Monday",
      title: "The challenge is posted",
      body: "A new challenge brief is shared in the community. Members post what they plan to build.",
    },
    {
      day: "During the week",
      title: "Share progress and get reviews",
      body: "Members share updates in the group, ask for reviews, and get feedback from other builders.",
    },
    {
      day: "Before Saturday",
      title: "Make improvements",
      body: "Use the feedback to make corrections and prepare the final submission.",
    },
    {
      day: "Saturday",
      title: "Submit the finished work",
      body: "Members submit their final work to the community.",
    },
    {
      day: "After submission",
      title: "Share the work on X",
      body: "The community comes together to share the work on the Nova Gen X account.",
    },
  ],
  entries: [
    {
      code: "Task 03-04",
      status: "Open now",
      title: "Farm to Future — The Scenario",
      deadline: "Saturday 14th Nov 2026",
      brief: "Farm to Future — The Scenario",
      image: CHALLENGE_ART,
    },
  ],
  archiveTitle: "Challenge archive",
  archiveIntro:
    "Current and past briefs are listed here. Open a challenge to read its details.",
  emptyTitle: "No challenges listed yet",
  emptyBody: "When a challenge is ready, it will be added here. The challenge rhythm stays the same every two weeks.",
  detailLabels: {
    brief: "Challenge brief",
    deliverables: "What to submit",
    submission: "Submission link",
    close: "Close details",
  },
} as const;

export const PARTNERSHIPS = {
  areas: [
    {
      title: "Sessions and workshops",
      body: "Host a session, workshop, or practical clinic for members.",
    },
    {
      title: "Challenge sponsorship",
      body: "Set a brief for a bi-weekly challenge and offer feedback to participants.",
    },
    {
      title: "Talent and opportunities",
      body: "Share roles, internships, and contracts with the community.",
    },
    {
      title: "Events and community activations",
      body: "Plan an event or activation with Nova Gen members.",
    },
    {
      title: "Creator campaigns",
      body: "Work with community content creators on campaigns and ambassador programmes.",
    },
    {
      title: "Campus ambassadors",
      body: "Explore campus ambassador activities with students in the community.",
    },
  ],
  note: "These are areas Nova Gen is open to exploring with partners. They are not programmes already in place.",
  lead: {
    title: "Collaboration with Honest (ARISE)",
    body: "Nova Gen collaborated with Honest on ARISE, an online conference for the community.",
  },
} as const;

export const JOIN = {
  headline: "You don't have to build alone.",
  body: "Apply to join Nova Gen. Tell us what you work on and what you want to get better at. The team reviews every application.",
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
