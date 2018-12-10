import React, { Fragment } from "react"
import Map from "./map/map_component"

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
