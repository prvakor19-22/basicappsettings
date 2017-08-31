import React from "react";
import Picker from "../app/react/advanced/Picker";
import { expect } from 'chai';
import { shallow } from 'enzyme';

describe('initial test', () => {
  it('should render without errors', () => {
    const value = "reactjs";
    const options = ["react", "frontend"];
    const onChange = () => {return null}
    const wrapper = shallow(<Picker value={value} options={options} onChange={onChange}/>);
    expect(wrapper.length).to.equal(1);
  });
});