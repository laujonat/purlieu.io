import styled from "styled-components"
import { fonts, colors } from "../../../shared/styles"

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
  border: 1px solid ${colors.grey};
  border-radius: 2px;

  li:first-child {
    border-top: 1px solid transparent;
  }

  li:last-child {
    border-bottom: 1px solid transparent;
  }
`

export const DropdownOption = styled.li`
  text-align: center;
  padding: 0.5em 1em;
  display: block;
  border: 1px solid transparent;

  -webkit-transition: 0.1s ease-in-out;
  -moz-transition: 0.1s ease-in-out;
  -o-transition: 0.1s ease-in-out;
  -ms-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;

  &:hover {
    border-top: 1px solid ${colors.grey};
    border-bottom: 1px solid ${colors.grey};
    background-color: ${colors.purplishGrey};
    opacity: 0.8;
  }

  cursor: pointer;
`

export const HeaderLabel = styled.label`
  display: flex;
  align-self: flex-start;
  padding: 0.5em 1em;
  cursor: pointer;
`

export const IconContainer = styled.div`
  margin: auto 0.5em;
`
