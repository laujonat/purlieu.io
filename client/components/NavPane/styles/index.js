import styled from "styled-components"
import { spaces, colors, media } from "../../../lib/styles"

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  height: 100vh;
  text-align: center;
  background-color: ${colors.purplishGrey};
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  padding: ${spaces.mdMargin};
  min-width: 250px;

  ${media.tablet`flex-basis: 1 1 30vh; height: 50%;`}
  ${media.mobileM`flex-basis: 1 1 30vh; height: 50%;`}
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 3em;
  flex-grow: 0;
  background-color: whitesmoke;
  box-shadow: 0px 3px 5px 1px rgba(87, 82, 87, 0.2);
  align-items: center;
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
  height: 50px;
  width: 100%;
  background-color: whitesmoke;
`

export const Button = styled.button`
  cursor: pointer;
  margin-top: ${spaces.mdMargin};
  width: 100%;

  ${media.tablet`flex-basis: 10em;`}
  ${media.mobileM`flex-basis: 10em;`}
`

export const DollarInput = styled(Input).attrs({
  type: "range",
  min: 10,
  max: 400,
  step: 1
})`
  cursor: pointer;
`

export const AddressInput = styled(Input)`
  flex: none;
`

export const DollarLabel = styled.h1`
  width: 20%;
`

export const SubmitButton = styled(Button)`
  height: 50px;
  background-color: greenyellow;
  padding: 0 ${spaces.mdMargin};
`
