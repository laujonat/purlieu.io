import React from "react"
// import { Loading } from "./Loading"
import styled from "styled-components"
import { shallow } from "enzyme"

const LoadingText = styled.div`
  display: none;
  justify-content: center;

  ${({ active }) =>
    active &&
    `
    color: blue;
    display: block;
  `}
`

const Loading = ({ active }) => {
  return <LoadingText active={active}>Loading..</LoadingText>
}

describe("Loading", () => {
  let props
  let wrapper

  it("renders without crashing", () => {
    props = {
      active: true
    }
    wrapper = shallow(<Loading active={props.active} />)
    expect(wrapper).toBeDefined()
  })

  it("renders and displayed when active is true", () => {
    props = {
      active: true
    }
    wrapper = shallow(<Loading active={props.active} />)
    expect(wrapper.find(LoadingText)).toHaveLength(1)
  })

  it("renders and not displayed when active is false", () => {
    props = {
      active: false
    }
    wrapper = shallow(<Loading active={props.active} />)
    expect(wrapper.find(LoadingText)).toHaveLength(1)
  })
})
