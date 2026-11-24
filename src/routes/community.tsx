import { createFileRoute } from "@tanstack/react-router";

import { CommunityPage } from "@/components/site/community";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "Community — Nova Gen" },
      {
        name: "description",
        content:
          "Seven community spaces, the habits that keep them useful, and the rhythm members follow at Nova Gen.",
      },
      { property: "og:title", content: "The Nova Gen community" },
      {
        property: "og:description",
        content:
          "Seven spaces, one working community: conversation, challenges, reviews, and opportunities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CommunityPage,
});
