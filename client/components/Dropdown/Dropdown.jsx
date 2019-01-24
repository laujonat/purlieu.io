import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { fonts, colors } from "../../lib/styles"

const List = styled.select`
  margin: 0 auto;
  text-align: center;
  height: 50px;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
`
const Label = styled.label`
  font-size: ${fonts.base};
`

const CarrierLabel = styled(Label)`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`

const Option = styled.option`
  text-align: center;
  height: 20px;
`

class Dropdown extends Component {
  render() {
    const { list, onChange, selectedCarrier, carrierLabel } = this.props
    return (
      <CarrierLabel>
        {carrierLabel}
        <List value={selectedCarrier} onChange={onChange}>
          {list.map((el, idx) => (
            <Option key={idx} value={el}>
              {el}
            </Option>
          ))}
        </List>
      </CarrierLabel>
    )
  }
}

Dropdown.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  selectedCarrier: PropTypes.string,
  onChange: PropTypes.func,
  carrierLabel: PropTypes.string
}

Dropdown.defaultProps = {
  list: [],
  onChange: () => {}
}

export default Dropdown
