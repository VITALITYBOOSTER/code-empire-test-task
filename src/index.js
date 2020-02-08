import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers/rootReducer";
import { BrowserRouter } from "react-router-dom";

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const application = <BrowserRouter>{app}</BrowserRouter>;

ReactDOM.render(application, document.getElementById("root"));

serviceWorker.unregister();

