import styled from "styled-components"
import { fonts, spaces, colors } from "../../../shared/styles"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 10px;
  background-color: white;
  box-shadow: 0px 3px 8px 1px rgba(87, 82, 87, 0.2);
  font-size: ${fonts.small};
`

export const Row = styled.div`
  display: flex;
  ${({ top }) =>
    top &&
    `
    flex: 1 1 20%;
    justify-content: space-around;
    border-bottom: 0.1em solid grey;
  `};
  ${({ mid }) =>
    mid &&
    `
    flex: 2 2 60%;
    align-items: flex-start;
    padding-left: 2em;
    border-bottom: 0.5px solid grey;
  `};
  ${({ midLeft }) =>
    midLeft &&
    `
    flex: 1;
    text-align: left;
    align-items: flex-start;
    flex-direction: column;
  `};
  ${({ midRight }) =>
    midRight &&
    `
    flex-direction: column;
  `};
  ${({ bottom }) =>
    bottom &&
    `
    flex: 1 1 20%;
    align-items: center;
    justify-content: flex-end;
  `};
`

export const Item = styled.div`
  margin: 1em 0;
  border-radius: 2px;

  ${({ amount }) =>
    amount &&
    `
    color: green;
    font-weight: 600;
  `};

  ${({ carrier }) =>
    carrier &&
    `
    font-weight: 600;
  `};

  ${({ rideType }) =>
    rideType &&
    `
    margin: 1em 0;
    border-radius: 2px;
    border-bottom: 5px solid ${colors[rideType]};
    box-sizing: border-box;
    padding: 0.5em 0;
  `};

  ${({ address }) =>
    address &&
    `

  `};

  ${({ geoLocation }) =>
    geoLocation &&
    `
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0;
  `};

  ${({ coord }) =>
    coord &&
    `
    margin: 0;
    align-self: flex-start;
    line-height: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align:left;
  `};

  ${({ deleteButton }) =>
    deleteButton &&
    `
    flex-basis: 10%;
    margin: ${spaces.xxSmall};
    border-radius: 5px;
    background-color: red;
    font-weight: 600;
    color: white;
    cursor: pointer;
    
      &:hover {
        opacity: 0.7;
      }
   `}
`
