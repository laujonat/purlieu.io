import styled from "styled-components"
import { fonts, media } from "../../../lib/styles"

export const Container = styled.div`
  display: flex;
  z-index: -1;
  font-family: "Source Code Pro", monospace;
  font-size: ${fonts.base};

  ${media.tablet`
      flex-direction: column;
      height: 50em;
   `}
  ${media.mobileM`
      flex-direction: column;
      height: 50em;
   `}
`
