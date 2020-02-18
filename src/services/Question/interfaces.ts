import { questionsActionTypes } from './action-types';

export interface IQuestionModel {
  id: number;
  title: string;
  description: string;
  difficultyLevel: string;
  categories: string[];
  frequency: number;
}

export interface IQuestionState {
  isLoading: boolean;
  count: number;
  questions: IQuestionModel[];
}

interface GetAllQuestionsAction {
  type: questionsActionTypes.SET_LIST;
  payload: IQuestionModel[];
}
