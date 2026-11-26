import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/components/site/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Nova Gen" },
      {
        name: "description",
        content:
          "The story behind the name, the mission and vision of Nova Gen, and the team that keeps the community running.",
      },
      { property: "og:title", content: "About Nova Gen" },
      {
        property: "og:description",
        content:
          "A self-driven African technology community: the story behind the name, the mission, the vision, and the team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});
