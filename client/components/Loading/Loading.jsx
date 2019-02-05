import React from "react"
import PropTypes from "prop-types"
import { Container, StyledIcon } from "./styles"

export const Loading = ({ active }) => (
  <Container active={active}>
    <StyledIcon name="spinner" size="2x" />
  </Container>
)

Loading.defaultProps = {
  active: false
}

Loading.propTypes = {
  active: PropTypes.bool
}
