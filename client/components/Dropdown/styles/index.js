import styled from "styled-components"
import { fonts, colors } from "../../../lib/styles"

export const Wrapper = styled.div`
  font-size: ${fonts.small};
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
  width: 50%;
`

export const Container = styled.div`
  width: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 3px 3px 2px 2px;
  border: 1px solid ${colors.grey};
  cursor: pointer;
`

export const List = styled.ul`
  margin: 0 auto;
  text-align: center;
  background-color: white;
  list-style-type: none;
  border-radius: 2px;
`

export const CarrierOptions = styled.li`
  height: 20px;
  text-align: center;
  &:hover {
    background-color: ${colors.purplishGrey};
    border: 1px solid ${colors.grey};
    opacity: 0.8;
  }

  cursor: pointer;
`

export const CarrierLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding: 0.5em 1em;
  cursor: pointer;
`

export const IconContainer = styled.div`
  margin: auto 0.5em;
`
