import { createLazyFileRoute } from "@tanstack/react-router";
import { auth } from "config";
import { signOut } from "firebase/auth";

export const Route = createLazyFileRoute("/_auth/")({
  component: () => <Page />
});

function Page() {
  return (
    <main>
      <button onClick={() => signOut(auth)}>Sign out</button>
    </main>
  );
}
