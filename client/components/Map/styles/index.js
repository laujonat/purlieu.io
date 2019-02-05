import styled from "styled-components"
import { media } from "../../../lib/styles"

export const Container = styled.div`
  flex: 1 1 70%;
`

export const MapComponent = styled.div`
  height: 100%;
  width: 100%;

  ${media.tablet`height: 100%`}
  ${media.mobileM`height: 100%;`}
`
