"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { QUIZ_QUESTIONS } from "@/lib/constants";
import { QuizProgress } from "./QuizProgress";
import { QuizQuestion } from "./QuizQuestion";
import { QuizAnswer } from "@/types";

export function QuizContainer() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [
      ...answers.filter((a) => a.questionId !== currentQuestion.id),
      { questionId: currentQuestion.id, selectedOption },
    ];
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
    } else {
      localStorage.setItem("aera_quiz_answers", JSON.stringify(newAnswers));
      router.push("/auswertung");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      const previousAnswer = answers.find(
        (a) => a.questionId === QUIZ_QUESTIONS[currentStep - 1].id
      );
      setSelectedOption(previousAnswer?.selectedOption ?? null);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <QuizProgress
        currentStep={currentStep + 1}
        totalSteps={totalSteps}
        progress={progress}
      />

      <QuizQuestion
        question={currentQuestion}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
      />

      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
        {currentStep > 0 && (
          <button
            onClick={handleBack}
            className="text-primary font-semibold flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span>Zurück</span>
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className={`bg-primary text-on-primary px-12 py-4 rounded-full text-lg font-bold shadow-lg transition-all min-w-[240px] ${
            selectedOption === null
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-90 active:scale-95"
          }`}
        >
          {currentStep === totalSteps - 1 ? "Auswertung ansehen" : "Weiter"}
        </button>
      </div>

      <div className="mt-12 p-6 bg-secondary-container rounded-xl flex items-start gap-4 text-left max-w-xl mx-auto">
        <span className="material-symbols-outlined text-on-secondary-container mt-0.5">
          info
        </span>
        <p className="text-on-secondary-container text-sm leading-relaxed">
          Deine Antworten helfen uns, ein ganzheitliches Bild deiner Gesundheit
          zu erstellen und dir personalisierte Empfehlungen zu geben.
        </p>
      </div>
    </div>
  );
}
