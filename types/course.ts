export type Course = {
  id: string;
  title: string;
  description: string;
  thumbnail_url?: string;
  category: string;
  level: "beginner" | "intermediate" | "advanced";
  is_published: boolean;
  created_at: string;
};

export type Lesson = {
  id: string;
  course_id: string;
  title: string;
  content?: string;
  video_url?: string;
  order_index: number;
  is_published: boolean;
  created_at: string;
};

export type LessonProgress = {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  completed_at?: string;
};
