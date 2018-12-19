import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom"
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from './reducers/root_reducer'
import rootSagaWatcher from './sagas/'
import { Provider } from "react-redux";
import logger from 'redux-logger'
import App from "./components/App"

const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(sagaMiddleware, logger)
const store = createStore(reducer, compose(middlewares))
sagaMiddleware.run(rootSagaWatcher)

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
