export interface User {
  firstName: string;
  lastName: string;
}

export interface QuizProgress {
  videoId: number | null;
  videoTitle: string | null;
  playlistId: number | null;
  playlistTitle: string | null;
  totalQuestions: number;
  answeredQuestions: number;
  correctAnswers: number;
}

export interface AccountResponse {
  user: User;
  progress: QuizProgress[];
}
