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
    expect(wrapper).toMatchSnapshot()
  })

  describe("onSubmit", () => {
    it("calls getBoundaries", () => {
      const getBoundaries = jest.fn()
      const wrapper = shallow(
        <NavPane.WrappedComponent {...props} getBoundaries={getBoundaries} />
      )
      wrapper.setState({ dollarInput: 10 })
      wrapper.instance().onSubmit()
      const { address, location } = props
      expect(getBoundaries).toHaveBeenCalledWith({
        amount: wrapper.state().dollarInput,
        geoLocation: {
          location,
          address
        }
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
