import { createFileRoute } from "@tanstack/react-router";

import { ChallengePage } from "@/components/site/challenge";

export const Route = createFileRoute("/initiatives/bi-weekly-challenge")({
  head: () => ({
    meta: [
      { title: "Bi-Weekly Challenge — Nova Gen" },
      {
        name: "description",
        content:
          "How Nova Gen's bi-weekly challenge runs, the open task, and the archive of challenges posted so far.",
      },
      { property: "og:title", content: "The Nova Gen bi-weekly challenge" },
      {
        property: "og:description",
        content:
          "One scoped task every two weeks: build it, submit it before the deadline, and get it reviewed in the open.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChallengePage,
});
