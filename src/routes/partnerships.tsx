import { createFileRoute } from "@tanstack/react-router";

import { PartnershipsPage } from "@/components/site/partnerships";

export const Route = createFileRoute("/partnerships")({
  head: () => ({
    meta: [
      { title: "Partnerships | Nova Gen" },
      {
        name: "description",
        content:
          "Areas Nova Gen is open to exploring with partners: sessions, sponsored challenges, talent pipelines, and joint events.",
      },
      { property: "og:title", content: "Partner with Nova Gen" },
      {
        property: "og:description",
        content:
          "Work with a community that already builds: sessions, sponsored challenges, talent, and joint events.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnershipsPage,
});
