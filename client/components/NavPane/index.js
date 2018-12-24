import React, { PureComponent } from "react"
import styled from "styled-components"

const Container = styled.nav`
  flex: 2 1 auto;
  height: 100vh;
  background-color: blanchedalmond;
  font-family: "Source Code Pro", monospace;
`

class NavPane extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const action = this.props.currentAction

    return (
      <Container>
        <nav className="nav-bar">
          <div className="title">
            <p>purlieu.io</p>
          </div>
          <div className="login-icon" />
          <ul className="app-info-container">
            <li>
              <a href="https://www.google.com">github</a>
            </li>
            <li>
              <a href="https://developer.lyft.com/v1/reference#availability-ride-estimates">
                <img className="lyft-logo" src="" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    )
  }
}

export default NavPane
