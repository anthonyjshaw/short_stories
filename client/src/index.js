import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import App from './App';
// import reducers from './reducers';
// import { BrowserRouter } from 'react-router-dom';
import configureStore, {history} from './configureStore';
import { ConnectedRouter } from 'connected-react-router';

const store = configureStore();
// const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App/>
		</ConnectedRouter>
	</Provider>, 
	document.querySelector('#root'));