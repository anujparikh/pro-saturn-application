import { Dispatch } from 'redux';
import { getDummyPromise } from '../../global/utils/dummy-promise';
import { questionsActionTypes } from './action-types';
import { IQuestionModel } from './interfaces';

export const getAllQuestions = () => {
  return (dispatch: Dispatch, getState: any) => {
    const {
      questions: { questions },
    } = getState();
    dispatch({ type: questionsActionTypes.LOADING });
    return getDummyPromise(questions).then((response) => {
      dispatch({ type: questionsActionTypes.LOADED });
      dispatch({ type: questionsActionTypes.SET_LIST, payload: response });
    });
  };
};

export const addUnsavedQuestion = (question: IQuestionModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: questionsActionTypes.ADD_UNSAVED, payload: question });
  };
};

export const deleteQuestion = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: questionsActionTypes.LOADING });
    return getDummyPromise(id).then((response) => {
      dispatch({ type: questionsActionTypes.LOADED });
      dispatch({ type: questionsActionTypes.DELETE, payload: response });
    });
  };
};

export const deleteQuestions = (ids: number[]) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: questionsActionTypes.LOADING });
    return getDummyPromise(ids).then((response) => {
      dispatch({ type: questionsActionTypes.LOADED });
      dispatch({ type: questionsActionTypes.DELETE_MULTIPLE, payload: response });
    });
  };
};

export const updateQuestions = (id: number, question: IQuestionModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: questionsActionTypes.LOADING });
    return getDummyPromise({ id, question }).then((response) => {
      dispatch({ type: questionsActionTypes.LOADED });
      dispatch({ type: questionsActionTypes.DELETE_MULTIPLE, payload: response });
    });
  };
};
