export interface QuizScores {
  P: number;  // Perimenopause / Wechseljahre
  H: number;  // Hashimoto / Schilddrüse
  C: number;  // Cortisol / HPA-Achse
  E: number;  // Östrogendominanz / Progesteronmangel
  A: number;  // Androgen-Überschuss / PCOS
  Fe: number; // Eisenmangel
}

export interface QuizOption {
  icon: string;
  label: string;
  description: string;
  scores: QuizScores;
  /** Age group identifier (only on the age question) */
  ageGroup?: "young" | "thirties" | "early_peri" | "peri" | "post";
  /** If true, selecting this deselects all others (e.g. "Keines davon") */
  exclusive?: boolean;
  /** Endometriosis signal strength — accumulated separately from profile scores */
  endoSignal?: number;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: QuizOption[];
  /** Allow selecting multiple answers */
  multiSelect?: boolean;
}

export interface QuizAnswer {
  questionId: number;
  /** Single index for single-select, array of indices for multi-select */
  selectedOption: number | number[];
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
