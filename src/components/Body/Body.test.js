import React from 'react';
import Body from './Body';
import { shallow } from 'enzyme';
import "../../setupTests";
import { NavTab } from "react-router-tabs";

describe("renders Body", () => {

    const wrapper = shallow(<Body />);

    it("renders Body", () => {
        expect(wrapper).toMatchSnapshot();
    });
    it("renders Body tab 1", () => {
        const tab1 = <NavTab to="/kaus">Austin-Bergstrom International (KAUS)</NavTab>;
        expect(wrapper.contains(tab1)).toEqual(true);
    });
    it("renders Body tab 2", () => {
        const tab2 = <NavTab to="/50r">Lockhart Municipal (50R)</NavTab>;
        expect(wrapper.contains(tab2)).toEqual(true);
    });
    it("renders Body tab 3", () => {
        const tab3 = <NavTab to="/egll">Heathrow (EGLL)</NavTab>;
        expect(wrapper.contains(tab3)).toEqual(true);
    });
    it("renders Body tab 4", () => {
        const tab4 = <NavTab to="/khou">William P Hobby (KHOU)</NavTab>;
        expect(wrapper.contains(tab4)).toEqual(true);
    });
});