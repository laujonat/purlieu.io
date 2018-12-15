import React, { Fragment } from "react"
import Loading from "."

export default class FetchLocationForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { currentStatus } = this.props

    return (
      <Fragment>
        <Loading customClasses="fetch-location">
          <img
            className="fetch-location-img"
            src="https://i.imgur.com/P0CmA6f.png"
          />
          <p className="status">{currentStatus}</p>
          <p className="wait-text">Please wait...</p>
        </Loading>
      </Fragment>
    )
  }
}
