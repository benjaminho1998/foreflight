import React from 'react';
import AirportInfo from './AirportInfo';
import { shallow } from 'enzyme';
import "../../setupTests";

const wrapper = shallow(<AirportInfo />);

describe("renders AirportInfo", () => {
    it("renders AirportInfo", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("renders location header", () => {
        const locationHeader = <h3>Location</h3>;
        expect(wrapper.contains(locationHeader)).toEqual(true);
    });
    it("renders runways header", () => {
        const runwaysHeader = <h3>Available Runways</h3>;
        expect(wrapper.contains(runwaysHeader)).toEqual(true);
    });
});