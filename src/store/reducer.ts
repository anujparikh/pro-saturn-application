import { questionsReducer } from '../services/Question/reducer';
import { templatesReducer } from '../services/Template/reducer';
import { combineReducers } from 'redux';

export default combineReducers({ questions: questionsReducer, templates: templatesReducer });
