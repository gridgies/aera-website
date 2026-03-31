interface QuizProgressProps {
  currentStep: number;
  totalSteps: number;
  progress: number;
}

export function QuizProgress({ currentStep, totalSteps, progress }: QuizProgressProps) {
  return (
    <div className="w-full mb-12">
      <div className="flex justify-between items-end mb-4">
        <span className="text-on-surface-variant font-body text-sm tracking-widest uppercase">
          Schritt {String(currentStep).padStart(2, "0")} von{" "}
          {String(totalSteps).padStart(2, "0")}
        </span>
        <span className="text-primary font-headline text-lg italic">
          {progress}% abgeschlossen
        </span>
      </div>
      <div className="h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
        <div
          className="h-full bg-primary-container rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
