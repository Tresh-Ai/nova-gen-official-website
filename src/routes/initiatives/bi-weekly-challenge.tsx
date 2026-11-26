import { createFileRoute } from "@tanstack/react-router";

import { ChallengePage } from "@/components/site/challenge";

export const Route = createFileRoute("/initiatives/bi-weekly-challenge")({
  head: () => ({
    meta: [
      { title: "Bi-Weekly Challenge | Nova Gen" },
      {
        name: "description",
        content:
          "How the Nova Gen bi-weekly challenge works, from the Monday brief to peer reviews and Saturday submissions.",
      },
      { property: "og:title", content: "The Nova Gen bi-weekly challenge" },
      {
        property: "og:description",
        content:
          "A recurring build rhythm with a shared brief, peer feedback, Saturday submissions, and community sharing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ChallengePage,
});
