import styled from "styled-components"
import { fonts, media } from "../../../shared/styles"

export const Container = styled.div`
  display: flex;
  z-index: -1;
  font-family: "Source Code Pro", monospace;
  font-size: ${fonts.base};

  ${media.tablet`
      height: 100vh;
      flex-direction: column-reverse;
   `}
  ${media.mobileM`
      flex-direction: column;
      height: 50em;
   `}
`
