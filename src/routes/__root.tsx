import { NextUIProvider } from "@nextui-org/react";
import { IconContext } from "@phosphor-icons/react";
import { Outlet, createRootRouteWithContext, useNavigate } from "@tanstack/react-router";
import { auth } from "config";
import type { User } from "firebase/auth";

import useTheme from "@/hooks/useTheme";

interface ContextTypes {
  user: User | null | undefined;
  loading: boolean;
  error: Error | undefined;
}
export const Route = createRootRouteWithContext<ContextTypes>()({
  beforeLoad: async () => {
    await auth.authStateReady();
  },
  component: () => <Layout />
});

function Layout() {
  const nav = useNavigate();
  const { isDarkMode } = useTheme();

  return (
    <NextUIProvider
      navigate={path => nav({ to: path })}
      className={`flex min-h-screen flex-col bg-background text-foreground ${isDarkMode ? "dark" : ""}`}>
      <IconContext.Provider value={{ weight: "bold", size: 16, mirrored: false }}>
        <Outlet />
      </IconContext.Provider>
    </NextUIProvider>
  );
}
