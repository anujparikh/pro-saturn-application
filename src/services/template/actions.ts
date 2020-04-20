import { Dispatch } from 'redux';
import { getDummyPromise } from '../../global/utils/dummy-promise';
import { templatesActionTypes } from './action-types';
import { ITemplateModel } from './interfaces';

export const getAllTemplates = () => {
  return (dispatch: Dispatch, getState: any) => {
    const {
      templates: { templates },
    } = getState();
    dispatch({ type: templatesActionTypes.LOADING });
    return getDummyPromise(templates).then((response) => {
      dispatch({ type: templatesActionTypes.LOADED });
      dispatch({ type: templatesActionTypes.SET_LIST, payload: response });
    });
  };
};

export const addTemplate = (template: ITemplateModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: templatesActionTypes.LOADING });
    return getDummyPromise(template).then((response) => {
      dispatch({ type: templatesActionTypes.LOADED });
      dispatch({ type: templatesActionTypes.ADD, payload: response });
    });
  };
};

export const deleteTemplate = (id: number) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: templatesActionTypes.LOADING });
    return getDummyPromise(id).then((response) => {
      dispatch({ type: templatesActionTypes.LOADED });
      dispatch({ type: templatesActionTypes.DELETE, payload: response });
    });
  };
};

export const deleteTemplates = (ids: number[]) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: templatesActionTypes.LOADING });
    return getDummyPromise(ids).then((response) => {
      dispatch({ type: templatesActionTypes.LOADED });
      dispatch({ type: templatesActionTypes.DELETE_MULTIPLE, payload: response });
    });
  };
};

export const updateTemplate = (id: number, template: ITemplateModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: templatesActionTypes.LOADING });
    return getDummyPromise({ id, template }).then((response) => {
      dispatch({ type: templatesActionTypes.LOADED });
      dispatch({ type: templatesActionTypes.DELETE_MULTIPLE, payload: response });
    });
  };
};
