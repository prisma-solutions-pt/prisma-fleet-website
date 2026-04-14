const POSTHOG_HOST = "https://eu.posthog.com";

export async function hogQL<T = unknown[]>(query: string): Promise<T[]> {
  const key = process.env.POSTHOG_PERSONAL_API_KEY;
  const projectId = process.env.POSTHOG_PROJECT_ID;
  if (!key || !projectId) return [];

  try {
    const res = await fetch(`${POSTHOG_HOST}/api/projects/${projectId}/query/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ query: { kind: "HogQLQuery", query } }),
      cache: "no-store",
    });
    if (!res.ok) {
      console.error("PostHog query failed:", res.status, await res.text().catch(() => ""));
      return [];
    }
    const json = await res.json();
    return (json.results ?? []) as T[];
  } catch (e) {
    console.error("PostHog query error:", e);
    return [];
  }
}

export async function listRecentRecordings(limit = 10) {
  const key = process.env.POSTHOG_PERSONAL_API_KEY;
  const projectId = process.env.POSTHOG_PROJECT_ID;
  if (!key || !projectId) return [];

  try {
    const res = await fetch(
      `${POSTHOG_HOST}/api/projects/${projectId}/session_recordings/?limit=${limit}`,
      {
        headers: { Authorization: `Bearer ${key}` },
        cache: "no-store",
      },
    );
    if (!res.ok) return [];
    const json = await res.json();
    return (json.results ?? []) as Array<{
      id: string;
      start_time: string;
      recording_duration: number;
      person?: { properties?: { $geoip_country_name?: string } };
      click_count?: number;
      keypress_count?: number;
    }>;
  } catch {
    return [];
  }
}

export function recordingUrl(id: string) {
  return `${POSTHOG_HOST}/project/${process.env.POSTHOG_PROJECT_ID}/replay/${id}`;
}
