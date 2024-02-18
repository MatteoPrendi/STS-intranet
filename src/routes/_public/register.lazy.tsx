import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_public/register")({
  component: () => <Page />
});

function Page() {
  return <></>;
}
