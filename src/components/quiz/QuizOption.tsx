import { QuizOption as QuizOptionType } from "@/types";

interface QuizOptionProps {
  option: QuizOptionType;
  isSelected: boolean;
  onClick: () => void;
}

export function QuizOption({ option, isSelected, onClick }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      className={`group relative flex items-center p-6 rounded-xl transition-all duration-300 w-full text-left ${
        isSelected
          ? "bg-surface-container-lowest border-2 border-primary-container shadow-sm"
          : "bg-surface-container-low border border-transparent hover:bg-surface-container-lowest hover:border-primary-container"
      }`}
    >
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
          isSelected
            ? "bg-primary-container text-on-primary-container"
            : "bg-surface-container-highest text-on-surface-variant"
        }`}
      >
        <span className="material-symbols-outlined">{option.icon}</span>
      </div>
      <div className="flex-grow">
        <span className="block text-xl font-semibold text-on-surface">
          {option.label}
        </span>
        <span className="block text-on-surface-variant text-sm mt-1">
          {option.description}
        </span>
      </div>
      <div
        className={`transition-opacity ${
          isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <span
          className={`material-symbols-outlined text-primary ${
            isSelected ? "filled" : ""
          }`}
        >
          check_circle
        </span>
      </div>
    </button>
  );
}
