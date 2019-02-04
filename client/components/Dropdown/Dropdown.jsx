import React, { Component } from "react"
import PropTypes from "prop-types"
import FontAwesome from "react-fontawesome"
import { Wrapper, Container, Header, List, CarrierOptions, CarrierLabel, IconContainer } from "./styles"

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      carrierCurrent: this.props.selectedCarrier
    }
  }

  handleClickOutside = () => {
    this.setState({
      listOpen: false
    })
  }

  toggleList = () => {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  toggleSelect = item => {
    this.props.toggleItem(item.id, item.key)
    this.setState({ carrierCurrent: item.carrier })
    this.toggleList()
  }

  render() {
    const { list } = this.props
    const { listOpen, carrierCurrent } = this.state
    return (
      <Wrapper>
        <Container>
          <Header onClick={() => this.toggleList()}>
            <CarrierLabel>{carrierCurrent}</CarrierLabel>
            <IconContainer>
              {listOpen ? <FontAwesome name="angle-up" size="2x" /> : <FontAwesome name="angle-down" size="2x" />}
            </IconContainer>
          </Header>
          {listOpen && (
            <List>
              {list.map(item => (
                <CarrierOptions key={item.id} onClick={() => this.toggleSelect(item)}>
                  {item.carrier}
                </CarrierOptions>
              ))}
            </List>
          )}
        </Container>
      </Wrapper>
    )
  }
}

Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
  selectedCarrier: PropTypes.string,
  onChange: PropTypes.func,
  toggleItem: () => {}
}

Dropdown.defaultProps = {
  list: [],
  onChange: () => {}
}

export default Dropdown
