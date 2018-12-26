import React, { Component } from "react"
import styled from "styled-components"
import Map from "../Map"
import NavPane from "../NavPane"

const Container = styled.div`
  display: flex;
  z-index: -1;
  font-family: "Source Code Pro", monospace;
`

export default class UserInterface extends Component {
  render() {
    return (
      <Container>
        <NavPane />
        <Map />
      </Container>
    )
  }
}
