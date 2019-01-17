import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Loading } from "../Loading"
import { connect } from "react-redux"
import { spaces, colors } from "../../lib/styles"
import { receiveBoundaries } from "../../boundaries/actions"
import PolygonList from "../PolygonList"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100vh;
  text-align: center;
  background-color: ${colors.purplishGrey};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: ${spaces.mdMargin};
  min-width: 250px;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: whitesmoke;
  box-shadow: 0px 3px 8px 1px rgba(87, 82, 87, 0.2);
  align-items: center;
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
  margin-top: ${spaces.mdMargin};
  padding: 0 ${spaces.mdMargin};
  height: 50px;
  width: 100%;
  background-color: whitesmoke;
`

const Button = styled.button`
  cursor: pointer;
  margin-top: ${spaces.mdMargin};
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
  padding: 0 ${spaces.mdMargin};
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
    const { location, address, map, carrier, rideType } = this.props
    this.props.getBoundaries({
      address,
      amount: dollarInput,
      carrier,
      location,
      map,
      rideType
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
          <DollarInput value={this.state.dollarInput} onChange={this.onChange("dollarInput")} />
          <DollarLabel>{`$${this.state.dollarInput}`}</DollarLabel>
        </DollarInputContainer>
        <AddressInput value={this.state.addressInput} onChange={this.onChange("addressInput")} />
        <SubmitButton onClick={this.onSubmit}>Compute</SubmitButton>
        <Loading active={isLoading}>Loading..</Loading>
        <PolygonList />
      </Container>
    )
  }
}

const mapStateToProps = ({ map, loading }) => ({
  address: map.address,
  location: map.location,
  map: map.map,
  isLoading: Object.keys(loading).length > 0
})

const mapDispatchToProps = dispatch => ({
  getBoundaries: ({ amount, location, address, map }) =>
    dispatch(receiveBoundaries({ amount, location, address, map, rideType: "lyft", carrier: "lyft" }))
})

NavPane.defaultProps = {
  address: "",
  location: {},
  map: {},
  carrier: "Lyft",
  rideType: "lyft",
  isLoading: false,
  getBoundaries: () => {}
}

NavPane.propTypes = {
  getBoundaries: PropTypes.func,
  address: PropTypes.string,
  map: PropTypes.object,
  location: PropTypes.object,
  isLoading: PropTypes.bool,
  carrier: PropTypes.string,
  rideType: PropTypes.string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavPane)
