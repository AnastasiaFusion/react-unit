import React from 'react';
import { shallow, mount } from 'enzyme';
import MenuItem from '../MenuItem';
import { items } from '../constants';

const setUp = props => shallow(<MenuItem {...props} />)
const setMount = props => mount(<MenuItem {...props} />)

describe("MenuItem component", () => {
  let component;

  afterEach(() => {
    component.unmount();
  });

  it("should render MenuItem component", () => {
    const { minWidth, title: children } = items[0];
    component = setUp({ minWidth, children });
    expect(component).toMatchSnapshot();
  })

  it("should include 'About' as text content", () => {
    const { minWidth, title: children } = items[1];
    component = setMount({ minWidth, children });
    expect(component.getDOMNode()).toHaveTextContent('About')
  })
})