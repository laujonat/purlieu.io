import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./components/App"

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
)
