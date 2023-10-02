import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { SubmitButton } from "~/components/SubmitButton";

import { logout } from "~/utils/session.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  return logout(request);
};

export const loader = async () => {
  return redirect("/");
};

export function Logout() {
  return (
    <div className="hidden md:flex md:items-center md:space-x-6">
      <Form method="post" action="/logout">
        <SubmitButton text="Log out" />
      </Form>
    </div>
  );
}
