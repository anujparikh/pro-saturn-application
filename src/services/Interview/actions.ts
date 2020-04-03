import { Dispatch } from 'redux';
import { getDummyPromise } from '../../global/utils/dummy-promise';
import { interviewsActionTypes } from './action-types';
import { IInterviewModel } from './interfaces';

export const getAllInterviews = () => {
  return (dispatch: Dispatch, getState: any) => {
    const {
      interviews: { interviews },
    } = getState();
    dispatch({ type: interviewsActionTypes.LOADING });
    return getDummyPromise(interviews).then((response) => {
      dispatch({ type: interviewsActionTypes.LOADED });
      dispatch({ type: interviewsActionTypes.SET_LIST, payload: response });
    });
  };
};

export const addInterviews = (interview: IInterviewModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: interviewsActionTypes.LOADING });
    dispatch({ type: interviewsActionTypes.ADD, payload: interview });
  };
};

export const deleteInterview = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: interviewsActionTypes.LOADING });
    return getDummyPromise(id).then((response) => {
      dispatch({ type: interviewsActionTypes.LOADED });
      dispatch({ type: interviewsActionTypes.DELETE, payload: response });
    });
  };
};

export const deleteInterviews = (ids: number[]) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: interviewsActionTypes.LOADING });
    return getDummyPromise(ids).then((response) => {
      dispatch({ type: interviewsActionTypes.LOADED });
      dispatch({ type: interviewsActionTypes.DELETE_MULTIPLE, payload: response });
    });
  };
};

export const updateInterviews = (id: number, interview: IInterviewModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: interviewsActionTypes.LOADING });
    return getDummyPromise({ id, interview }).then((response) => {
      dispatch({ type: interviewsActionTypes.LOADED });
      dispatch({ type: interviewsActionTypes.DELETE_MULTIPLE, payload: response });
    });
  };
};
