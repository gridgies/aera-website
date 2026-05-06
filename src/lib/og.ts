const MAX_TITLE = 80;
const MAX_SUBTITLE = 120;

export function ogUrl(title: string, subtitle?: string): string {
  const t = encodeURIComponent(title.slice(0, MAX_TITLE));
  const s = subtitle
    ? `&subtitle=${encodeURIComponent(subtitle.slice(0, MAX_SUBTITLE))}`
    : "";
  return `/og?title=${t}${s}`;
}
