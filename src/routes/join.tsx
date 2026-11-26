import { createFileRoute } from "@tanstack/react-router";

import { JoinPage } from "@/components/site/join";

export const Route = createFileRoute("/join")({
  head: () => ({
    meta: [
      { title: "Join | Nova Gen" },
      {
        name: "description",
        content:
          "Apply to join Nova Gen: what the application asks, what happens after, and what members get once they're in.",
      },
      { property: "og:title", content: "Join Nova Gen" },
      {
        property: "og:description",
        content:
          "Apply to join a self-driven African technology community. Tell us what you build and what you want next.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JoinPage,
});
