import { createUserSession } from "~/utils/session.server";

export async function login(data: any) {
  const baseUrl = process.env.BASE_URL;
  const query = `/api/auth/local`;
  const request = await fetch(baseUrl + query, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await request.json();
  if (response.error) return { error: response.error };
  return await createUserSession("/dashboard", {
    user: response.user,
    jwt: response.jwt,
  });
}
