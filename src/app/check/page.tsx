import { QuizContainer } from "@/components/quiz/QuizContainer";

export const metadata = {
  title: "Kostenloser Symptom-Check: Wechseljahre, Hashimoto oder Hormone?",
  description: "Beantworte 10 Fragen und erhalte eine erste Einschätzung: Wechseljahre, Hashimoto oder hormonelle Dysbalance?",
};

export default function CheckPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <QuizContainer />

      <div className="fixed bottom-0 left-0 w-64 h-64 bg-primary-container opacity-20 blur-[100px] pointer-events-none -z-10" />
      <div className="fixed top-1/4 right-0 w-96 h-96 bg-secondary-container opacity-30 blur-[120px] pointer-events-none -z-10" />
    </div>
  );
}
