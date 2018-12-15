import React, { Fragment } from "react"
import Map from "../Map"
import NavBar from "../NavBar"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <NavBar />
        <Map />
      </Fragment>
    )
  }
}
