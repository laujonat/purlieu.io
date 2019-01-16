import React, { Component } from "react"
import styled from "styled-components"
import Map from "../Map"
import NavPane from "../NavPane"
import { fonts } from "../../lib/styles"

const Container = styled.div`
  display: flex;
  z-index: -1;
  font-family: "Source Code Pro", monospace;
  font-size: ${fonts.base};
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
