import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "config";
import ThemeProvider from "@/contexts/ThemeContext";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const router = createRouter({
  routeTree,
  context: { user: undefined, loading: true, error: undefined }
});

export default function App() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <ThemeProvider>
      {loading ? (
        <main className="bg-background text-foreground dark">Sta caricando...</main>
      ) : (
        <RouterProvider router={router} context={{ user, loading, error }} />
      )}
    </ThemeProvider>
  );
}
