import React from "react"
import reducers from "./reducers"
import sagas from "./sagas"
import { App } from "./App"
import { configureStore } from "./configureStore"
import { render } from "react-dom"

const { store } = configureStore(reducers, sagas)

render(<App store={store} />, document.getElementById("root"))
