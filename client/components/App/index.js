import React, { Component, Fragment } from "react"
import { connect } from "react-redux";
import Map from "../Map"

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <div className="tester">
          <div className="tester_inner">
            <button onClick={this.props.click}>CLICK</button>
          </div>
        </div>
        <Map />
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    bound: state.payload
  }
}

const mapDispatchToProps = dispatch => {
  return {
    click: () => dispatch({ type: "FETCH_BOUNDARIES", data: 1 }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
