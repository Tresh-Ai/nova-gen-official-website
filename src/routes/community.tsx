import { createFileRoute } from "@tanstack/react-router";

import { CommunityPage } from "@/components/site/community";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community | Nova Gen" },
      {
        name: "description",
        content:
          "Six community spaces and the habits that keep them useful at Nova Gen.",
      },
      { property: "og:title", content: "The Nova Gen community" },
      {
        property: "og:description",
        content:
          "Six spaces for conversation, challenges, reviews, and opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});
