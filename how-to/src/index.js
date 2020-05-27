import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import combineReducers from "./reducers/indexReducer";
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';

const store = createStore(combineReducers, applyMiddleware(thunk, logger));

console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);