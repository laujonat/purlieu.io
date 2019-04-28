import React from "react"
import { shallow } from "enzyme"
import Dropdown from "./Dropdown"

describe("Dropdown", () => {
  it("renders the component", () => {
    const wrapper = shallow(<Dropdown />)
    expect(wrapper).toMatchSnapshot()
  })
})
