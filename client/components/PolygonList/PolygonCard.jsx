import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100px;
  border: 1px solid black;
  margin-top: 10px;
`

const PolygonCard = ({ card }) => {
  const { amount, carrier, rideType, geoLocation } = card

  return (
    <Container>
      <p>{amount}</p>
      <p>{carrier}</p>
      <p>{rideType}</p>
      <p>{geoLocation.address}</p>
    </Container>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({})

PolygonCard.propTypes = {
  card: PropTypes.object.required
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolygonCard)
