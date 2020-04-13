export enum DifficultyLevels {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
export interface IQuestionModel {
  id: string;
  key: string;
  title: string;
  question?: string;
  solution?: string;
  difficultyLevel: DifficultyLevels;
  categories: string[];
  frequency?: number;
}

export interface IQuestionState {
  isLoading: boolean;
  count: number;
  unsavedQuestions: IQuestionModel[];
  questions: IQuestionModel[];
}
