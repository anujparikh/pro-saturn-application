import { ITemplateState } from './interfaces';
import { templatesActionTypes } from './action-types';

const initialState: ITemplateState = {
  isLoading: false,
  count: 0,
  templates: [],
};

export const templatesReducer = (state: ITemplateState = initialState, action: any) => {
  switch (action.type) {
    case templatesActionTypes.LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case templatesActionTypes.LOADED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case templatesActionTypes.SET_LIST: {
      return {
        ...state,
        templates: action.payload,
      };
    }
    case templatesActionTypes.DELETE: {
      const templates = [...state.templates];
      templates.splice(action.payload, 1);
      return {
        ...state,
        count: state.count - 1,
        templates,
      };
    }
    case templatesActionTypes.DELETE_MULTIPLE: {
      const templates = state.templates.filter((q) => action.payload.find(q.id) === -1);
      return {
        ...state,
        count: state.count - action.payload.length,
        templates,
      };
    }
    case templatesActionTypes.UPDATE: {
      const index = state.templates.findIndex((q) => q.id === action.payload.id);
      const templates = [
        ...state.templates.slice(0, index),
        action.payload.question,
        ...state.templates.slice(index + 1),
      ];
      return {
        ...state,
        templates,
      };
    }
    default:
      return state;
  }
};
