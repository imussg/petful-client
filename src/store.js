import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import petReducer from './reducers/index';

export default createStore(
	petReducer,
	compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);