import {createBrowserHistory} from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import thunk from 'redux-thunk';


export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
	const store = createStore(createRootReducer(history), preloadedState, compose(applyMiddleware(routerMiddleware(history), thunk)))
	return store;
}