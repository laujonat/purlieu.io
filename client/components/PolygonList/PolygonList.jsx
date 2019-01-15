import React, { Component } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  flex-basis: 35em;
  margin-top: auto;
  border: 1px solid black;
`

class PolygonList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <Container />
  }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolygonList)
