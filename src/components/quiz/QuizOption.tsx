import { QuizOption as QuizOptionType } from "@/types";

interface QuizOptionProps {
  option: QuizOptionType;
  isSelected: boolean;
  onClick: () => void;
  multiSelect?: boolean;
}

export function QuizOption({ option, isSelected, onClick, multiSelect }: QuizOptionProps) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isSelected}
      className={`group relative flex items-center p-6 rounded-xl transition-all duration-300 w-full text-left ${
        isSelected
          ? "bg-surface-container-lowest border-2 border-primary shadow-sm"
          : "bg-surface-container-low border border-transparent hover:bg-surface-container-lowest hover:border-primary/40"
      }`}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center mr-6 ${
          isSelected
            ? "bg-primary text-on-primary"
            : "bg-surface-container-highest text-on-surface-variant"
        }`}
      >
        <span className="material-symbols-outlined">{option.icon}</span>
      </div>

      {/* Text */}
      <div className="flex-grow">
        <span className="block text-base font-semibold text-on-surface leading-snug">
          {option.label}
        </span>
        <span className="block text-on-surface-variant text-sm mt-1 leading-relaxed">
          {option.description}
        </span>
      </div>

      {/* Checkbox (multi) or check circle (single) */}
      <div className="ml-4 flex-shrink-0">
        {multiSelect ? (
          <div
            className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${
              isSelected
                ? "bg-primary border-primary"
                : "border-outline-variant group-hover:border-primary/60"
            }`}
          >
            {isSelected && (
              <span className="material-symbols-outlined text-on-primary text-sm">check</span>
            )}
          </div>
        ) : (
          <span
            className={`material-symbols-outlined transition-opacity ${
              isSelected ? "text-primary opacity-100" : "text-on-surface-variant opacity-0 group-hover:opacity-40"
            }`}
          >
            {isSelected ? "check_circle" : "radio_button_unchecked"}
          </span>
        )}
      </div>
    </button>
  );
}
