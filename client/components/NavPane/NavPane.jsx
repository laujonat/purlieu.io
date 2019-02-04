import React, { Component } from "react"
import PropTypes from "prop-types"
import PolygonList from "../PolygonList"
import Dropdown from "../Dropdown"
import FontAwesome from "react-fontawesome"
import { connect } from "react-redux"
import { Loading } from "../Loading"
import { receivePolygonCard } from "../PolygonList/actions"
import { Carriers, CarrierToRideTypesMap, RideTypeToTitleMap } from "../../lib/carriers"
import {
  Container,
  HeaderContainer,
  DropdownContainer,
  Header,
  DollarInputContainer,
  DollarInput,
  AddressInput,
  DollarLabel,
  SubmitButton
} from "./styles"

class NavPane extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dollarInput: 10,
      addressInput: "",
      carrier: null,
      rideType: null
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.address !== this.props.address) {
      this.setState({
        addressInput: this.props.address
      })
    }
  }

  toggleSelected = item => {
    this.setState({ [item.key]: item.value })
  }

  onSubmit = () => {
    const { dollarInput, carrier } = this.state
    const { location, address, map } = this.props
    const rideType = RideTypeToTitleMap[this.state.rideType]
    this.props.addPolygon({
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
    const { carrier, rideType } = this.state
    const canCompute = carrier && rideType
    return (
      <Container>
        <HeaderContainer>
          <Header>purlieu.io</Header>
        </HeaderContainer>
        <DollarInputContainer>
          <DollarInput value={this.state.dollarInput} onChange={this.onChange("dollarInput")} />
          <DollarLabel>{`$${this.state.dollarInput}`}</DollarLabel>
          <SubmitButton disabled={!canCompute} onClick={this.onSubmit}>
            {canCompute ? (
              <FontAwesome name="check" size="2x" style={{ color: "white" }} />
            ) : (
              <FontAwesome name="ban" size="2x" style={{ color: "white" }} />
            )}
          </SubmitButton>
        </DollarInputContainer>
        <AddressInput value={this.state.addressInput} onChange={this.onChange("addressInput")} />
        <DropdownContainer>
          <Dropdown list={Carriers} placeholder={"Carrier"} selected={carrier} toggleItem={this.toggleSelected} />
          {carrier ? (
            <Dropdown list={CarrierToRideTypesMap[carrier]} selected={rideType} toggleItem={this.toggleSelected} />
          ) : null}
        </DropdownContainer>
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
  addPolygon: ({ amount, location, address, map, rideType, carrier }) =>
    dispatch(receivePolygonCard({ amount, location, address, map, rideType, carrier }))
})

NavPane.defaultProps = {
  address: "",
  location: {},
  map: {},
  isLoading: false,
  addPolygon: () => {}
}

NavPane.propTypes = {
  addPolygon: PropTypes.func,
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
