export interface Topic {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Lesson {
  id: string;
  topicId: string;
  title: string;
  description: string;
  duration: number; // in minutes
  completed: boolean;
  content: string;
  codeExample?: string;
}

export interface Exercise {
  id: string;
  topicId: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  completed: boolean;
  instructions: string;
  codeTemplate?: string;
  solution?: string;
  hints: string[];
}

export interface UserProgress {
  userId: string;
  completedLessons: string[];
  completedExercises: string[];
  points: number;
  streak: number;
  lastActive: Date;
}