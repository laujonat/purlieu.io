import React, { PureComponent } from "react"
import styled from "styled-components"

const Container = styled.nav`
  flex: 1 1 auto;
  height: 100vh;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1;
`

const Header = styled.div`
  height: 100px;
  font-weight: 600;
  padding: 2em;
  background-color: #f0f0f5;
`

class NavPane extends PureComponent {
  render() {
    return (
      <Container>
        <Header>purlieu.io</Header>
      </Container>
    )
  }
}

export default NavPane
