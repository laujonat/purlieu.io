import styled, { keyframes } from "styled-components"
import { spaces, fonts } from "../../../lib/styles"
import FontAwesome from "react-fontawesome"

export const Container = styled.div`
  visibility: hidden;
  justify-content: center;
  font-size: ${fonts.small};
  height: ${spaces.xxSmall};
  margin-top: ${spaces.xxSmall};

  ${({ active }) =>
    active &&
    `
    visibility: visible;
    display: flex;
  `}
`

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

export const StyledIcon = styled(FontAwesome)`
  position: absolute;
  right: 74%;
  top: ${spaces.mdMargin};
  z-index: 99;
  color: white;
  animation: ${rotate} 2s linear infinite;
`
