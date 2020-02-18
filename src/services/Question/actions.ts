import { Dispatch } from 'redux';
import { getDummyPromise } from '../../global/utils/dummy-promise';
import { dummyQuestions } from './dummy-data';
import { questionsActionTypes } from './action-types';
import { IQuestionModel } from './interfaces';

export const getAllQuestions = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: questionsActionTypes.LOADING });
    return getDummyPromise(dummyQuestions).then((response) => {
      dispatch({ type: questionsActionTypes.LOADED });
      dispatch({ type: questionsActionTypes.SET_LIST, payload: response });
    });
  };
};

export const addQuestion = (question: IQuestionModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: questionsActionTypes.LOADING });
    return getDummyPromise(question).then((response) => {
      dispatch({ type: questionsActionTypes.LOADED });
      dispatch({ type: questionsActionTypes.ADD, payload: response });
    });
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
