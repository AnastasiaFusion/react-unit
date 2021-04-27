import React from 'react';
import { shallow, mount } from 'enzyme';
import Menu from '../Menu';

const setUp = () => mount(<Menu />);
const componentDidMountSpy = jest.spyOn(Menu.prototype, 'componentDidMount');

const componentWillUnmountSpy = jest.spyOn(
  Menu.prototype,
  'componentWillUnmount'
);

describe('Menu component', () => {
  let component;

  it('should call componentDidMount once', () => {
    component = setUp();
    expect(componentDidMountSpy).toHaveBeenCalledTimes(1);
  });

  it('should call calculateOptions in componentDidMount', () => {
    component = setUp();
    const instance = component.instance();
    instance.calculateOptions = jest.fn();
    instance.componentDidMount();
    expect(instance.calculateOptions).toHaveBeenCalledTimes(1);
  });


  describe('Menu state', () => {

    const setComponentAndWidth = width => {
      component = setUp();
      global.innerWidth = width;
      global.dispatchEvent(new Event('resize'));
    };

    it('dropdown menu should contain two items if window width is 1700px', () => {
      setComponentAndWidth(1700)
      expect(component.state().dropMenuOptions).toHaveLength(2);
    });

    it('menu options should contain 5 items if window width is 1540px', () => {
      setComponentAndWidth(1540)
      expect(component.state().menuOptions).toHaveLength(5);
    })
  });

  it('should call calculateOptions during window resize', () => {
    const instance = setUp().instance();
    instance.calculateOptions = jest.fn();
    instance.componentDidMount();
    expect(instance.calculateOptions).toHaveBeenCalledTimes(1);
    global.dispatchEvent(new Event('resize'));
    expect(instance.calculateOptions).toHaveBeenCalledTimes(2);
  });


  it('should call componentWillUnmount', () => {
    component.unmount();
    expect(componentWillUnmountSpy).toHaveBeenCalledTimes(1);
  });
});
