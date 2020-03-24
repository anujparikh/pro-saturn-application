import { questionsActionTypes } from './action-types';

export enum DifficultyLevels {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
export interface IQuestionModel {
  id: number;
  key: number;
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

interface GetAllQuestionsAction {
  type: questionsActionTypes.SET_LIST;
  payload: IQuestionModel[];
}
