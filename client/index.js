import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom"
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import reducer from './reducers'
import { fetchBoundariesWatcher } from './sagas'
import { Provider } from "react-redux";
import App from "./components/App"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware))
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
