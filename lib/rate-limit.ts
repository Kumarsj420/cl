import "server-only";

const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const hits = new Map<string, number[]>();

/** Per-process limit: enough to stop a form being hammered on a single Node app. */
export function allowRequest(key: string, now = Date.now()) {
  const recent = (hits.get(key) ?? []).filter((time) => now - time < WINDOW_MS);
  if (recent.length >= LIMIT) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) {
    for (const [ip, times] of hits) {
      if (times.every((time) => now - time >= WINDOW_MS)) hits.delete(ip);
    }
  }
  return true;
}
