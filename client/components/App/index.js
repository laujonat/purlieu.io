import React, { Fragment } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import styled from "styled-components"
import media from "../../media"
import Map from "../Map"
import NavPane from "../NavPane"

const Container = styled.div`
  flex-direction: row;
  z-index: -1;

  @media ${media.laptop} {
    display: flex;
    flex-direction: column-reverse;
  }
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
