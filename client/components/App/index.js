import React, { Fragment } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import Map from "../Map"

const App = () => {
  return (
    <Fragment>
      <Map />
    </Fragment>
  )
}

const mapStateToProps = state => ({
  boundaries: state.entities.lyft.boundaries
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // receiveBoundaries
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
