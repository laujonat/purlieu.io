import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spaces, fonts } from "../../lib/styles"

const Container = styled.div`
  visibility: hidden;
  justify-content: center;
  font-size: ${fonts.small};
  height: ${spaces.xxSmall};
  margin-top: ${spaces.xxSmall};

  ${({ active }) =>
    active &&
    `
    visibility: visible;
    color: blue;
    display: flex;
  `}
`

export const Loading = ({ active }) => <Container active={active}>Loading..</Container>

Loading.defaultProps = {
  active: false
}

Loading.propTypes = {
  active: PropTypes.bool
}
