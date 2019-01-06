import React from "react"
import { Loading } from "./Loading"
import renderer from "react-test-renderer"

describe("Loading", () => {
  it("renders without crashing", () => {
    const tree = renderer.create(<Loading />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders and displayed when active is true", () => {
    const tree = renderer.create(<Loading active={true} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it("renders and not displayed when active is false", () => {
    const tree = renderer.create(<Loading active={false} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
