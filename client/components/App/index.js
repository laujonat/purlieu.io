import React, { Component, Fragment } from "react"
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchBoundaries,test  } from '../../actions/lyft_actions'
import Map from "../Map"

class App extends Component {
  constructor(props) {
    super(props)
  }

  click = () => {
    console.log("clicked")
    this.props.fetchBoundaries(test)
    this.setState()
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
    boundaries: state.entities.lyft,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBoundaries,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
