// Companion layout — renders below the fixed navbar, fills remaining viewport
export default function CompanionLayout({ children }: { children: React.ReactNode }) {
  return <div className="pt-16">{children}</div>;
}
