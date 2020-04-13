import { questionsReducer } from '../services/question/reducer';
import { templatesReducer } from '../services/template/reducer';
import { interviewsReducer } from '../services/interview/reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  questions: questionsReducer,
  templates: templatesReducer,
  interviews: interviewsReducer,
});
