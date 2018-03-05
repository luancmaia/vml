import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), createLogger());
const store = createStore(reducer, middleware);

export default store;