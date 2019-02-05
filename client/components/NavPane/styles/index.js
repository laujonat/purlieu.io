import styled from "styled-components"
import { spaces, colors, media, fonts } from "../../../lib/styles"

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100vh;
  text-align: center;
  background-color: ${colors.purplishGrey};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: ${spaces.mdMargin};
  width: auto;
  max-width: 420px;

  ${media.tablet`flex-basis: 1 1 30vh; height: 50%;`}
  ${media.mobileM`flex-basis: 1 1 30vh; height: 50%;`}
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 3em;
  flex-grow: 0;
  background-color: black;
  box-shadow: 0px 3px 5px 1px rgba(87, 82, 87, 0.2);
  border-radius: 3px;
  color: white;
  font-weight: 600;
`

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header = styled.h1``

export const DollarInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  flex: 1;
  padding: 0.5em 1em;
  width: 100%;
  font-family: "Source Code Pro", monospace;
  background-color: whitesmoke;
`

export const Button = styled.button`
  cursor: pointer;

  ${media.tablet`flex-basis: 10em;`}
  ${media.mobileM`flex-basis: 10em;`}

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.8;
    cursor: not-allowed;
  `} 
`

export const DollarInput = styled(Input).attrs({
  type: "range",
  min: 10,
  max: 400,
  step: 5
})`
  margin: ${spaces.smMargin} 0;
  align-self: center;
  padding: 0;
  cursor: pointer;
`

export const AddressInput = styled(Input)`
  flex: none;
  border-radius: 3px;
  border: 1px solid grey;
`

export const DollarLabel = styled.h1`
  padding: 0 10px;
  min-width: ${spaces.mdLrgMargin};
`

export const SubmitButton = styled(Button)`
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: ${colors.green};
  padding: 0 ${spaces.smMargin};

  -webkit-transition: 0.1s ease-in-out;
  -moz-transition: 0.1s ease-in-out;
  -o-transition: 0.1s ease-in-out;
  -ms-transition: 0.1s ease-in-out;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: ${colors.grey};
  `}
`
