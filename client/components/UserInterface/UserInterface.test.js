import React from "react"
import UserInterface from "./UserInterface"
import { shallow } from "enzyme"

describe("UserInterface", () => {
  it("renders the UserInterface", () => {
    const UserInterfaceComponent = shallow(<UserInterface />)
    expect(UserInterfaceComponent).toMatchSnapshot()
  })
})
