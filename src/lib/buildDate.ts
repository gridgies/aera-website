import { execSync } from "child_process";

/** Returns the git committer date (YYYY-MM-DD) for a file path, computed at build time. */
export function gitDateStr(filePath: string): string {
  try {
    const iso = execSync(`git log -1 --format=%cI -- "${filePath}"`, {
      encoding: "utf8",
      stdio: ["pipe", "pipe", "pipe"],
    }).trim();
    return iso ? iso.split("T")[0] : "2026-01-01";
  } catch {
    return "2026-01-01";
  }
}
