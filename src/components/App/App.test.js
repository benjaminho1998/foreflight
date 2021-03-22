import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import "../../setupTests";

describe("App", () => {
  it("renders App", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
