import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diet Soda | Pure Zero Refreshment" },
      {
        name: "description",
        content: "Experience the crisp, clean taste of Diet Soda. Zero sugar, zero compromise.",
      },
      { property: "og:title", content: "Diet Soda | Pure Zero Refreshment" },
      {
        property: "og:description",
        content: "Experience the crisp, clean taste of Diet Soda. Zero sugar, zero compromise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/soda.html"
      title="Diet Soda | Pure Zero Refreshment"
      className="fixed inset-0 h-screen w-screen border-0"
    />
  );
}
