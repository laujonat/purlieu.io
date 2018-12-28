import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { spaces } from "../../lib/styles/spaces"
import { bindActionCreators } from "redux"

const Container = styled.nav`
  flex: 1 1 auto;
  height: 100vh;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  align-items: center;
  background-color: #f0f0f5;
  font-weight: 600;
`

const Header = styled.h1``

const DollarInput = styled.input.attrs({ type: "number" })`
  height: 50px;
  background-color: whitesmoke;
  padding: 0 ${spaces.md} 0 ${spaces.md};
`

const AddressInput = styled.input`
  margin-top: ${spaces.md};
  width: 100%;
  height: 50px;
  background-color: whitesmoke;
  padding: 0 ${spaces.md};
`

const SubmitButton = styled.button`
  margin-top: ${spaces.md};
  width: 100%;
  height: 50px;
  background-color: greenyellow;
  padding: 0 ${spaces.md};
`

class NavPane extends Component {
  static getDerivedStateFromProps(props, prevState) {
    return {
      ...prevState,
      ...props
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      address: ""
    }
  }

  onSubmit = e => {
    e.preventDefault()
  }

  onChange = field => {
    return e => {
      this.setState({ [field]: e.target.value })
    }
  }

  render() {
    console.log(this.state)
    const { address } = this.props
    return (
      <Container>
        <HeaderContainer>
          <Header>purlieu.io</Header>
        </HeaderContainer>
        <DollarInput />
        <AddressInput
          value={this.state.address}
          onChange={this.onChange("address")}
        />
        <SubmitButton />
      </Container>
    )
  }
}

const mapStateToProps = ({ entities: { lyft, map } }) => ({
  boundaries: lyft.boundaries,
  address: map.clientLocation.address
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      // receiveBoundaries
    },
    dispatch
  )
}

NavPane.propTypes = {
  boundaries: PropTypes.array,
  address: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPane)
