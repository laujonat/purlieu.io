import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom"
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from './store/reducers/root_reducer'
import  fetchBoundariesWatcher from './store/sagas'
import { Provider } from "react-redux";
import App from "./components/App"

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(logger,sagaMiddleware)
const store = createStore(reducer, compose(middlewares))
console.log(fetchBoundariesWatcher)
sagaMiddleware.run(fetchBoundariesWatcher)

ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        {/* <Switch> */}
          <Route exact path="/" component={App} />
        {/* </Switch>, */}
      </BrowserRouter>
    </Provider>,
  document.getElementById("root")
)
