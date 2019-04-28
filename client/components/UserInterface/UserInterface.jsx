import React, { Component } from "react"
import Map from "../Map"
import NavPane from "../NavPane"
import { Container } from "./styles"

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
