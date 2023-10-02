import type { LoaderFunctionArgs } from "@remix-run/node";

import { redirect } from "@remix-run/node";
import { getUserData } from "~/utils/session.server";

import { Logout } from "./logout";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUserData(request);
  if (!user) return redirect("/");
  return null;
}

export default function DashboardRoute() {
  return (
    <div>
      <div className="py-4">
        <h1>Dashboard</h1>
        <p>Welcome to your dashboard.</p>
      </div>

      <Logout />
    </div>
  );
}
