import { applyMiddleware, compose, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (reducer, sagas, initialState) => {
  const middlewares =
    process.env.NODE_ENV === "production" ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, logger)
  console.log(process.env.NODE_ENV)
  const store = createStore(reducer, initialState, composeWithDevTools(compose(middlewares)))

  sagaMiddleware.run(sagas)

  return { store }
}
