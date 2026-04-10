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
  // Unified selection state: number for single-select, number[] for multi-select, null = nothing chosen
  const [selectedAnswer, setSelectedAnswer] = useState<number | number[] | null>(null);

  const totalSteps = QUIZ_QUESTIONS.length;
  const currentQuestion = QUIZ_QUESTIONS[currentStep];
  const isMulti = currentQuestion.multiSelect ?? false;

  // ─── Determine if the user has made a valid selection ──────────────────────
  const isAnswered = isMulti
    ? Array.isArray(selectedAnswer) && (selectedAnswer as number[]).length > 0
    : selectedAnswer !== null && !Array.isArray(selectedAnswer);

  // ─── Option selection handler ──────────────────────────────────────────────
  const handleOptionSelect = (index: number) => {
    if (!isMulti) {
      setSelectedAnswer(index);
      return;
    }

    // Multi-select logic
    const current = Array.isArray(selectedAnswer) ? (selectedAnswer as number[]) : [];
    const isExclusive = currentQuestion.options[index]?.exclusive ?? false;

    if (isExclusive) {
      // "Keines davon": if already selected → deselect (empty), else select exclusively
      setSelectedAnswer(current.includes(index) ? [] : [index]);
    } else {
      // Remove any exclusive option that was previously selected
      const withoutExclusive = current.filter(
        (i) => !(currentQuestion.options[i]?.exclusive ?? false)
      );
      if (withoutExclusive.includes(index)) {
        // Deselect
        setSelectedAnswer(withoutExclusive.filter((i) => i !== index));
      } else {
        // Add
        setSelectedAnswer([...withoutExclusive, index]);
      }
    }
  };

  // ─── Navigate forward ──────────────────────────────────────────────────────
  const handleNext = () => {
    if (!isAnswered) return;

    const answer: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedOption: selectedAnswer as number | number[],
    };

    const newAnswers = [
      ...answers.filter((a) => a.questionId !== currentQuestion.id),
      answer,
    ];
    setAnswers(newAnswers);

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      // Restore previous answer for the next question (if navigated back previously)
      const nextQuestion = QUIZ_QUESTIONS[currentStep + 1];
      const existing = newAnswers.find((a) => a.questionId === nextQuestion.id);
      setSelectedAnswer(existing?.selectedOption ?? null);
    } else {
      localStorage.setItem("aera_quiz_answers", JSON.stringify(newAnswers));
      router.push("/auswertung");
    }
  };

  // ─── Navigate backward ─────────────────────────────────────────────────────
  const handleBack = () => {
    if (currentStep === 0) return;
    const prevQuestion = QUIZ_QUESTIONS[currentStep - 1];
    const prevAnswer = answers.find((a) => a.questionId === prevQuestion.id);
    setCurrentStep(currentStep - 1);
    setSelectedAnswer(prevAnswer?.selectedOption ?? null);
  };

  const progress = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <QuizProgress
        currentStep={currentStep + 1}
        totalSteps={totalSteps}
        progress={progress}
      />

      <QuizQuestion
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onOptionSelect={handleOptionSelect}
      />

      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6">
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
          disabled={!isAnswered}
          className={`bg-primary text-on-primary px-12 py-4 rounded-full text-lg font-bold shadow-lg transition-all min-w-[240px] ${
            !isAnswered
              ? "opacity-50 cursor-not-allowed"
              : "hover:opacity-90 active:scale-95"
          }`}
        >
          {currentStep === totalSteps - 1 ? "Auswertung ansehen" : "Weiter"}
        </button>
      </div>

      <div className="mt-10 p-5 bg-secondary-container rounded-xl flex items-start gap-4 text-left max-w-xl mx-auto">
        <span className="material-symbols-outlined text-on-secondary-container mt-0.5">info</span>
        <p className="text-on-secondary-container text-sm leading-relaxed">
          Deine Antworten helfen uns, ein ganzheitliches Bild deiner Gesundheit
          zu erstellen und dir personalisierte Empfehlungen zu geben.
        </p>
      </div>
    </div>
  );
}
