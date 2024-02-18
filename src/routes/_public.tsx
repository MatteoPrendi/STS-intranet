import { Outlet, createFileRoute, redirect } from "@tanstack/react-router";
import Logo from "@/assets/icons/Logo";

export const Route = createFileRoute("/_public")({
  beforeLoad: async ({ context }) => {
    if (context.user) {
      throw redirect({ to: "/" });
    }
  },
  component: () => <Layout />
});

function Layout() {
  return (
    <main className="mx-auto w-full max-w-unit-8xl flex-col flex-center">
      <Logo className="mb-8 w-unit-5xl" />
      <Outlet />
    </main>
  );
}
