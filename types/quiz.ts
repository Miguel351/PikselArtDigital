export type Quiz = {
  id: string;
  course_id: string;
  title: string;
  description?: string;
  time_limit_minutes?: number;
  is_published: boolean;
  created_at: string;
};

export type QuizQuestion = {
  id: string;
  quiz_id: string;
  question: string;
  options: string[];
  correct_answer: number;
  order_index: number;
};

export type QuizResult = {
  id: string;
  user_id: string;
  quiz_id: string;
  score: number;
  total_questions: number;
  answers: Record<string, number>;
  completed_at: string;
};
