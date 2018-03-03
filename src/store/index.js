import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import promise from 'redux-promise-middleware';
import { createLogger } from 'redux-logger';

const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(reducer, middleware);