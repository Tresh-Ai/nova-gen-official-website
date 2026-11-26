import { createFileRoute } from "@tanstack/react-router";

import { EventsPage } from "@/components/site/events";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events | Nova Gen" },
      {
        name: "description",
        content:
          "Virtual sessions, in-person days, and partner working sessions the Nova Gen community takes part in.",
      },
      { property: "og:title", content: "Nova Gen events" },
      {
        property: "og:description",
        content:
          "Expos, campus days, and partner sessions, online and in person.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});
