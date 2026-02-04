export async function signup({
  email,
  interests,
  source,
}: {
  email: string;
  interests: string[];
  source: string;
}) {
  const apiUrl = process.env.NEXT_PUBLIC_SIGNUP_API;

  if (!apiUrl) {
    throw new Error("Signup API URL is not configured");
  }

  const response = await fetch(`${apiUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      interests: interests.map((i) => i.toLowerCase()),
      source,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Failed to sign up");
  }

  return response.json();
}
