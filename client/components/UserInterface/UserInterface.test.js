import React from "react"
import NavPane from "../NavPane"
import Map from "../Map"
import { shallow } from "enzyme"

describe("UserInterface", () => {
  it("renders the NavPane with no props", () => {
    const NavPaneComponent = shallow(<NavPane />)
    expect(NavPaneComponent).toMatchSnapshot()
  })

  it("renders the NavPane with no props", () => {
    const MapComponent = shallow(<Map />)
    expect(MapComponent).toMatchSnapshot()
  })
})
