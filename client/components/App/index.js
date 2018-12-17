import React, { Component, Fragment } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import fetchBoundariesWatcher from '../../store/sagas'
import Map from "../Map"

class App extends Component {
  constructor(props) {
    super(props)
  }

  click = () => {
    this.props.fetchBoundariesWatcher()
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

const mapStateToProps = state => {
  return {
    endpoints: state.boundaries
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBoundariesWatcher
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
