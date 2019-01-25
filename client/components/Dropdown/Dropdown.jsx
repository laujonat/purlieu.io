import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { fonts, colors } from "../../lib/styles"
import FontAwesome from "react-fontawesome"

const Wrapper = styled.div`
  font-size: ${fonts.small};
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  width: 50%;
`

const Container = styled.div`
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 3px 3px 2px 2px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
`

const List = styled.ul`
  margin: 0 auto;
  text-align: center;
  background-color: white;
  list-style-type: none;
  border-radius: 2px;
`

const CarrierOptions = styled.li`
  height: 20px;
  text-align: center;
  &:hover {
    background-color: ${colors.purplishGrey};
    border: 1px solid ${colors.grey};
    opacity: 0.8;
  }

  cursor: pointer;
`

const CarrierLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding: 0.5em 1em;
  cursor: pointer;
`

const IconContainer = styled.div`
  margin: auto 0.5em;
`

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
