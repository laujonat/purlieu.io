import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { deletePolygonCard } from "../PolygonList/actions"
import { receiveBoundaries } from "../../boundaries/actions"
import { getKeyByValue, RideTypeToTitleMap } from "../../lib/carriers"
import { Container, Row, Item } from "./styles/card"

class PolygonCard extends Component {
  componentDidMount() {
    const { index } = this.props.card
    this.props.getBoundaries(index)
  }

  render() {
    const { card, deletePolygon } = this.props
    const { index, amount, carrier, rideType, address, location } = card

    return (
      <Container>
        <Row top>
          <Item address>📍</Item>
          <Item address>{address}</Item>
        </Row>
        <Row mid>
          <Row midLeft>
            <Item carrier>{carrier}</Item>
            <Item rideType={rideType}>Type: {getKeyByValue(RideTypeToTitleMap, rideType)}</Item>
          </Row>
          <Row midRight>
            <Item geoLocation>
              <Item coord>
                <Item>{`Lat: ${location.lat}`}</Item>
                <Item>{`Lng: ${location.lng}`}</Item>
              </Item>
              <Item amount>${amount}</Item>
            </Item>
          </Row>
        </Row>
        <Row bottom>
          <Item deleteButton onClick={deletePolygon(index)}>
            X
          </Item>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = ({ loading }) => ({
  isLoading: Object.keys(loading).length > 0
})

const mapDispatchToProps = dispatch => ({
  getBoundaries: index => dispatch(receiveBoundaries(index)),
  deletePolygon: index => () => dispatch(deletePolygonCard(index))
})

PolygonCard.propTypes = {
  card: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  deletePolygon: PropTypes.func.isRequired,
  getBoundaries: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolygonCard)
