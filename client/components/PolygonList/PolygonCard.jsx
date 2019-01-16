import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { fonts } from "../../lib/styles"
import styled from "styled-components"
import { Loading } from "../Loading"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
  background-color: white;
  font-size: ${fonts.small};
`

const Row = styled.div`
  display: flex;

  ${({ top }) =>
    top &&
    `
    flex: 1 1 20%;
    justify-content: space-around;
    border-bottom: 0.1em solid grey;
  `};
  ${({ mid }) =>
    mid &&
    `
    flex: 2 2 60%;
    align-items: flex-start;
    padding-left: 2em;
    border-bottom: 0.5px solid grey;
  `};
  ${({ midLeft }) =>
    midLeft &&
    `
    flex: 1;
    text-align: left;
    align-items: flex-start;
    flex-direction: column;
  `};
  ${({ midRight }) =>
    midRight &&
    `
    flex-direction: column;
  `};
  ${({ bottom }) =>
    bottom &&
    `
    flex: 1 1 20%;
    text-align: center;
  `};
`

const Item = styled.div`
  margin: 1em 0;

  ${({ amount }) =>
    amount &&
    `
    color: green;
    font-weight: 600;
  `};

  ${({ carrier }) =>
    carrier &&
    `
    font-weight: 600;
  `};

  ${({ rideType }) =>
    rideType &&
    `

  `};

  ${({ address }) =>
    address &&
    `

  `};

  ${({ geoLocation }) =>
    geoLocation &&
    `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  `};

  ${({ coord }) =>
    coord &&
    `
    margin: 0;
    align-self: flex-start;
    line-height: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:left;
  `};
`

const PolygonCard = ({ card, isLoading }) => {
  const { amount, carrier, rideType, geoLocation } = card
  return (
    <Container>
      <Row top>
        <Item address>📍</Item>
        <Item address>{geoLocation.address}</Item>
      </Row>
      <Row mid>
        <Row midLeft>
          <Item carrier>{carrier}</Item>
          <Item rideType>Type: {rideType}</Item>
        </Row>
        <Row midRight>
          <Item geoLocation>
            <Item coord>
              <Item>{`Lat: ${geoLocation.location.lat}`}</Item>
              <Item>{`Lng: ${geoLocation.location.lng}`}</Item>
            </Item>
            <Item amount>${amount}</Item>
          </Item>
        </Row>
      </Row>
      <Row bottom>
        <Item>
          <Loading active={isLoading}>Loading...</Loading>
        </Item>
      </Row>
    </Container>
  )
}

const mapStateToProps = ({ loading }) => ({
  isLoading: Object.keys(loading).length > 0
})

const mapDispatchToProps = dispatch => ({})

PolygonCard.propTypes = {
  card: PropTypes.object.isRequired,
  isLoading: PropTypes.bool
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolygonCard)
