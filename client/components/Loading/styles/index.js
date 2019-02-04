import styled from "styled-components"
import { spaces, fonts } from "../../../lib/styles"

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
    color: blue;
    display: flex;
  `}
`
