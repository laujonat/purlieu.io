import React, { PureComponent } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import PolygonCard from "./PolygonCard"
import { ListContainer } from "./styles/list"

class PolygonList extends PureComponent {
  renderCard = (card, index) => <PolygonCard key={index} card={{ ...card, index }} />

  componentDidUpdate() {
    const element = document.querySelector(".cardList")
    element.scrollTop = element.scrollHeight
  }

  render() {
    const { polygonList } = this.props
    return <ListContainer className="cardList">{polygonList.map(this.renderCard)}</ListContainer>
  }
}

const mapStateToProps = ({ polygonList }) => ({
  polygonList
})

const mapDispatchToProps = dispatch => ({})

PolygonList.propTypes = {
  polygonList: PropTypes.array
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PolygonList)
