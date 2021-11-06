import { combineReducers } from 'redux';
import stories from './stories';
import {connectRouter} from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	stories,
});

export default createRootReducer;