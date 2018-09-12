import React, { Component } from "react";
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import allReducers from "./src/Reducers/index";
import { Provider } from "react-redux";

import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";

//Define middlewares here as an array
const middleware = [thunk];

//Composr redux dev tool
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Create store
//const store = createStore(allReducers, applyMiddleware(thunk));
const store = createStore(
  allReducers,
  composeEnhancers(applyMiddleware(thunk))
);

export default class NativeBaseRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => NativeBaseRedux);
