import React, { Fragment } from "react"
import Map from "../Map"

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <Map />
      </Fragment>
    )
  }
}
