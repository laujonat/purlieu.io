import React from "react"
import { shallow } from "enzyme"
import NavPane from "./NavPane"

const props = {
  address: "",
  location: {},
  isFetching: true,
  getBoundaries: jest.fn()
}

describe("NavPane", () => {
  it("renders the component", () => {
    const wrapper = shallow(<NavPane />)
    expect(wrapper).toMatchSnapshot();
  })

  describe("onSubmit", () => {
    it("calls getBoundaries", () => {
      const wrapper = shallow(<NavPane.WrappedComponent { ...props } />)
      wrapper.setState({ dollarInput: 10 })
      wrapper.instance().onSubmit()
      const { address, location, getBoundaries } = props
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
      const wrapper = shallow(<NavPane {...props} />);
      wrapper.setProps({ address: "123 different" });
      expect(wrapper.state.addressInput).toEqual(wrapper.props.address)
    })
  })
})