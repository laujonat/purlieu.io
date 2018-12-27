import { applyMiddleware, compose, createStore } from "redux"
import createSagaMiddleware from "redux-saga"
import logger from "redux-logger"

const sagaMiddleware = createSagaMiddleware()

export const configureStore = (reducer, sagas, initialState) => {
  const middlewares = applyMiddleware(sagaMiddleware, logger)

  const store = createStore(reducer, initialState, compose(middlewares))

  sagaMiddleware.run(sagas)

  return { store }
}
