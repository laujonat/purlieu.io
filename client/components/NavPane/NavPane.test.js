import React from "react"
import { shallow } from "enzyme"
import NavPane from "./NavPane"

const props = {
  address: "",
  location: {},
  isFetching: true
}

describe("NavPane", () => {
  it("renders the component", () => {
    const wrapper = shallow(<NavPane />)
    wrapper.setState({ dollarInput: 10, carrier: "Lyft", rideType: "Lyft" })
    expect(wrapper).toMatchSnapshot()
  })

  describe("onSubmit", () => {
    it("calls getBoundaries", () => {
      const addPolygon = jest.fn()
      const wrapper = shallow(<NavPane.WrappedComponent {...props} addPolygon={addPolygon} />)
      wrapper.setState({ dollarInput: 10, carrier: "Lyft", rideType: "Lyft" })
      wrapper.instance().onSubmit()
      const { address, location } = props
      expect(addPolygon).toHaveBeenCalledWith({
        amount: wrapper.state().dollarInput,
        location,
        address,
        rideType: "lyft",
        carrier: "Lyft",
        map: {}
      })
    })
  })

  describe("componentDidUpdate", () => {
    it("updates state", () => {
      const wrapper = shallow(<NavPane {...props} />)
      wrapper.setProps({ address: "123 different" })
      expect(wrapper.state.addressInput).toEqual(wrapper.props.address)
    })
  })
})
