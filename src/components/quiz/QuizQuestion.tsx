import { QuizQuestion as QuizQuestionType } from "@/types";
import { QuizOption } from "./QuizOption";

interface QuizQuestionProps {
  question: QuizQuestionType;
  /** For single-select: number | null. For multi-select: number[] */
  selectedAnswer: number | number[] | null;
  onOptionSelect: (index: number) => void;
}

export function QuizQuestion({ question, selectedAnswer, onOptionSelect }: QuizQuestionProps) {
  const isMulti = question.multiSelect ?? false;

  const isSelected = (index: number): boolean => {
    if (isMulti) {
      return Array.isArray(selectedAnswer) && selectedAnswer.includes(index);
    }
    return selectedAnswer === index;
  };

  return (
    <section className="w-full text-center">
      <h1 className="text-4xl md:text-5xl font-headline text-primary mb-4 leading-tight">
        {question.question}
      </h1>
      <p className="text-on-surface-variant mb-3 text-lg">{question.subtitle}</p>

      {isMulti && (
        <p className="text-sm text-primary font-semibold mb-8 flex items-center justify-center gap-1.5">
          <span className="material-symbols-outlined text-base">check_box</span>
          Mehrere Antworten möglich
        </p>
      )}
      {!isMulti && <div className="mb-8" />}

      <div className="grid grid-cols-1 gap-3 text-left">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            option={option}
            isSelected={isSelected(index)}
            onClick={() => onOptionSelect(index)}
            multiSelect={isMulti}
          />
        ))}
      </div>
    </section>
  );
}
