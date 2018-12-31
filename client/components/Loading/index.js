import React from "react"
import styled from "styled-components"

export const LoadingText = styled.div`
  display: none;
  justify-content: center;

  ${({ active }) =>
    active &&
    `
    color: blue;
    display: block;
  `}
`
