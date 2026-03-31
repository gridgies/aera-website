export interface QuizOption {
  icon: string;
  label: string;
  description: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
}

export interface QuizAnswer {
  questionId: number;
  selectedOption: number;
}

export interface Expert {
  id: string;
  name: string;
  title: string;
  specialty: string;
  image: string;
  badge?: string;
  badgeColor?: string;
}

export interface Condition {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface WaitlistFormData {
  email: string;
  topic: string;
}
