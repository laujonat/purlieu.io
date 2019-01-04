import React from "react"
import { Loading } from "./Loading"
import { shallow } from "enzyme"

describe("Loading", () => {
  let props
  let wrapper

  it("renders without crashing", () => {
    props = {
      isFetching: true
    }
    wrapper = shallow(<Loading active={props.isFetching} />)
    expect(wrapper).toBeDefined()
  })

  it("renders and displayed when active is true", () => {
    props = {
      isFetching: true
    }
    wrapper = shallow(<Loading active={props.isFetching} />)
    expect(wrapper.find(Loading)).toHaveLength(1)
  })

  it("renders and not displayed when active is false", () => {
    props = {
      isFetching: false
    }
    wrapper = shallow(<Loading active={props.isFetching} />)
    expect(wrapper.find(Loading)).toHaveLength(0)
  })
})
