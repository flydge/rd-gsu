import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from 'react-redux';
import createHistory from "history/createBrowserHistory";
import reducers from './reducers';
import { ConnectedRouter, routerMiddleware } from "react-router-redux";


const history = createHistory();
const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];


if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);
export const store = createStore(reducers, initialState, composedEnhancers);

console.log('store',store.getState());



render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

