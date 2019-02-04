import React from "react"
import PropTypes from "prop-types"
import { Container } from "./styles"
export const Loading = ({ active }) => <Container active={active}>Loading..</Container>

Loading.defaultProps = {
  active: false
}

Loading.propTypes = {
  active: PropTypes.bool
}
