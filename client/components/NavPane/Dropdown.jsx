import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Container = styled.div`
  flex: 1;
  display: flex;
`

const DisplayContainer = styled.div`
  width: 178px;
  height: 18px;
  background-color: #ff3232;
  padding: 12px;
  border-radius: 5px;
  font-weight: bold;
  color: white;
`

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  top: 45px;
  right: 0px;
  width: 200px;
  background-color: white;
  font-weight: bold;
  position: absolute;

  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`

const Item = styled.li`
  color: black;
  background-color: white;

  &:hover {
    background-color: #e5e5e5;
    color: white;
  }
`

class Dropdown extends Component {
  constructor() {
    super()

    this.state = {
      displayMenu: false
    }
  }

  showDropdownMenu = event => {
    event.preventDefault()
    this.setState({ displayMenu: true }, () => {
      document.addEventListener("click", this.hideDropdownMenu)
    })
  }

  hideDropdownMenu = () => {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener("click", this.hideDropdownMenu)
    })
  }

  renderItem = (item, index) => {
    const onClick = index => {
      this.setState({ selected: index }, () => {
        this.props.onSelect(this.props.data[index])
      })
    }

    return (
      <Item key={index} onClick={() => onClick(index)}>
        {item}
      </Item>
    )
  }

  render() {
    const { defaultSelection, data } = this.props
    const { selected, displayMenu } = this.state
    return (
      <Container>
        <DisplayContainer onClick={this.showDropdownMenu}>{data[selected || defaultSelection]}</DisplayContainer>
        {displayMenu ? <List>{data.map(this.renderItem)}</List> : null}
      </Container>
    )
  }
}

Dropdown.propTypes = {
  defaultSelection: PropTypes.number,
  onSelect: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.string)
}

Dropdown.defaultProps = {
  defaultSelection: 0,
  onSelect: () => {},
  data: []
}

export default Dropdown
