import React from "react"
import styled from "styled-components"
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

export default App
