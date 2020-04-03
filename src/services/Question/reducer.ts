import { IQuestionState } from './interfaces';
import { questionsActionTypes } from './action-types';

const initialState: IQuestionState = {
  isLoading: false,
  count: 0,
  unsavedQuestions: [],
  questions: [],
};

export const questionsReducer = (state: IQuestionState = initialState, action: any) => {
  switch (action.type) {
    case questionsActionTypes.LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case questionsActionTypes.LOADED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case questionsActionTypes.SET_LIST: {
      return {
        ...state,
        questions: action.payload,
      };
    }
    case questionsActionTypes.ADD_UNSAVED: {
      return {
        ...state,
        count: state.count + 1,
        unsavedQuestions: [...state.unsavedQuestions, action.payload],
      };
    }
    case questionsActionTypes.DELETE: {
      const questions = [...state.questions];
      questions.splice(action.payload, 1);
      return {
        ...state,
        count: state.count - 1,
        questions,
      };
    }
    case questionsActionTypes.DELETE_MULTIPLE: {
      const questions = state.questions.filter((q) => action.payload.find(q.id) === -1);
      return {
        ...state,
        count: state.count - action.payload.length,
        questions,
      };
    }
    case questionsActionTypes.UPDATE_QUESTION: {
      const index = state.questions.findIndex((q) => q.id === action.payload.id);
      const questions = [
        ...state.questions.slice(0, index),
        action.payload.question,
        ...state.questions.slice(index + 1),
      ];
      return {
        ...state,
        questions,
      };
    }
    default:
      return state;
  }
};
