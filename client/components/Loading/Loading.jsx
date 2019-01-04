import React from "react"
import styled from "styled-components"

const LoadingText = styled.div`
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
  return <LoadingText active={active}>Loading..</LoadingText>
}
