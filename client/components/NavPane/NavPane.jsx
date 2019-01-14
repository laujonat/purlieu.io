import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Loading } from "../Loading"
import { connect } from "react-redux"
import { spaces } from "../../lib/styles"
import { receiveBoundaries } from "../../boundaries/actions"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100vh;
  text-align: center;
  background: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: ${spaces.md};
  min-width: 250px;
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

const DollarInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
  flex: 1;
  margin-top: ${spaces.md};
  padding: 0 ${spaces.md};
  height: 50px;
  width: 100%;
  background-color: whitesmoke;
`

const Button = styled.button`
  cursor: pointer;
  margin-top: ${spaces.md};
  width: 100%;
`

const DollarInput = styled(Input).attrs({
  type: "range",
  min: 10,
  max: 400,
  step: 1
})`
  cursor: pointer;
`

const AddressInput = styled(Input)`
  flex: none;
`

const DollarLabel = styled.h1`
  width: 20%;
`

const SubmitButton = styled(Button)`
  height: 50px;
  background-color: greenyellow;
  padding: 0 ${spaces.md};
`

class NavPane extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dollarInput: 10,
      addressInput: ""
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      this.setState({
        addressInput: this.props.address
      })
    }
  }

  onSubmit = () => {
    const { dollarInput } = this.state
    const { location, address } = this.props
    this.props.getBoundaries({
      amount: dollarInput,
      geoLocation: {
        location,
        address
      }
    })
  }

  onChange = field => e => {
    this.setState({ [field]: e.target.value })
  }

  render() {
    const { isLoading } = this.props
    return (
      <Container>
        <HeaderContainer>
          <Header>purlieu.io</Header>
        </HeaderContainer>
        <DollarInputContainer>
          <DollarInput
            value={this.state.dollarInput}
            onChange={this.onChange("dollarInput")}
          />
          <DollarLabel>{`$${this.state.dollarInput}`}</DollarLabel>
        </DollarInputContainer>
        <AddressInput
          value={this.state.addressInput}
          onChange={this.onChange("addressInput")}
        />
        <SubmitButton onClick={this.onSubmit}>Show Me Dah Wey</SubmitButton>
        <Loading active={isLoading}>Loading..</Loading>
      </Container>
    )
  }
}

const mapStateToProps = ({ map, loading }) => ({
  address: map.address,
  location: map.location,
  isLoading: Object.keys(loading).length > 0
})

const mapDispatchToProps = dispatch => ({
  getBoundaries: ({ amount, geoLocation }) =>
    dispatch(receiveBoundaries({ amount, geoLocation, carrier: "lyft" }))
})

NavPane.defaultProps = {
  address: "",
  location: {},
  getBoundaries: () => {}
}

NavPane.propTypes = {
  getBoundaries: PropTypes.func,
  address: PropTypes.string,
  location: PropTypes.object
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPane)
