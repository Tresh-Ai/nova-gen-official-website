import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { CHALLENGE, SITE, TEAM } from "@/content/nova-gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  const router = createRouter({
    routeTree,
    context: { queryClient: new QueryClient() },
  });

  const paths = [
    "/",
    "/about",
    "/community",
    "/initiatives/bi-weekly-challenge",
    "/events",
    "/partnerships",
    "/join",
  ];

  for (const path of paths) {
    it(`matches a page for ${path} instead of falling back to not found`, () => {
      const matches = router.matchRoutes(path);

      expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});

describe("Community facts shown on the site", () => {
  it("points every join action at the official application form", () => {
    expect(SITE.tallyUrl).toBe("https://tally.so/r/xVJBLr");
  });

  it("keeps the open challenge deadline as published", () => {
    expect(CHALLENGE.code).toBe("Task 03-04");
    expect(CHALLENGE.title).toBe("Farm to Future: The Scenario");
    expect(CHALLENGE.deadline).toBe("Saturday 14th Nov 2026");
  });

  it("lists the confirmed team with their agreed titles", () => {
    const titles = TEAM.map((member) => `${member.name}: ${member.role}`);

    expect(titles).toContain("Tomiwa Sanni: Founder & Community Lead");
    expect(titles).toContain("Angel Batubo: Second Community Lead");
    expect(titles).toContain("Awoyale Olamilekan (Laycon): Community Manager");
    expect(titles).toContain("Valian Sajoh: Community Moderator");
    expect(titles).toContain("Sunday Esther (Essy): Community Moderator");
  });
});
