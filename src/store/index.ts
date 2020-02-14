import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
