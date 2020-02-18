import { questionReducer } from '../services/Question/reducer';
import { combineReducers } from 'redux';

export default combineReducers({ question: questionReducer });
