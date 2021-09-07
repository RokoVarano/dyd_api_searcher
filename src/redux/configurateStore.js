import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import categories from './categories';

const reducer = combineReducers({
  categories,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
