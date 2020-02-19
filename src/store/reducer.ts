import { questionsReducer } from '../services/Question/reducer';
import { combineReducers } from 'redux';

export default combineReducers({ questions: questionsReducer });
