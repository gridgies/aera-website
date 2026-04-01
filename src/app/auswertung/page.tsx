import { AuswertungClient } from "@/components/quiz/AuswertungClient";

export const metadata = {
  title: "Deine Auswertung | Aera Health",
  description: "Deine persönliche Hormon-Analyse basierend auf deinen Symptomen – wissenschaftlich fundiert.",
  robots: { index: false, follow: false },
};

export default function AuswertungPage() {
  return <AuswertungClient />;
}
