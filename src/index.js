import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./css/style.css"
import thunk from "redux-thunk";
import logger from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import application from "./redux/application";
import {Provider} from "react-redux";

const store = createStore(application, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
