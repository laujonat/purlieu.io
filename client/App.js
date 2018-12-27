import React from "react"
import PropTypes from "prop-types"
import { HashRouter, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import Ui from "./components/UserInterface"

export const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Ui} />
      </Switch>
    </HashRouter>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}
