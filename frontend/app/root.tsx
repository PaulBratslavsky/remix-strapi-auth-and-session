import {
  type LoaderFunctionArgs,
  type LinksFunction,
  json,
} from "@remix-run/node";
import { getUserData } from "./utils/session.server";
import stylesheet from "~/tailwind.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import TopNav from "./components/TopNav";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await getUserData(request);
  if (user) return json({ ...user });
  else return null;
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="container mx-auto py-6 px-4">
        <TopNav data={data} />
        {data && (
          <div className="py-4">
            <h1 className="text-2xl">Welcome: {data?.user.username}</h1>
          </div>
        )}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
