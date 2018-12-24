import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styled from "styled-components"
import media from "../../media"
import Map from "../Map"
import NavPane from "../NavPane"

const Container = styled.div`
  display: flex;
  z-index: -1;
  font-family: "Source Code Pro", monospace;
`

const App = () => {
  return (
    <Container>
      <NavPane />
      <Map />
    </Container>
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
