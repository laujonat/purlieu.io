import React, { Component } from "react"
import PropTypes from "prop-types"
import FontAwesome from "react-fontawesome"
import { Wrapper, Container, Header, List, DropdownOption, HeaderLabel, IconContainer } from "./styles"

class Dropdown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOpen: false,
      current: this.props.selected || this.props.placeholder
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

  toggleSelect = item => () => {
    this.props.toggleItem(item)
    this.setState({ current: item.value })
    this.toggleList()
  }

  render() {
    const { list } = this.props
    const { listOpen, current } = this.state

    return (
      <Wrapper>
        <Container>
          <Header onClick={this.toggleList}>
            <HeaderLabel>{current}</HeaderLabel>
            <IconContainer>
              {listOpen ? <FontAwesome name="angle-up" size="2x" /> : <FontAwesome name="angle-down" size="2x" />}
            </IconContainer>
          </Header>
          {listOpen && (
            <List>
              {list.map((item, index) => (
                <DropdownOption key={index} onClick={this.toggleSelect(item)}>
                  {item.value}
                </DropdownOption>
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
  selected: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  toggleItem: () => {}
}

Dropdown.defaultProps = {
  list: [],
  onChange: () => {},
  placeholder: "--"
}

export default Dropdown
