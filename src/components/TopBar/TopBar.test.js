import React from 'react';
import TopBar from './TopBar';
import { shallow } from 'enzyme';
import "../../setupTests";
import { IoMdAirplane } from 'react-icons/io';

const wrapper = shallow(<TopBar />);

describe("renders TopBar", () => {
    it("renders TopBar", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("renders TopBar header", () => {
        const header = <h1 className="header">Airports</h1>;
        expect(wrapper.contains(header)).toEqual(true);
    });
    it("renders TopBar sub-header", () => {
        const subHeader = "Find airport and weather data";
        expect(wrapper.contains(subHeader)).toEqual(true);
    });
    it("renders airplane icon", () => {
        const icon = <IoMdAirplane />
        expect(wrapper.contains(icon)).toEqual(true);
    });
});