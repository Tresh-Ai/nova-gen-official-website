import { createFileRoute } from "@tanstack/react-router";

import { HomePage } from "@/components/site/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Gen | African technology community" },
      {
        name: "description",
        content:
          "Nova Gen is a self-driven African technology community. Members ship a bi-weekly challenge, review each other's work, and move opportunities through the group.",
      },
      { property: "og:title", content: "Nova Gen | The Next Generation Starts Here" },
      {
        property: "og:description",
        content:
          "A self-driven African technology community: bi-weekly challenges, project reviews, and opportunities that move through the group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});
