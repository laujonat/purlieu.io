import React, { Component } from "react"
import styled from "styled-components"
import Map from "../Map"
import NavPane from "../NavPane"
import { fonts, media } from "../../lib/styles"

const Container = styled.div`
  display: flex;
  z-index: -1;
  font-family: "Source Code Pro", monospace;
  font-size: ${fonts.base};

  ${media.tablet`
      flex-direction: column;
      height: 50em;
   `}
  ${media.mobileM`
      flex-direction: column;
      height: 50em;
   `}
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
