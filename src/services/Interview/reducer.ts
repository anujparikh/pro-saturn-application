import { IInterviewState } from './interfaces';
import { interviewsActionTypes } from './action-types';

const initialState: IInterviewState = {
  isLoading: false,
  count: 0,
  interviews: [],
};

export const interviewsReducer = (state: IInterviewState = initialState, action: any) => {
  switch (action.type) {
    case interviewsActionTypes.LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case interviewsActionTypes.LOADED: {
      return {
        ...state,
        isLoading: false,
      };
    }
    case interviewsActionTypes.SET_LIST: {
      return {
        ...state,
        interviews: action.payload,
      };
    }
    case interviewsActionTypes.ADD: {
      return {
        ...state,
        count: state.count + 1,
        interviews: [...state.interviews, action.payload],
      };
    }
    case interviewsActionTypes.DELETE: {
      const interviews = [...state.interviews];
      interviews.splice(action.payload, 1);
      return {
        ...state,
        count: state.count - 1,
        interviews,
      };
    }
    case interviewsActionTypes.DELETE_MULTIPLE: {
      const interviews = [...state.interviews].filter((q) => action.payload.find(q.id) === -1);
      return {
        ...state,
        count: state.count - action.payload.length,
        interviews,
      };
    }
    case interviewsActionTypes.UPDATE: {
      const index = state.interviews.findIndex((q) => q.id === action.payload.id);
      const interviews = [
        ...state.interviews.slice(0, index),
        action.payload.interview,
        ...state.interviews.slice(index + 1),
      ];
      return {
        ...state,
        interviews,
      };
    }
    default:
      return state;
  }
};
