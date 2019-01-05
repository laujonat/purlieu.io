import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  display: none;
  justify-content: center;

  ${({ active }) =>
    active &&
    `
    color: blue;
    display: block;
  `}
`

export const Loading = ({ active }) => {
  return <Container active={active}>Loading..</Container>
}

Loading.defaultProps = {
  active: false
}

Loading.propTypes = {
  active: PropTypes.bool
}
