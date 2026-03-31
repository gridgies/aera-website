import { QuizQuestion as QuizQuestionType } from "@/types";
import { QuizOption } from "./QuizOption";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedOption: number | null;
  onOptionSelect: (index: number) => void;
}

export function QuizQuestion({
  question,
  selectedOption,
  onOptionSelect,
}: QuizQuestionProps) {
  return (
    <section className="w-full text-center">
      <h1 className="text-4xl md:text-5xl font-headline text-primary mb-6 leading-tight">
        {question.question}
      </h1>
      <p className="text-on-surface-variant mb-12 text-lg">{question.subtitle}</p>

      <div className="grid grid-cols-1 gap-4 text-left">
        {question.options.map((option, index) => (
          <QuizOption
            key={index}
            option={option}
            isSelected={selectedOption === index}
            onClick={() => onOptionSelect(index)}
          />
        ))}
      </div>
    </section>
  );
}
