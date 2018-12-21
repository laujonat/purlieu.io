import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { receiveBoundaries } from "../../actions"
import Map from "../Map"

class App extends Component {
  constructor(props) {
    super(props)
  }

  click = () => {
    this.props.receiveBoundaries()
  }

  render() {
    return (
      <Fragment>
        <div className="tester">
          <div className="tester_inner">
            <button onClick={this.click}>CLICK</button>
          </div>
        </div>
        <Map />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  boundaries: state.entities.lyft.boundaries
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      receiveBoundaries
    },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
