import React from "react"
import { shallow,} from "enzyme"
import NavPane, { 
  mapStateToProps, 
  mapDispatchToProps 
} from "./NavPane"

const requiredProps = {
  getBoundaries: () => {},
  address: "",
  location: {},
  isFetching: true
};

describe("<NavPane />", () => {
  describe("with required props", () => {
    it("renders the component", () => {
      const wrapper = shallow(<NavPane {...requiredProps} />);
      expect(wrapper).toHaveLength(1);
    });

    it('calls "onSubmit()" on button click', () => {
      const getBoundaries = jest.fn()
      const props = {
        ...requiredProps,
        location: { lat: 123, lng: 333 },
        address: "123 Fake Street",
        getBoundaries: jest.fn()
      }
      const { location, address } = props;
      const wrapper = shallow(<NavPane {...props} />)
      const spy = jest.spyOn(wrapper.instance(), 'onSubmit');

      wrapper.find('button').simulate('click');
      expect(spy).toHaveBeenCalled();
    });

    describe("componentDidUpdate", () => {
      it("updates state", () => {
        const wrapper = shallow(<NavPane {...requiredProps} />);
        wrapper.setProps({ address: "123 different" });
        expect(wrapper.state.addressInput).toEqual(wrapper.props.address)
      })
    });
  })
})