import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import styled from "styled-components"
import PolygonCard from "./PolygonCard"

import { deletePolygonCard } from "./actions"

const ListContainer = styled.ul`
  flex-basis: 70%;
  margin: 10px 0;
  border: 1px solid black;
  overflow-y: scroll;
`

class PolygonList extends PureComponent {
  renderCard = (card, index) => <PolygonCard key={index} card={card} />

  render() {
    const { polygonList } = this.props
    return <ListContainer>{polygonList.map(this.renderCard)}</ListContainer>
  }
}

const mapStateToProps = ({ polygonList }) => ({
  polygonList
})

const mapDispatchToProps = dispatch => ({
  // deletePolygon: index => dispatch(deletePolygonCard(index))
})

PolygonList.propTypes = {
  polygonList: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolygonList)
